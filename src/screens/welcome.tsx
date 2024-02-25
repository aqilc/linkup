import { StyleSheet, View, TextInput, Text, Button, Pressable } from "react-native";
import GradientBackground from "../components/gradientbackground";
import GradientThing from "../components/gradientthing";


export default function Welcome({ navigation }) {
	return (
		<GradientBackground>
			<Text style={styles.title}>Welcome</Text>
			<GradientThing style={styles.thing}>
				<h2>The new way for Gen Z's to connect on campus.</h2>
				<p>create an account to join</p>
			</GradientThing>
			<Pressable onPress={() => navigation.navigate('Login')}>
				<Text>Go to Login</Text>
			</Pressable>
		</GradientBackground>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white',
	},
	thing: {
		width: '70%',
		height: 500,
		fontFamily: 'Grotesk Bold',
		color: 'white',
		borderRadius: 20,
	},
	title: {
		fontSize: 24,
		marginBottom: 24,
		color: 'white',
	},
	input: {
		borderWidth: 1,
		borderColor: '#000',
		width: '80%',
		padding: 8,
		marginBottom: 8,
		color: 'white',
	},
});