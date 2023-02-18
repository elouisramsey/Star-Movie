import { RouteProp } from '@react-navigation/native'
import {
  StackNavigationProp,
  createStackNavigator
} from '@react-navigation/stack'

import { COLORS } from 'config/COLORS'
import { SelectedMovieProvider } from 'context/SelectedMovie/TicketContext'
import Login from 'screens/Auth/Login'
import Signup from 'screens/Auth/Signup'
import MovieDetails from 'screens/MovieDetails'
import Payment from 'screens/Payment/Payment'
import Extras from 'screens/Tickets/Extras/Extras'
import SeatSelection from 'screens/Tickets/Seats/SeatSelection'
import { HomeScreen, ProfileScreen } from 'screens/index'
import { ProfileStackParamList, RootStackParamList } from './types'

const HomeStackNavigation = createStackNavigator<RootStackParamList>()
const ProfileStackNavigation = createStackNavigator<ProfileStackParamList>()

export const HomeStack = () => {
  return (
    <SelectedMovieProvider>
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
        <HomeStackNavigation.Screen
          name='MovieDetails'
          component={MovieDetails}
          options={{
            gestureEnabled: true
          }}
        />
        <HomeStackNavigation.Screen
          name='SeatSelection'
          component={SeatSelection}
          options={{
            gestureEnabled: true
          }}
        />
        <HomeStackNavigation.Screen
          name='Extra'
          component={Extras}
          options={{
            gestureEnabled: true
          }}
        />
        <HomeStackNavigation.Screen
          name='Payment'
          component={Payment}
          options={{
            gestureEnabled: true
          }}
        />
        <HomeStackNavigation.Screen
          name='Signup'
          component={Signup}
          options={{
            gestureEnabled: true
          }}
        />
      </HomeStackNavigation.Navigator>
    </SelectedMovieProvider>
  )
}

type ProfileScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  'Profile'
>
type ProfileScreenRouteProp = RouteProp<ProfileStackParamList, 'Profile'>

type Props = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
  updateAuthState: (authState: boolean) => void
}

export const ProfileStack: React.FC<Props> = (props) => {
  return (
    <ProfileStackNavigation.Navigator
      initialRouteName='Profile'
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.primary
      }}
    >
      <ProfileStackNavigation.Screen
        name='Profile'
        component={ProfileScreen}
        initialParams={{ updateAuthState: props.updateAuthState }}
        options={{
          gestureEnabled: true
        }}
      />
      <ProfileStackNavigation.Screen
        name='Signup'
        component={Signup}
        options={{
          gestureEnabled: true
        }}
      />
      <ProfileStackNavigation.Screen
        name='Login'
        component={Login}
        options={{
          gestureEnabled: true
        }}
      />
    </ProfileStackNavigation.Navigator>
  )
}
