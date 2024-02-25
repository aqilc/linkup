import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SweetSFSymbol from "sweet-sfsymbols";
import Home from './screens/home';
import { View } from 'react-native';
import { Text } from 'react-native';
import { SFSymbol } from 'react-native-sfsymbols';


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarActiveBackgroundColor: '#ffffff70',
        tabBarInactiveBackgroundColor: '#ffffff70',
        headerShown: false,
        tabBarStyle: {
          height: 100, 
          borderTopWidth: 0,
          width: '100%',
          elevation: 0,
          left: 0,
          right: 0,
        }
      }}
      >
      

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <View> 
              <SFSymbol name="house" color={color} size={size} />
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <SweetSFSymbol name="bell" colors={[color]} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <SweetSFSymbol name="person" colors={[color]} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}
