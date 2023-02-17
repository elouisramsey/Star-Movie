import Button from 'components/Button/Button'
import TextDisplay from 'components/TextDisplay/TextDisplay'
import {
  convertCurrency,
  memoizedGetTotalPrice,
  totalPriceOfSelectedExtras
} from 'config/functions'
import { useGeneralSeatState } from 'context/MovieContext'
import React from 'react'
import { View } from 'react-native'
import { seatStyles } from '../Seats/styles'

type Props = {
  navigation: any
}

const ExtrasBottom = ({ navigation }: Props) => {
  const { state } = useGeneralSeatState()

  const TotalPriceofExtras = totalPriceOfSelectedExtras(state.extras)
  const totalPrice = memoizedGetTotalPrice(state.seats)

  const goToPayment = () => {
    navigation.navigate('Payment')
  }

  return (
    <View style={seatStyles.bottom}>
      <View>
        <TextDisplay styles={seatStyles.cost}>Total Cost</TextDisplay>
        <TextDisplay styles={seatStyles.amount}>
          {convertCurrency(TotalPriceofExtras + totalPrice)}
        </TextDisplay>
      </View>
      <View style={{ width: '45%' }}>
        <Button title='Continue' onPress={goToPayment} />
      </View>
    </View>
  )
}

export default ExtrasBottom
