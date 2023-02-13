import TextDisplay from 'components/TextDisplay/TextDisplay'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { moreInfoStyles } from './styles'

type Props = {
  children: string
  onPress: () => void
}

const MoreInfo = ({ children, onPress }: Props) => {
  return (
    <View style={moreInfoStyles.container}>
      <TextDisplay styles={moreInfoStyles.text}>{children}</TextDisplay>
      <TouchableOpacity onPress={onPress}>
        <TextDisplay styles={[moreInfoStyles.text, { color: '#47CFFF' }]}>
          View All
        </TextDisplay>
      </TouchableOpacity>
    </View>
  )
}

export default MoreInfo
