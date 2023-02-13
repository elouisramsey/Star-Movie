import { COLORS } from 'config/COLORS'
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  widthPixel
} from 'config/normalize'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  segmentedControlWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textWrapper: {
    flex: 1,
    elevation: 9,
    paddingHorizontal: pixelSizeHorizontal(5),
    alignItems: 'center',
    justifyContent: 'center',
    height: heightPixel(72),
    width: widthPixel(88),
    marginRight: pixelSizeHorizontal(10),
    borderRadius: 4,
    borderColor: COLORS.grayed,
    borderWidth: 1,
    borderStyle: 'solid'
  },
  textStyles: {
    fontSize: fontPixel(16),
    textAlign: 'center',
    textTransform: 'capitalize'
  }
})
