import { LinearGradient } from "expo-linear-gradient";
import { ButtonProps, Pressable } from "react-native";
import { Text } from "react-native";

export default function GradientThing({ children, style }) {
	return (
		<LinearGradient
			colors={["#360134", "#0b8693"]}
			start={[1, 0]}
			end={[1, 2.31]}
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