import { COLORS } from 'config/COLORS'
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel
} from 'config/normalize'
import { StyleSheet } from 'react-native'

export const HomeStyles = StyleSheet.create({
  ListContainer: {
    backgroundColor: COLORS.secondary,
    flex: 1,
    paddingHorizontal: pixelSizeHorizontal(25),
    paddingTop: pixelSizeVertical(60)
  },
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
    paddingHorizontal: pixelSizeHorizontal(15),
    color: COLORS.white
  },
  child: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: pixelSizeVertical(10),
    marginBottom: pixelSizeVertical(15)
  },
  header: {
    fontSize: fontPixel(24),
    color: COLORS.white,
    fontFamily: 'SF_Pro',
    fontWeight: 'bold'
  },
  movieHolder: {
    height: heightPixel(340),
    overflow: 'hidden',
    width: '47%'
  },
  moviePoster: {
    height: heightPixel(250),
    marginBottom: pixelSizeVertical(10)
  },
  movieRating: {
    flexDirection: 'row'
  },
  rating: {
    marginRight: pixelSizeHorizontal(3)
  },
  movieTitle: {
    color: COLORS.white,
    fontSize: fontPixel(14),
    fontWeight: 'bold',
    letterSpacing: 1,
    marginVertical: pixelSizeVertical(3),
    fontFamily: 'SF_Pro',
    lineHeight: 20
  },
  minorInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  circle: {
    width: widthPixel(5),
    height: heightPixel(5),
    borderRadius: 5 / 2,
    backgroundColor: COLORS.white,
    marginHorizontal: pixelSizeHorizontal(5),
    opacity: 0.3,
    color: COLORS.white
  },
  movieText: {
    color: COLORS.white,
    fontSize: fontPixel(14),
    opacity: 0.5,
    fontFamily: 'SF_Pro'
  }
})
