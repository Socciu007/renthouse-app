import React, { useState } from 'react'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Image } from 'react-native'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { Colors } from '@/constants/Colors'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { HelloWave } from '@/components/HelloWave'
import { TextInput } from 'react-native-paper'

export default function Login() {
  const [email, setEmail] = useState<string>('')

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
        <ThemedText type='title'>Wellcome to House!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedText style={{alignItems:'center', flexDirection: 'column'}}>
        <TextInput
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', backgroundColor: 'transparent' }}
        />
      </ThemedText>
      <ThemedView>
        <ThemedText style={{textAlign: 'center', marginTop: 40}} type='subtitle'>Login/Signup</ThemedText>
      </ThemedView>
      <ThemedView style={{marginTop: 30}}>
        <ThemedView style={{flexDirection: 'row',justifyContent: 'flex-start', gap:76, alignItems: 'center', marginBottom: 10, padding: 10, backgroundColor: Colors.light.tint, borderRadius: 8}}>
          <FontAwesome5 name="facebook" size={24} color="#fff" />
          <ThemedText style={{color: '#fff'}} type='defaultSemiBold'>Sign in with Facebook</ThemedText>
        </ThemedView>
        <ThemedView style={{flexDirection: 'row',justifyContent: 'flex-start', gap:76, alignItems: 'center', marginBottom: 10, padding: 10, backgroundColor: Colors.light.tint, borderRadius: 8}}>
          <AntDesign name="google" size={24} color="#fff" />
          <ThemedText style={{color: '#fff'}} type='defaultSemiBold'>Sign in with Google</ThemedText>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  )
}