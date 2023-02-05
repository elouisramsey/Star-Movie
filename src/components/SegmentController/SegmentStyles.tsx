import { COLORS } from 'config/COLORS'
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel
} from 'config/normalize'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  segmentedControlWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderColor: '#2C3F5B',
    borderWidth: 1,
    marginVertical: pixelSizeVertical(15)
  },
  textWrapper: {
    flex: 1,
    elevation: 9,
    // paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyles: {
    fontSize: fontPixel(16),
    textAlign: 'center',
    fontFamily: 'SF_Pro'
  },
  iconWrapper: {
    marginRight: pixelSizeHorizontal(5),
    width: widthPixel(20),
    height: heightPixel(20),
    borderRadius: 20 / 2,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
