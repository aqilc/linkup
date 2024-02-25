import { StyleSheet, View, TextInput, Text, Button, ScrollView } from "react-native";
import GradientBackground from "../components/gradientbackground";


export default function Login() {
	return (
		<GradientBackground>
			<ScrollView contentContainerStyle={styles.container}>
				<Text style={styles.title}>Login</Text>
				<TextInput style={styles.input} placeholder="Username" />
				<TextInput style={styles.input} placeholder="Password" />
				<Button title="Sign in" onPress={() => {}} />
			</ScrollView>
		</GradientBackground>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 24,
		marginBottom: 24,
	},
	input: {
		borderWidth: 1,
		borderColor: '#000',
		width: '80%',
		padding: 8,
		marginBottom: 8,
	},
});