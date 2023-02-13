import { fontPixel, pixelSizeVertical } from 'config/normalize'
import { StyleSheet } from 'react-native'

export const moreInfoStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: pixelSizeVertical(15)
  },
  text: {
    fontSize: fontPixel(20)
  }
})
