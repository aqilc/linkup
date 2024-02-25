import { StyleSheet, View, TextInput, Text, Button, Pressable, Image } from "react-native";
import GradientBackground from "../components/gradientbackground";
import GradientThing from "../components/gradientthing";
import { moderateScale } from "../helpers/fontsize";
import { supabase } from "../helpers/supabase";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";



export default function Profile({ navigation }) {
    const handleEditPress = async () => {
        const { error } = await supabase.auth.signOut();
    }; 
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }, [])

      return (
		<GradientBackground style={styles.container}>
                <View style={styles.profileImageContainer}>
                    <Image 
                    style={styles.profileImage}
                    source={{uri:'https://www.spongebobshop.com/cdn/shop/products/SB-Standees-Spong-2_800x.jpg?v=1603744569' }}
                    />
                <Text style={styles.name}>{session?.user.email}</Text>
                </View>
                <View style={styles.bioContainer}>
                    
                    <Pressable onPress={handleEditPress}><Text style={styles.pressableText}>Edit Profile</Text></Pressable>
                    <View style = {styles.statsContainer}>
                        <View style={styles.statContainer}>
                            <Text style={styles.statCount}>1</Text>
                            <Text style={styles.statLabel}>connects</Text>
                        </View>
                        <View style={styles.statContainer}>
                            <Text style={styles.statCount}>0</Text>
                            <Text style={styles.statLabel}>links</Text>
                        </View>
                    </View>
                    <Text style={styles.bioText}>I am a student at the Rochester Institute of Technology looking to make new friends!</Text>
                </View>
            </GradientBackground>
	);
};

const styles = StyleSheet.create({
    pressableText: {
        color: 'lightblue',
        fontSize: 16,
        fontFamily: 'Grotesk-Bold',
    },
    statsContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
      },
      statContainer: {
        alignItems: 'center',
        flex: 1,
      },
      statCount: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
      },
      statLabel: {
        fontSize: 16,
        color: '#999',
      },    
    bioContainer: {
        padding: 10, 
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bioText: {
        fontSize: moderateScale(16),
        color: 'white',
        fontFamily: 'Grotesk-Bold',
    },
    coverPhoto: {
        width: '100%',
        height: 200,
    },
    profileImageContainer: {
        position: 'absolute',
        top: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
    },
    name: {
        fontSize: moderateScale(24),
        color: 'white',
        fontFamily: 'Grotesk-Bold',
        marginTop: 20,
    },

	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white',
		fontFamily: 'Grotesk-Bold',
		gap: moderateScale(100),
	},
	white: {
		color: 'white',
		fontFamily: 'Grotesk-Bold',
		fontSize: moderateScale(18),
	},
	thing: {
		width: '80%',
		height: '25%',
		fontFamily: 'Grotesk-Bold',
		color: 'white',
		borderRadius: 20,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
		textAlign: 'center',
		// fontWeight: 'bold',
	},
	h1: {
		fontSize: moderateScale(20),
		marginBottom: moderateScale(24),
		fontFamily: 'Grotesk-Bold',
		color: 'white',
		textAlign: 'center',
	},
	button: {
		padding: 20,
		borderRadius: 20,
		backgroundColor: '#404040',
		textAlign: 'center',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white',
	},
	buttons: {
		display: 'flex',
		flexDirection: 'column',
		gap: moderateScale(20),
		width: '70%'
	},
	title: {
		fontSize: moderateScale(32),
		color: 'white',
		fontFamily: 'Grotesk-Bold',
	},
});