import { MaterialIcons } from '@expo/vector-icons'
import { StarRating } from 'components/StarRating'
import TextDisplay from 'components/TextDisplay/TextDisplay'
import { COLORS } from 'config/COLORS'
import React from 'react'
import { Image, View } from 'react-native'
import { styles } from './styles'

type Props = {
  item: any
}

const baseImgUrl = 'https://image.tmdb.org/t/p'
const size = 'w500'

const ReviewItem = ({ item }: Props) => {
  const bgImageUrl = `${baseImgUrl}/${size}${item.author_details.avatar_path}`

  return (
    <View style={styles.commentHolder} key={item.id}>
      <View style={styles.commentContainer}>
        <StarRating rating={item.rating} />
        <TextDisplay longerText styles={styles.comment}>
          {item.content}
        </TextDisplay>
      </View>
      <View style={styles.arrow}>
        <MaterialIcons name='arrow-drop-down' size={80} color={COLORS.grayed} />
      </View>
      <View style={styles.commenter}>
        <Image
          object-fit='cover'
          style={styles.imgHolder}
          source={{
            uri: bgImageUrl
          }}
        />

        <View style={styles.commenterInfo}>
          <TextDisplay styles={styles.commenterName}>{item.author}</TextDisplay>

          {/* <Dateformatter
            date={item.created_at}
            textStyle={styles.commenterDate}
          /> */}
        </View>
      </View>
    </View>
  )
}

export default ReviewItem
