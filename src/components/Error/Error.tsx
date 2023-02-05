import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface ErrorProps {
  errorMessage: string
}

export const ErrorDisplay: React.FC<ErrorProps> = ({ errorMessage }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name='error' size={50} color='#ff0000' />
      <Text style={styles.errorText}>{errorMessage}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorText: {
    fontSize: 20,
    color: '#ff0000',
    marginTop: 10
  }
})

export default Error
