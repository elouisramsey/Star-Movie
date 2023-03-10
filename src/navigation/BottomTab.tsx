import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons
} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS } from 'config/COLORS'
import Tickets from 'screens/PurchasedTickets/Tickets'
import { NotificationScreen, ProfileScreen } from 'screens/index'
import { Route } from 'types/IBRoute'
import { NavigationStyles } from './NavigationStyles'
import { HomeStack } from './routes'

const Tab = createBottomTabNavigator()

export const routes: Route[] = [
  {
    name: 'HomeScreen',
    component: HomeStack,
    options: {
      tabBarIcon: ({ focused }) => (
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
    component: Tickets,
    options: {
      tabBarIcon: ({ focused }) => (
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
      tabBarIcon: ({ focused }) => (
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
      tabBarIcon: ({ focused }) => (
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

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: [NavigationStyles.navigator, null]
      }}
    >
      {routes.map((route) => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Tab.Navigator>
  )
}
