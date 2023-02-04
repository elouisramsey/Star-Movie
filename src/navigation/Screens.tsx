import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons
} from '@expo/vector-icons'
import { COLORS } from 'config/COLORS'
import { Route } from 'react-native'
import {
  HomeScreen,
  NotificationScreen,
  ProfileScreen,
  TicketsScreen
} from 'screens/index'

export const Routes: Route[] = [
  {
    name: 'Home',
    component: HomeScreen,
    options: {
      tabBarIcon: ({ focused }: { focused: any }) => (
        <FontAwesome5
          name='cookie'
          size={32}
          style={
            focused
              ? { color: COLORS.accent }
              : { color: COLORS.white, opacity: 0.3 }
          }
        />
      )
    }
  },
  {
    name: 'Tickets',
    component: TicketsScreen,
    options: {
      tabBarIcon: ({ focused }: { focused: any }) => (
        <MaterialCommunityIcons
          name='ticket-outline'
          size={32}
          style={
            focused
              ? { color: COLORS.accent }
              : { color: COLORS.white, opacity: 0.3 }
          }
        />
      )
    }
  },
  {
    name: 'Notification',
    component: NotificationScreen,
    options: {
      tabBarIcon: ({ focused }: { focused: any }) => (
        <Ionicons
          name='notifications-outline'
          size={32}
          style={
            focused
              ? { color: COLORS.accent }
              : { color: COLORS.white, opacity: 0.3 }
          }
        />
      )
    }
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    options: {
      tabBarIcon: ({ focused }: { focused: any }) => (
        <Ionicons
          name='person-outline'
          size={32}
          style={
            focused
              ? { color: COLORS.accent }
              : { color: COLORS.white, opacity: 0.3 }
          }
        />
      )
    }
  }
]
