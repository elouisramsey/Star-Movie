import { createStackNavigator } from '@react-navigation/stack'
import { COLORS } from 'config/COLORS'
import { HomeScreen } from 'screens/index'
import { RootStackParamList } from './types'

const HomeStackNavigation = createStackNavigator<RootStackParamList>()

export const HomeStack = () => {
  return (
    <HomeStackNavigation.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.primary
      }}
    >
      <HomeStackNavigation.Screen
        name='Home'
        component={HomeScreen}
        options={{
          gestureEnabled: true
        }}
      />
    </HomeStackNavigation.Navigator>
  )
}