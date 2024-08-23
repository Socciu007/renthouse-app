import React, { useState } from 'react'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Image } from 'react-native'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { Colors } from '@/constants/Colors'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { HelloWave } from '@/components/HelloWave'
import { Button, TextInput } from 'react-native-paper'

import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'

export default function Login() {
  WebBrowser.maybeCompleteAuthSession()
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '419612245775-u1qqumbqiq86u5ucva77ka8d4clrci0j.apps.googleusercontent.com',
    expoClientId: '419612245775-c0v85cnvfabvgiajdphjkp2pic81i7hi.apps.googleusercontent.com',
  });
  const [email, setEmail] = useState<string>('')

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/login.jpg')}
          style={{height: '100%', width: '100%'}}
        />
      }>
      <ThemedView style={{
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: 6,
      }}
      >
        <ThemedText type='title'>Welcome to House!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedText style={{alignItems:'center', flexDirection: 'column', marginTop: 5}}>
        <TextInput
          label="Email"
          value={email}
          onChange={handleChangeEmail}
          style={{ fontSize: 16, lineHeight: 24, backgroundColor: 'transparent', width: '100%'}}
        />
      </ThemedText>

      <ThemedText style={{alignItems:'center', flexDirection: 'column', marginTop: 5}}>
        <TextInput
          label="Email"
          value={email}
          onChange={handleChangeEmail}
          style={{ fontSize: 16, lineHeight: 24, backgroundColor: 'transparent', width: '100%' }}
        />
      </ThemedText>

      <ThemedView style={{marginTop: 10}}>
        <Button mode='outlined'>
          <ThemedText style={{textAlign: 'center'}} type='subtitle'>Log in</ThemedText>
        </Button>
      </ThemedView>

      <ThemedView style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
        <ThemedView style={{
          flex: 1,
          height: 0.5,
          backgroundColor: '#000',
        }}></ThemedView>
        <ThemedText style={{marginHorizontal: 10, paddingBottom: 4}}>or</ThemedText>
        <ThemedView style={{
          flex: 1,
          height: 0.5,
          backgroundColor: '#000',
        }}></ThemedView>
      </ThemedView>

      <ThemedView style={{marginTop: 15}}>
        <ThemedView style={{flexDirection: 'row',justifyContent: 'flex-start', gap:76, alignItems: 'center', marginBottom: 10, padding: 10, backgroundColor: Colors.light.tint, borderRadius: 8}}>
          <FontAwesome5 name="facebook" size={24} color="#fff" />
          <ThemedText style={{color: '#fff'}} type='defaultSemiBold'>Sign in with Facebook</ThemedText>
        </ThemedView>
        <ThemedView>
          <Button onPress={() => promptAsync()} style={{flexDirection: 'row',justifyContent: 'flex-start', gap:76, alignItems: 'center', marginBottom: 10, padding: 10, backgroundColor: Colors.light.tint, borderRadius: 8}}>
            <AntDesign name="google" size={24} color="#fff" />
            <ThemedText style={{color: '#fff'}} type='defaultSemiBold'>Sign in with Google</ThemedText>
          </Button>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  )
}