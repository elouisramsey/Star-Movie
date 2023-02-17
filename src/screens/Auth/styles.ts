import { COLORS } from 'config/COLORS'
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical
} from 'config/normalize'
import { StyleSheet } from 'react-native'

export const AuthStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(35),

    backgroundColor: COLORS.secondary
  },
  inputContainer: {
    marginBottom: pixelSizeVertical(5)
  },
  label: {
    fontSize: fontPixel(12),
    opacity: 0.5,
    textTransform: 'uppercase',
    lineHeight: 18,
    letterSpacing: 1.5
  },
  forgotPassword: {
    fontSize: fontPixel(14),
    opacity: 0.5,
    textTransform: 'capitalize',
    lineHeight: 18,
    letterSpacing: 1.5
  },
  btnHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: pixelSizeVertical(25)
  }
})
