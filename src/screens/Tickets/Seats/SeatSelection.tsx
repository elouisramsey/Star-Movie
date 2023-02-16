import { NativeStackScreenProps } from '@react-navigation/native-stack'
import TextDisplay from 'components/TextDisplay/TextDisplay'
import { memoizedGetTotalPrice } from 'config/functions'
import { useGeneralSeatState } from 'context/MovieContext'
import { useGeneralTicketState } from 'context/SelectedMovie/TicketContext'
import { RootStackParamList } from 'navigation/types'
import React, { useEffect, useState } from 'react'
import { Image, View } from 'react-native'
import { DetailsStyles } from 'screens/MovieDetails/DetailsStyles'
import MovieTicketBottom from './Bottom'
import { cinemaRows } from './FakeData'
import MovieInfo from './MovieInfo'
import SeatArrangement from './SeatArrangement'
import { seatStyles } from './styles'
import { Seat } from './types'

type SeatSelectionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SeatSelection'
>

const SeatSelection = ({ navigation }: SeatSelectionScreenProps) => {
  const [selectedSeats, setSelectedSeats] = useState<any>([])
  const { state: seats } = useGeneralSeatState()
  const { dispatch } = useGeneralTicketState()

  const [rows, setRows] = React.useState('')
  const totalPrice = memoizedGetTotalPrice(seats.seats)

  const toggleSeat = (seat: Seat) => {
    setSelectedSeats(
      selectedSeats.map((seatArr: Seat) => {
        if (seatArr.id === seat.id) {
          seatArr.selected = !seatArr.selected
          seatArr.available = !seatArr.available
        }
        return seatArr
      })
    )
  }

  useEffect(() => {
    const acc = [] as any[]
    seats.seats.filter((seat: any) => {
      if (seat.selected) {
        const row = acc.push(seat.id)
        return row
      }
    })
    setRows(acc.join(', '))
    return () => {}
  }, [selectedSeats])

  useEffect(() => {
    // @ts-ignore
    setSelectedSeats(cinemaRows)
    return () => {}
  }, [])

  useEffect(() => {
    dispatch({ type: 'addSelectedSeats', payload: rows })
    return () => {}
  }, [rows])

  return (
    <View style={[DetailsStyles.container, seatStyles.container]}>
      <MovieInfo navigation={navigation} />
      <View style={seatStyles.main}>
        <View style={seatStyles.screen}>
          <Image source={require('assets/images/screen.png')} />
          <TextDisplay styles={seatStyles.screenText}>Screen</TextDisplay>
        </View>
        <SeatArrangement toggleSeat={toggleSeat} />
      </View>

      <MovieTicketBottom
        navigation={navigation}
        rows={rows}
        totalPrice={totalPrice}
      />
    </View>
  )
}

export default SeatSelection
