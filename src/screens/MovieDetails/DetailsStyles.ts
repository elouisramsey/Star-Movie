import { COLORS } from 'config/COLORS'
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel
} from 'config/normalize'
import { StyleSheet } from 'react-native'

export const DetailsStyles = StyleSheet.create({
  main: {
    flex: 1
  },
  container: {
    backgroundColor: COLORS.secondary,
    flex: 1
  },
  contentContainer: {
    paddingTop: pixelSizeVertical(55),
    paddingHorizontal: pixelSizeHorizontal(15)
  },
  tabContainer: {
    marginHorizontal: pixelSizeHorizontal(15)
  },
  runtimeContainer: {
    alignItems: 'center'
  },
  poster: {
    height: heightPixel(262),
    paddingHorizontal: pixelSizeHorizontal(25),
    paddingVertical: pixelSizeVertical(45),
    position: 'relative',
    marginBottom: pixelSizeVertical(150)
  },
  spacer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  movieImage: {
    height: heightPixel(250),
    width: widthPixel(167),
    position: 'absolute',
    bottom: -150,
    zIndex: 10,
    alignSelf: 'center',
    overflow: 'hidden'
  },
  image: {
    width: undefined,
    height: '100%',
    aspectRatio: 1,
    alignSelf: 'center'
  },
  movieTitle: {
    fontSize: fontPixel(26),
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '85%',
    marginTop: pixelSizeVertical(50),
    letterSpacing: 1,
    marginBottom: pixelSizeVertical(16),
    fontFamily: 'SF_Pro'
  },
  movieText: {
    fontSize: fontPixel(20),
    color: COLORS.white,
    opacity: 0.5,
    textAlign: 'center',
    marginBottom: pixelSizeVertical(16),
    fontFamily: 'SF_Pro'
  },
  showNav: {
    position: 'absolute',
    top: 0,
    backgroundColor: COLORS.secondary,
    right: 0,
    left: 0,
    zIndex: 50,
    height: heightPixel(100),
    justifyContent: 'center',
    paddingHorizontal: pixelSizeHorizontal(25)
  },
  overview: {
    fontSize: fontPixel(14),
    lineHeight: 24
  },
  crewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: pixelSizeVertical(15)
  },
  imgHolder: {
    width: widthPixel(50),
    height: heightPixel(50),
    borderRadius: 50 / 2,
    resizeMode: 'cover',
    overflow: 'hidden'
  },
  name: {
    fontSize: fontPixel(14),
    fontWeight: '500'
  },
  role: {
    fontSize: fontPixel(14),
    opacity: 0.5,
    textTransform: 'uppercase'
  },
  images: { width: widthPixel(104), height: heightPixel(72) },
  imageContainer: { marginRight: pixelSizeHorizontal(15) },
  imgContentContainerStyle: { marginBottom: pixelSizeVertical(15) },

  videoImage: {
    aspectRatio: 16 / 9,
    width: '100%',
    height: '100%'
  },
  playBtn: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
