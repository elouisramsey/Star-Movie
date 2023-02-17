import TextDisplay from 'components/TextDisplay/TextDisplay'
import {
  convertCurrency,
  memoizedGetTotalPrice,
  totalExtraQty,
  totalPriceOfSelectedExtras
} from 'config/functions'
import { useGeneralSeatState } from 'context/MovieContext'
import React from 'react'
import { View } from 'react-native'
import { seatStyles } from '../Seats/styles'
import { ExtraStyles } from './styles'

type Props = {}

const ExtraTotal = (props: Props) => {
  const { state } = useGeneralSeatState()

  const TotalPriceofExtras = totalPriceOfSelectedExtras(state.extras)
  const extraQty = totalExtraQty(state.extras)
  const totalPrice = memoizedGetTotalPrice(state.seats)

  return (
    <View style={[ExtraStyles.item, { borderBottomColor: 'transparent' }]}>
      <TextDisplay styles={seatStyles.numberofItems}>
        {extraQty} Items Selected
      </TextDisplay>
      <TextDisplay styles={seatStyles.amount}>
        {convertCurrency(TotalPriceofExtras)}
      </TextDisplay>
    </View>
  )
}

export default ExtraTotal
