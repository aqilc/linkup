import { StyleSheet, View, TextInput, Text, Button } from "react-native";


export default function Welcome() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome</Text>
			<TextInput style={styles.input} placeholder="Email" />
			<TextInput style={styles.input} placeholder="Password" />
			<Button title="Sign in" onPress={() => {}} />
		</View>
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