import TextDisplay from 'components/TextDisplay/TextDisplay'
import TopNav from 'components/TopNav/TopNav'
import { useGeneralTicketState } from 'context/SelectedMovie/TicketContext'
import React from 'react'
import { Image, View } from 'react-native'
import { seatStyles } from './styles'

type Props = {
  navigation: any
}

const MovieInfo = ({ navigation }: Props) => {
  const { state } = useGeneralTicketState()
  const { movieName, moviePoster, date, time } = state
  return (
    <TopNav onPress={() => {}} goBack={() => navigation.goBack()}>
      <Image
        source={{
          uri: moviePoster
        }}
        style={seatStyles.imgPoster}
      />
      <View style={{ paddingLeft: 5 }}>
        <TextDisplay styles={seatStyles.title}>{movieName}</TextDisplay>
        <TextDisplay styles={seatStyles.time}>
          {`${time} on ${date}, 2019`}
        </TextDisplay>
      </View>
    </TopNav>
  )
}

export default MovieInfo
