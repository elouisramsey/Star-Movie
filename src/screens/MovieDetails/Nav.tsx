import { FontAwesome, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { DetailsStyles } from './DetailsStyles'

type Props = {
  onPress: () => void
  container?: any
}

const Nav = ({ onPress, container }: Props) => {
  return (
    <View style={[DetailsStyles.spacer, container]}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name='chevron-back-outline' size={38} color='white' />
      </TouchableOpacity>

      <TouchableOpacity>
        <FontAwesome name='share' size={24} color='white' />
      </TouchableOpacity>
    </View>
  )
}

export default Nav
