import express, { Request, Response } from 'express';
import http from 'http';
import WebSocket, { WebSocketServer } from 'ws';
import { supabase } from './db';
import { Database } from './supabase';
import { User } from '@supabase/supabase-js';

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });



wss.on('connection', (ws: WebSocket) => {
  ws.on('message', async (message: WebSocket.Data) => {
    // Handle incoming messages from clients
    console.log('Received message:', message);

    // Broadcast message to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });
});


app.use(express.json());



app.get('/chats/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
	let channels: Database["public"]["Tables"]["channels"]["Row"][] = [];

	// Check if a channel exists for the user
	const { data: existingChannels, error } = await supabase
		.from('channels')
		.select('*')
		.eq("sender", id).eq("sendTo", id);

	if (error) throw error;

	console.log(existingChannels);

	if (existingChannels.length) {
		channels = existingChannels; 
	} else {
		// If no channel exists, create a new one with a random user
		const randomUserId = await generateotheruserid(id);

		const { data: newChannel, error: insertError } = await supabase
			.from('channels')
			.insert([{ sender: id, sendTo: randomUserId }]).select("*");
		console.log(newChannel);
		if(error) throw error;
		channels.push(newChannel![0]);
	}
	res.json({ channels });
});


server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function generateotheruserid(user: string): Promise<string> {
	const { data: users, error } = await supabase.from('profile').select("*").neq("id", user);
	// console.log(error, users);
	if(error) throw error;
	const randomUser = users[Math.floor(Math.random() * users.length)];
	console.log("Picking user " + randomUser.id + " for " + user);
	return randomUser.id;
}
