import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel
} from 'config/normalize'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  commentHolder: {
    marginHorizontal: pixelSizeHorizontal(15),
    marginVertical: pixelSizeVertical(15)
  },
  commentContainer: {
    width: '100%',
    backgroundColor: '#2b3543',
    borderRadius: 4,
    paddingVertical: pixelSizeVertical(15),
    paddingHorizontal: pixelSizeHorizontal(15),
    position: 'relative',
    zIndex: 1
  },
  comment: {
    marginTop: pixelSizeVertical(15),
    fontSize: fontPixel(14)
  },
  arrow: {
    marginTop: pixelSizeVertical(-35)
  },
  commenter: {
    flexDirection: 'row',
    marginTop: pixelSizeVertical(-15),
    marginLeft: pixelSizeHorizontal(25)
  },
  imgHolder: {
    width: widthPixel(40),
    height: heightPixel(40),
    borderRadius: 40 / 2,
    resizeMode: 'contain',
    overflow: 'hidden'
  },
  commenterInfo: {
    marginLeft: pixelSizeHorizontal(10),
    justifyContent: 'center'
  },
  commenterName: {
    marginBottom: pixelSizeVertical(5),
    fontSize: fontPixel(14)
  },
  commenterDate: {
    fontSize: fontPixel(12),
    opacity: 0.5
  }
})
