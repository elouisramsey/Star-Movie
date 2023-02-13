import { FontAwesome, Ionicons } from '@expo/vector-icons'
import TextDisplay from 'components/TextDisplay/TextDisplay'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

type Props = {
  onPress: () => void
  goBack: () => void
  children: React.ReactNode | string
  share?: boolean
}

const TopNav = ({ onPress, goBack, children, share = false }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Ionicons name='chevron-back-outline' size={38} color='white' />
      </TouchableOpacity>
      <TextDisplay styles={styles.header}>{children}</TextDisplay>
      {!share && <View />}
      {share && (
        <TouchableOpacity onPress={onPress}>
          <FontAwesome name='share' size={24} color='white' />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default TopNav
