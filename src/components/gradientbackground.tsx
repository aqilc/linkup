import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export default function GradientBackground({ children, style }: { children: any, style?: any }) {
	return (
		<LinearGradient
			colors={['rgba(81,36,82,1)', 'rgba(33,75,88,1)']} start={[0, 0]} end={[1, 2.31]}
			style={{...styles.container, ...style}}
			>
			{children}
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
		fontFamily: 'Grotesk Bold'
  },
});
