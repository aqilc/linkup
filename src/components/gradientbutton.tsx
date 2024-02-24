import { LinearGradient } from "expo-linear-gradient";
import { ButtonProps, Pressable } from "react-native";
import { Text } from "react-native";

export default function GradientButton({ title }: ButtonProps) {
	return (
		<Pressable>
			<LinearGradient
				colors={["rgba(81,36,82,1)", "rgba(33,75,88,1)"]}
				start={[0, 0]}
				end={[1, 2.31]}
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
				}}
				>
				<Text style={{ color: "#fff" }}>{title}</Text>
			</LinearGradient>
		</Pressable>
	);
}