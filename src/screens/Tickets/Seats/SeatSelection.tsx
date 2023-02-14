import TextDisplay from 'components/TextDisplay/TextDisplay'
import React from 'react'
import { Image, View } from 'react-native'
import { DetailsStyles } from 'screens/MovieDetails/DetailsStyles'
import { AllSeats } from './AllSeats'
import MovieTicketBottom from './Bottom'
import MovieInfo from './MovieInfo'
import { seatStyles } from './styles'

type Props = {}

const SeatSelection = (props: Props) => {
  return (
    <View style={[DetailsStyles.container, seatStyles.container]}>
      <MovieInfo />
      <View style={seatStyles.main}>
        <View style={seatStyles.screen}>
          <Image source={require('assets/images/screen.png')} />
          <TextDisplay styles={seatStyles.screenText}>Screen</TextDisplay>
        </View>
        <AllSeats />
      </View>

      <MovieTicketBottom />
    </View>
  )
}

export default SeatSelection
