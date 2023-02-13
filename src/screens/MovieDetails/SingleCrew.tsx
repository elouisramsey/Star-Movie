import { MaterialCommunityIcons } from '@expo/vector-icons'
import TextDisplay from 'components/TextDisplay/TextDisplay'
import React from 'react'
import { Image, View } from 'react-native'
import { DetailsStyles } from './DetailsStyles'

type Props = {
  profile_path: string
  name: string
}

const SingleCrew = ({ profile_path, name }: Props) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p'
  const size = 'w200'

  return (
    <View style={DetailsStyles.crewContainer}>
      <View style={DetailsStyles.imgHolder}>
        <Image
          source={{
            uri: `${baseImgUrl}/${size}${profile_path}`
          }}
          style={DetailsStyles.imgHolder}
        />
      </View>
      <TextDisplay styles={DetailsStyles.name}>{name}</TextDisplay>
      <MaterialCommunityIcons name='dots-horizontal' size={28} color='grey' />
    </View>
  )
}

export default SingleCrew
