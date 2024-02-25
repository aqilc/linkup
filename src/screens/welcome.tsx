import { StyleSheet, View, TextInput, Text, Button, Pressable } from "react-native";
import GradientBackground from "../components/gradientbackground";
import GradientThing from "../components/gradientthing";
import { moderateScale } from "../helpers/fontsize";


export default function Welcome({ navigation }) {
	return (
		<GradientBackground>
			<Text style={styles.title}>Welcome</Text>
			<GradientThing style={styles.thing}>
				<Text style={styles.h1}>The new way for Gen Z's to connect on campus.</Text>
				<Text>create an account to join</Text>
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
		height: moderateScale(500),
		fontFamily: 'Grotesk Bold',
		color: 'white',
		borderRadius: 20,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
		textAlign: 'center',
	},
	h1: {
		fontSize: moderateScale(24),
		marginBottom: moderateScale(24),
		color: 'white',
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