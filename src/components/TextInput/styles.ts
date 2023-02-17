import {
  COLORS,
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical
} from 'config/config'
import { StyleSheet } from 'react-native'

export const InputStyles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: pixelSizeVertical(15)
  },
  label: {
    fontSize: fontPixel(14),
    marginBottom: pixelSizeVertical(10)
  },
  inputContainer: {
    width: '100%',
    height: heightPixel(44),
    borderRadius: 4,
    backgroundColor: '#2b3543',
    paddingHorizontal: pixelSizeHorizontal(15),
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.grayed
  },
  input: {
    flex: 1,
    fontSize: fontPixel(16),
    color: COLORS.white
  },
  error: {
    fontSize: fontPixel(10),
    color: 'red',
    marginTop: pixelSizeVertical(3)
  }
})
