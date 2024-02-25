import { StyleSheet, View, TextInput, Text, Button, Pressable } from "react-native";
import GradientBackground from "../components/gradientbackground";
import GradientThing from "../components/gradientthing";
import { moderateScale } from "../helpers/fontsize";


export default function Home({ navigation }) {
	return (
		<GradientBackground style={styles.container}>
			<Text style={styles.title}>linkup</Text>
			<GradientThing style={styles.thing}>
				<Text style={styles.h1}>the new way for Gen Z's to connect on campus.</Text>
				<Text style={styles.white}>create an account to join</Text>
			</GradientThing>
			<View style={styles.buttons}>
				<Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
					<Text style={styles.white}>sign up with email</Text>
				</Pressable>
				<Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
					<Text style={styles.white}>log in</Text>
				</Pressable>
			</View>
		</GradientBackground>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white',
		fontFamily: 'Grotesk-Bold',
		gap: moderateScale(100),
	},
	white: {
		color: 'white',
		fontFamily: 'Grotesk-Bold',
		fontSize: moderateScale(18),
	},
	thing: {
		width: '80%',
		height: '25%',
		fontFamily: 'Grotesk-Bold',
		color: 'white',
		borderRadius: 20,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
		textAlign: 'center',
		// fontWeight: 'bold',
	},
	h1: {
		fontSize: moderateScale(20),
		marginBottom: moderateScale(24),
		fontFamily: 'Grotesk-Bold',
		color: 'white',
		textAlign: 'center',
	},
	button: {
		padding: 20,
		borderRadius: 20,
		backgroundColor: '#404040',
		textAlign: 'center',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white',
	},
	buttons: {
		display: 'flex',
		flexDirection: 'column',
		gap: moderateScale(20),
		width: '70%'
	},
	title: {
		fontSize: moderateScale(32),
		color: 'white',
		fontFamily: 'Grotesk-Bold',
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