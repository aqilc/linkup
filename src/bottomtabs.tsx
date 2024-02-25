import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { SFSymbol } from 'react-native-sfsymbols';
import Home from './screens/home';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarActiveBackgroundColor: '#ffffff70',
        tabBarInactiveBackgroundColor: '#ffffff70',
      }}
      >
      
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            // <SFSymbol name="home" color={color} size={size} />
            <>Home</>
          ),
        }}
      />
      {/* <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <SFSymbol name="bell" color={color} size={size} />
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
            <SFSymbol name="account" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}