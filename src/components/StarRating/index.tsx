import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { View } from 'react-native'
import { styles } from './styles'

export const StarRating = ({ rating }: { rating: number }) => {
  const [roundedRating, setRoundedRating] = useState(Math.round(rating / 2))

  const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <MaterialCommunityIcons key={i} name='star' size={20} color='#ffc045' />
      )
    } else {
      stars.push(
        <MaterialCommunityIcons
          key={i}
          name='star-outline'
          size={20}
          color='green'
        />
      )
    }
  }

  return <View style={styles.container}>{stars}</View>
}
