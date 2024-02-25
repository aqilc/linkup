import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/home';
import { View } from 'react-native';
import { Text } from 'react-native';
import { SFSymbol } from 'react-native-sfsymbols';
import Notifications from './screens/notifcations';
import Profile from './screens/profile';
import Chats from './screens/chats';
import { User } from '@supabase/supabase-js';


const Tab = createBottomTabNavigator();

export default function BottomTabs({ user }: { user: User }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{ backgroundColor: 'transparent' }}
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarActiveBackgroundColor: '#ffffff70',
        tabBarInactiveBackgroundColor: '#ffffff70',
        headerShown: false,
        tabBarStyle: {
          height: 100, 
          borderTopWidth: 0,
          backgroundColor:'transparent',
          elevation: 0,
        }
      }}>
      <Tab.Screen
        name="Chat"
        component={() => <Chats user={user} />}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <View>
            <SFSymbol name="message" color={color} size={size} />
            </View>
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
            <View>
            <SFSymbol name="person" color={color} size={size} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
