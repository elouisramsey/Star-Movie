import Button from 'components/Button/Button'
import TextDisplay from 'components/TextDisplay/TextDisplay'
import { convertCurrency } from 'config/functions'
import { useGeneralTicketState } from 'context/SelectedMovie/TicketContext'
import React from 'react'
import { View } from 'react-native'
import { seatStyles } from './styles'

type Props = {
  navigation: any
  rows: string
  totalPrice: number
}

const MovieTicketBottom = ({ navigation, rows, totalPrice }: Props) => {
  const { dispatch } = useGeneralTicketState()

  const goToExtras = () => {
    dispatch({ type: 'addSelectedSeats', payload: rows })
    navigation.navigate('Extra')
  }

  return (
    <View style={seatStyles.bottom}>
      <View>
        <TextDisplay styles={seatStyles.selectedSeat}>
          {rows.length > 0 ? rows : 'Select seat'}
        </TextDisplay>
        <TextDisplay styles={seatStyles.amount}>
          {convertCurrency(totalPrice)}
        </TextDisplay>
      </View>
      <View style={{ width: '45%' }}>
        <Button
          disabled={totalPrice === 0}
          title='Continue'
          onPress={goToExtras}
        />
      </View>
    </View>
  )
}

export default MovieTicketBottom
