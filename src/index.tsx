import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login';
import Welcome from './screens/welcome';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback, useEffect, useState } from 'react';
import BottomTabs from './bottomtabs';
import { supabase } from './helpers/supabase';
import Register from './screens/register';
import { Session } from '@supabase/supabase-js';


SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  const [fontsLoaded, fontError] = useFonts({
    'Grotesk-Bold': require('../assets/Grotesk-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) await SplashScreen.hideAsync();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        {session && session.user ?
          <BottomTabs user={session.user}/>
          :
          <Stack.Navigator>
            <Stack.Screen component={Welcome} name="Welcome" options={{ headerShown: false }}/>
            <Stack.Screen component={Login} name="Login" options={{ headerShown: false }}/>
            <Stack.Screen component={Register} name="Register" options={{ headerShown: false }}/>
          </Stack.Navigator>
        }
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}
