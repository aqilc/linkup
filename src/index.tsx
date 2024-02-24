import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './screens/welcome';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <LinearGradient
      colors={['rgba(81,36,82,1)', 'rgba(33,75,88,1)']} start={[0, 0]} end={[1, 2.31]}
      style={styles.container}
      >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome}/>
          <Tab.Navigator>
            <Tab.Screen name="Login" component={Login} />
          </Tab.Navigator>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
