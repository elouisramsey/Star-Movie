import { COLORS } from 'config/config'
import { StyleSheet } from 'react-native'

export const ExtraStyles = StyleSheet.create({
  items: {
    flexDirection: 'row'
  },
  image: {
    width: 40,
    height: 52.5,
    resizeMode: 'contain',
    marginRight: 15
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grayed
  },
  name: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
    fontFamily: 'SF_Pro',
    textTransform: 'capitalize'
  },
  price: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'SF_Pro',
    opacity: 0.5
  },
  btnHolder: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#475363',
    borderWidth: 1,
    borderRadius: 4,
    height: 28,
    width: 28
  },
  sub: {
    fontSize: 18,
    color: '#47CFFF'
  },
  counterHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  counter: {
    height: 28,
    width: 64,
    borderRadius: 4,
    backgroundColor: '#2b3543',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },
  counterText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'SF_Pro'
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: COLORS.grayed,
    paddingHorizontal: 25,
    paddingVertical: 5,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0
  },
  cost: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'SF_Pro',
    opacity: 0.5,
    lineHeight: 20,
    textTransform: 'uppercase'
  },
  amount: {
    color: '#FFC045',
    fontSize: 24,
    fontFamily: 'SF_Pro'
  },
  numberofItems: {
    fontSize: 14,
    fontFamily: 'SF_Pro',
    color: '#fff',
    textTransform: 'uppercase',
    opacity: 0.5
  }
})
