import { NavigationContainer } from '@react-navigation/native'
import { COLORS } from 'config/COLORS'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import BottomTab from 'navigation/BottomTab'
import React, { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'
import 'react-native-gesture-handler'
import { QueryClient, QueryClientProvider } from 'react-query'

// SplashScreen.preventAutoHideAsync()

const getFont = () =>
  Font.loadAsync({
    SF_Pro: require('./assets/fonts/SF-Pro-Text-Regular.otf')
  })

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2 } }
  })

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await getFont()
        // // Artificially delay for two seconds to simulate a slow loading
        // // experience. Please remove this if you copy and paste the code!
        // await new Promise((resolve) => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.primary
        }}
      />
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <View
          onLayout={onLayoutRootView}
          style={{ flex: 1, backgroundColor: COLORS.primary }}
        >
          <BottomTab />
        </View>
        <StatusBar style='light' />
      </NavigationContainer>
    </QueryClientProvider>
  )
}
