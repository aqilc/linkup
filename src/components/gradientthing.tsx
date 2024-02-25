import { LinearGradient } from "expo-linear-gradient";
import { ButtonProps, Pressable } from "react-native";
import { Text } from "react-native";

export default function GradientThing({ children, style }) {
	return (
		<LinearGradient
			colors={["#360134", "#0b8693"]}
			start={[0, .5]}
			end={[1, .5]}
			style={{
				...style,
				// flex: 1,
				// alignItems: "center",
				// justifyContent: "center",
			}}
			>
			{children}
		</LinearGradient>
	);
}