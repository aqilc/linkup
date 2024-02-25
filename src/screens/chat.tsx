import { View, Text } from "react-native";


const serverconn = new WebSocket('ws://localhost:3000');
serverconn.onopen = () => serverconn.send("hi");

export default function Chat() {
	return (
		<View>
			<Text>Chat</Text>
		</View>
	)
}