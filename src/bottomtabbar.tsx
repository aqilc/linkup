import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SFSymbol } from 'react-native-sfsymbols';
import Login from './screens/login';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
      >
      
      <Tab.Screen
        name="Feed"
        component={Login}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <SFSymbol name="home" color={color} size={size} />
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