import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { User } from "@supabase/supabase-js";
import { useState, useCallback, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { moderateScale } from "../helpers/fontsize";
import { supabase } from "../helpers/supabase";
import Constants from "expo-constants";

const uri = Constants?.expoConfig?.hostUri
  ? Constants.expoConfig.hostUri.split(`:`).shift().concat(`:8080`)
  : `yourapi.com`;

const Stack = createNativeStackNavigator();
export default function Chats({ user }: { user: User }) {
	const [messages, setMessages] = useState([]);
	const [chats, setChats] = useState([]);
	const [connected, setConnected] = useState(false);
	alert(uri);
	const serverconn = useRef(new WebSocket("ws://" + uri)).current;

	useEffect(() => {
		(async () => {
			const url = "http://" + uri + '/chats/' + user?.id;
			alert(url);
			try {
				const data = await (await fetch(url, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				})).json();
				alert(JSON.stringify(data));
				setChats(data.channels);
			} catch (error) {}
		})()
		// serverconn.onopen = async () => {
		// 	setConnected(true);
		// };
	}, []);

	const onSend = useCallback((messages = []) => {
		setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
	}, []);
	
	return (
		<View style={{flex: 1}}>
			<Stack.Navigator
				initialRouteName="Chats"
				>
				<Stack.Screen name="Chats">{() => <ChatPicker chats={chats} onSelect={chat => console.log(chat)} />}</Stack.Screen>
				<Stack.Screen name="Chat">{() => <Chat connected={connected} messages={messages} onSend={onSend} />}</Stack.Screen>
			</Stack.Navigator>
		</View>
	)
}


function ChatPicker({ chats, onSelect } : { chats: any[], onSelect: (chat: any) => void }) {
    const [userNames, setUserNames] = useState<string[]>([]);
	useEffect(() => {
		(async () => {
			const { data: users, error } = await supabase
				.from('profile')
				.select('email')
				.eq('id', chats.map(chat => chat.sendTo));
			if (error) {
				console.error(error);
			} else {
				setUserNames(users.map(user => user.email));
			}
		})();
	}, [chats]);
	return (
		<View style={{flex: 1}}>
			{chats.map((chat, id) => 
				<View style={styles.chats} key={id}>
					<Image source={{uri:'https://www.spongebobshop.com/cdn/shop/products/SB-Standees-Spong-2_800x.jpg?v=1603744569'}} style={{width: 50, height: 50}} />
					<Text  onPress={() => onSelect(chat)}>{userNames[chat.sendTo]}</Text>
				</View>
			)}
		</View>
	);
}

	

function Chat({ connected = false, messages, onSend } : { connected: boolean, messages: any[], onSend: (messages: any[]) => void }) {
	return (
		<View style={{flex: 1}}>
			{ connected ?	
				<GiftedChat
					messages={messages}
					onSend={messages => onSend(messages)}
					messagesContainerStyle={{backgroundColor: '#00000000'}}
					user={{
						_id: 1,
					}}
				/>
				:
				<Text>Connecting...</Text>
			}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	chats: {
		backgroundColor: '#fff',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		borderBottomColor: '#acacac',
		marginLeft: moderateScale(14),
		padding: moderateScale(10),
		borderBottomWidth: 1,
	}
});


