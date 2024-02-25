import { App } from "uWebSockets.js";
import { supabase } from "./db";


const app = App()
	.ws("/*", {
		open: (ws) => {
			console.log("A new connection has been established.");
		},
		message: async (ws, message, isBinary) => {
			console.log(await supabase.from("messages").select("*"));
		},
		close: (ws, code, message) => {
			console.log("A connection has been closed.");
		}
	});

app.listen(3000, (token) => {
	if (token) {
		console.log("Listening to port 3000.");
	} else {
		console.log("Failed to listen to port 3000.");
	}
});