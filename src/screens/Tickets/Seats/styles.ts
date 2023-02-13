import {
  COLORS,
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical
} from 'config/config'
import { StyleSheet } from 'react-native'

export const seatStyles = StyleSheet.create({
  container: {
    paddingTop: pixelSizeVertical(45)
  },
  title: {
    fontSize: fontPixel(16),
    lineHeight: 20
  },
  time: {
    fontSize: fontPixel(12),
    opacity: 0.5,
    marginTop: pixelSizeVertical(2)
  },
  imgPoster: { height: 32, width: 32 },
  bottom: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.grayed,
    paddingHorizontal: pixelSizeHorizontal(25),
    height: heightPixel(80)
  },
  selectedSeat: {
    fontSize: fontPixel(12),
    opacity: 0.5,
    lineHeight: 12,
    textTransform: 'uppercase'
  },
  amount: {
    color: '#FFC045',
    fontSize: fontPixel(24)
  }
})
