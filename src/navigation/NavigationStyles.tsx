import { COLORS } from 'config/COLORS'
import { heightPixel } from 'config/normalize'
import { StyleSheet } from 'react-native'

export const NavigationStyles = StyleSheet.create({
  navigator: {
    borderTopWidth: 1,
    borderTopColor: COLORS.secondary,
    backgroundColor: COLORS.secondary,
    elevation: 0,
    height: heightPixel(90),
    alignItems: 'center',
    justifyContent: 'center'
  }
})
