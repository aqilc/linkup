import { StyleSheet, View, TextInput, Text, Button, ScrollView, Pressable } from "react-native";
import GradientBackground from "../components/gradientbackground";
import { moderateScale } from "../helpers/fontsize";
// import GLOBALS from "../helpers/globalstate";


export default function Login({ navigation }) {
	return (
		<GradientBackground>
			<ScrollView contentContainerStyle={styles.container}>
				<Text style={styles.title}>Login</Text>
				<View style={styles.inputs}>
					<TextInput style={styles.input} placeholder="Username" />
					<TextInput style={styles.input} placeholder="Password" />
				</View>
				<View style={styles.buttons}>
					<Pressable style={styles.button} onPress={() => {}}>
						<Text style={styles.white}>sign in</Text>
					</Pressable>
					<Pressable style={styles.button} onPress={() => navigation.goBack()}>
						<Text style={styles.white}>go back</Text>
					</Pressable>
				</View>
			</ScrollView>
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
	title: {
		fontSize: moderateScale(32),
		marginBottom: 24,
		fontFamily: 'Grotesk-Bold',
		color: 'white',
	},
	white: {
		color: 'white',
		fontFamily: 'Grotesk-Bold',
		fontSize: moderateScale(18),
	},
	input: {
		borderWidth: 0,
		marginBottom: 8,
		borderRadius: 20,
		backgroundColor: '#f2f2f270',
		fontFamily: 'Grotesk-Bold',
		fontSize: moderateScale(18),
		color: 'white',
		padding: moderateScale(20),
		width: "100%",
	},
	inputs: {
		width: '80%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: moderateScale(20),
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
});