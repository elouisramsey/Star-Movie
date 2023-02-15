import {
  COLORS,
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel
} from 'config/config'
import { StyleSheet } from 'react-native'

export const seatStyles = StyleSheet.create({
  container: {
    paddingTop: pixelSizeVertical(45)
  },
  main: {
    paddingHorizontal: pixelSizeHorizontal(25),
    paddingVertical: pixelSizeVertical(20)
  },
  title: {
    fontSize: fontPixel(16),
    lineHeight: 20
  },
  time: {
    fontSize: fontPixel(12),
    opacity: 0.5,
    marginTop: pixelSizeVertical(2),
    textTransform: 'uppercase'
  },
  imgPoster: { height: heightPixel(32), width: widthPixel(32) },
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
  },
  arrangeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  seat: {
    height: heightPixel(20),
    width: widthPixel(20),
    borderRadius: 2,
    borderColor: '#475363',
    borderWidth: 1,
    borderStyle: 'solid',
    margin: 5
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: pixelSizeVertical(20)
  },
  screenText: {
    fontSize: fontPixel(16),
    opacity: 0.5,
    textTransform: 'uppercase'
  },
  rowContainer: {
    width: '25%'
  },
  screen: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: pixelSizeHorizontal(50)
  }
})
