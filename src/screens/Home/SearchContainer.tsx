import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { HomeStyles } from './HomeStyles'

const SearchContainer = () => {
  return (
    <View style={HomeStyles.child}>
      <Text style={HomeStyles.header}>Movie Central</Text>
      <TouchableOpacity>
        <Ionicons name='ios-search-outline' size={24} color='#FFFFFF' />
      </TouchableOpacity>
    </View>
  )
}

export default SearchContainer
