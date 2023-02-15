import { NativeStackScreenProps } from '@react-navigation/native-stack'
import TextDisplay from 'components/TextDisplay/TextDisplay'
import { useGeneralSeatState } from 'context/MovieContext'
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
  const [{ seats }] = useGeneralSeatState()

  const [rows, setRows] = React.useState('')

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
    //   dispatch(addTicket(seat))
  }

  useEffect(() => {
    const acc = [] as any[]
    const row = seats.filter((seat: any) => {
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

      <MovieTicketBottom navigation={navigation} rows={rows} />
    </View>
  )
}

export default SeatSelection
