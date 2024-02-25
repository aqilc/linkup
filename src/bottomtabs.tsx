import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
// import { SFSymbol } from 'react-native-sfsymbols';
import { Entypo, Ionicons } from '@expo/vector-icons';
import Profile from './screens/profile';
import Chats from './screens/chats';
import { User } from '@supabase/supabase-js';


const Tab = createBottomTabNavigator();

export default function BottomTabs({ user }: { user: User }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{ backgroundColor: '#000000' }}
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        // tabBarActiveBackgroundColor: '#ffffff70',
        // tabBarInactiveBackgroundColor: '#ffffff70',
        headerShown: false,
        tabBarStyle: {
          height: 100, 
          borderTopWidth: 0,
          // backgroundColor:'#000000',
          elevation: 0,
        },

        headerBackground: () => <View style={{backgroundColor: '#000000'}}></View>,
        tabBarBackground: () => <View style={{backgroundColor: '#000000'}}></View>
      }}>
      <Tab.Screen
        name="Chat"
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <View>
              <Entypo name="message" color={color} size={size} />
            </View>
          ),
          tabBarBadge: 3,
        }}
      >{() => <Chats user={user} />}</Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <View>
              <Ionicons name="person" color={color} size={size} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
