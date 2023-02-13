import { fontPixel, heightPixel, pixelSizeVertical } from 'config/normalize'
import { StyleSheet } from 'react-native'

export const ticketStyles = StyleSheet.create({
  heading: {
    fontSize: fontPixel(18)
  },
  timesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between'
  },
  timeHolder: { width: 102, marginBottom: 15 },
  timeBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: heightPixel(48),

    borderRadius: 2
  },
  time: {
    fontSize: fontPixel(14),
    lineHeight: 20
  },
  version: {
    fontSize: fontPixel(18),
    lineHeight: 20,
    marginVertical: pixelSizeVertical(15),
    opacity: 0.5
  }
})
