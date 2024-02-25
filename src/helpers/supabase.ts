// import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import { Database } from '../../backend/supabase'

const supabaseUrl = 'https://cwovxxfthstpemrdofkv.supabase.co'
const supabaseAnonKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3b3Z4eGZ0aHN0cGVtcmRvZmt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3OTUxMDIsImV4cCI6MjAyNDM3MTEwMn0.SuLs1mMLV3Fnn_yflnfK9QozObYyUDNht0cosUA_q8Q'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
  realtime: {
    params: {
        eventsPerSecond: 10,
    },
  },
})