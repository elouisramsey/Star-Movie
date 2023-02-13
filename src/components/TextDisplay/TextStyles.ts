import { COLORS } from 'config/COLORS'
import { fontPixel, pixelSizeVertical } from 'config/normalize'
import { StyleSheet } from 'react-native'

export const textStyles = StyleSheet.create({
  base: {
    fontFamily: 'SF_Pro'
  },
  title: {
    fontSize: fontPixel(20),
    fontWeight: 'bold',
    marginVertical: pixelSizeVertical(0),
    color: COLORS.white
  },
  readMore: {
    fontSize: fontPixel(14),
    color: '#47CFFF',
    marginLeft: pixelSizeVertical(2)
  }
})
