import { NavigationContainer } from '@react-navigation/native'
import { COLORS } from 'config/index'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import BottomTab from 'navigation/BottomTab'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import 'react-native-gesture-handler'

const getFont = () =>
  Font.loadAsync({
    SF_Pro: require('./assets/fonts/SF-Pro-Text-Regular.otf')
  })

export default function App() {
  const [fontsLoaded, setFontLoaded] = useState(false)

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <BottomTab />
        <StatusBar style='light' />
      </NavigationContainer>
    )
  } else {
    return (
      <AppLoading
        startAsync={getFont}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
