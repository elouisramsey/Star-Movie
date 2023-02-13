import React from 'react'
import { Text, View } from 'react-native'
import { DetailsStyles } from 'screens/MovieDetails/DetailsStyles'
import MovieTicketBottom from './Bottom'
import MovieInfo from './MovieInfo'
import { seatStyles } from './styles'

type Props = {}

const SeatSelection = (props: Props) => {
  return (
    <View style={[DetailsStyles.container, seatStyles.container]}>
      <MovieInfo />
      <Text>SeatSelection</Text>
      <MovieTicketBottom />
    </View>
  )
}

export default SeatSelection
