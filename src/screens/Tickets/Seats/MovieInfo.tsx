import TextDisplay from 'components/TextDisplay/TextDisplay'
import TopNav from 'components/TopNav/TopNav'
import React from 'react'
import { Image, View } from 'react-native'
import { seatStyles } from './styles'

type Props = {}

const MovieInfo = (props: Props) => {
  return (
    <TopNav onPress={() => {}} goBack={() => {}}>
      <Image
        source={{
          uri: 'https://www.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg'
        }}
        style={seatStyles.imgPoster}
      />
      <View style={{ paddingLeft: 5 }}>
        <TextDisplay styles={seatStyles.title}>Black Panther</TextDisplay>
        <TextDisplay styles={seatStyles.time}>
          8:30 - 10:00 AM in 24 May, 2019
        </TextDisplay>
      </View>
    </TopNav>
  )
}

export default MovieInfo
