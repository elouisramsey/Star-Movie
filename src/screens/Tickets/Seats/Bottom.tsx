import Button from 'components/Button/Button'
import TextDisplay from 'components/TextDisplay/TextDisplay'
import React from 'react'
import { View } from 'react-native'
import { seatStyles } from './styles'

type Props = {}

const MovieTicketBottom = (props: Props) => {
  return (
    <View style={seatStyles.bottom}>
      <View>
        <TextDisplay styles={seatStyles.selectedSeat}>
          b3, b6 selected
        </TextDisplay>
        <TextDisplay styles={seatStyles.amount}>$100.00</TextDisplay>
      </View>
      <View style={{ width: '45%' }}>
        <Button
          // disabled={totalPrice === 0}
          title='Continue'
          onPress={() => {
            //   dispatch(setSelectedSeat(rows))
            //   navigation.navigate('Extra')
          }}
        />
      </View>
    </View>
  )
}

export default MovieTicketBottom
