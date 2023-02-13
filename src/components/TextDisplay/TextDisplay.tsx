import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { textStyles } from './TextStyles'

type Props = {
  children: string | React.ReactNode
  styles?: object
  longerText?: boolean
}

const TextDisplay = ({ children, styles, longerText }: Props) => {
  const [showMore, setShowMore] = React.useState(true)
  const [numLines, setNumLines] = React.useState(3.5)

  return (
    <View>
      <Text
        numberOfLines={numLines}
        style={[textStyles.base, textStyles.title, styles]}
      >
        {children}
      </Text>
      {longerText ? (
        <TouchableOpacity
          onPress={() => {
            setShowMore(!showMore)
            setNumLines(showMore ? 100 : 3)
          }}
        >
          <Text style={textStyles.readMore}>
            {showMore ? 'Show more' : 'Show less'}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  )
}

export default TextDisplay
