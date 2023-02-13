import { fontPixel, pixelSizeHorizontal } from 'config/normalize'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: pixelSizeHorizontal(8)
  },
  ratingText: {
    fontSize: fontPixel(16),
    color: 'grey'
  }
})
