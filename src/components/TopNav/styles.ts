import { COLORS } from 'config/COLORS'
import { fontPixel, heightPixel, pixelSizeHorizontal } from 'config/normalize'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomColor: COLORS.grayed,
    borderBottomWidth: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: heightPixel(60),
    paddingHorizontal: pixelSizeHorizontal(15)
  },
  header: {
    fontSize: fontPixel(18)
  }
})
