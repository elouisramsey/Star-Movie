import { StyleSheet } from 'react-native'

export const statusStyles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  contentWrapper: {
    overflow: 'hidden',
    width: '90%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageHolder: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    backgroundColor: '#2b3543',
    height: 450,
    width: 308,
    borderRadius: 8,
    justifyContent: 'center',
    padding: 20
  },
  mark: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    backgroundColor: 'rgba(76, 217, 100, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontFamily: 'SF_Pro',
    color: '#fff',
    marginBottom: 15,
    textTransform: 'capitalize',
    textAlign: 'center'
  },
  subText: {
    fontSize: 16,
    fontFamily: 'SF_Pro',
    color: '#fff',
    marginBottom: 20,
    opacity: 0.5,
    textAlign: 'center'
  },
  borderHack: {
    borderWidth: 2,
    borderStyle: 'dotted',
    borderColor: '#DFDFDF',
    borderRadius: 8,
    marginTop: -2
  },
  rows: {
    marginBottom: 25,
    flexDirection: 'row'
  },
  header: {
    fontSize: 12,
    fontFamily: 'SF_Pro',
    color: '#fff',
    opacity: 0.5,
    marginBottom: 5,
    textTransform: 'uppercase'
  },
  text: {
    fontSize: 14,
    fontFamily: 'SF_Pro',
    color: '#fff',
    marginRight: 15,
    marginBottom: 25
  },
  cancel: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginTop: 25
  }
})
