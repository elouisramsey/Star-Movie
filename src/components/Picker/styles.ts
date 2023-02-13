import { COLORS } from 'config/COLORS'
import { fontPixel, heightPixel, pixelSizeVertical } from 'config/normalize'
import { StyleSheet } from 'react-native'

export const pickerStyles = StyleSheet.create({
  picker: {
    width: '100%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: COLORS.grayed,
    marginVertical: pixelSizeVertical(15)
  },
  pickerItem: {
    color: COLORS.white,
    fontSize: fontPixel(16),
    fontFamily: 'SF_Pro',
    lineHeight: 20,
    height: heightPixel(48),
    width: '100%'
  }
})
