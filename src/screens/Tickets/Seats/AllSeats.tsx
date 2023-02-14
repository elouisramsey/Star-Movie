import { useGeneralSeatState } from 'context/MovieContext'
import React, { memo } from 'react'
import { View } from 'react-native'
import { SingleSeat } from './SingleSeat'
import { seatStyles } from './styles'
import useSeats from './useSeats'

type Props = {}

const AllSeats = memo((props: Props) => {
  const [{ seats }] = useGeneralSeatState()
  const { toggleSeat } = useSeats()

  return (
    <>
      <View style={seatStyles.row}>
        <View style={seatStyles.rowContainer}>
          <View style={seatStyles.arrangeRow}>
            {seats
              .filter((seat: any) => seat.id[0].includes('a'))
              .map((item: any) => (
                <SingleSeat
                  key={item.id}
                  vip={item.vip}
                  onPress={() => toggleSeat(item)}
                  selected={item.selected}
                  available={item.available}
                  id={item.id}
                  opacity={item.opacity}
                  booked={item.booked}
                />
              ))}
          </View>
        </View>
        <View style={[seatStyles.rowContainer, { width: '40%' }]}>
          <View style={seatStyles.arrangeRow}>
            {seats
              .filter((seat: any) => seat.id[0].includes('b'))
              .map((item: any) => (
                <View style={{ width: '25%' }} key={item.id}>
                  <SingleSeat
                    vip={item.vip}
                    onPress={() => toggleSeat(item)}
                    selected={true}
                    available={item.available}
                    id={item.id}
                    opacity={item.opacity}
                    booked={item.booked}
                  />
                </View>
              ))}
          </View>
        </View>
        <View style={seatStyles.rowContainer}>
          <View style={seatStyles.arrangeRow}>
            {seats
              .filter((seat: any) => seat.id[0].includes('c'))
              .map((item: any) => (
                <View style={{ width: '33%' }} key={item.id}>
                  <SingleSeat
                    vip={item.vip}
                    onPress={() => toggleSeat(item)}
                    selected={true}
                    available={item.available}
                    id={item.id}
                    opacity={item.opacity}
                    booked={item.booked}
                  />
                </View>
              ))}
          </View>
        </View>
      </View>
      <View style={seatStyles.row}>
        <View style={seatStyles.rowContainer}>
          <View style={seatStyles.arrangeRow}>
            {seats
              .filter((seat: any) => seat.id[0].includes('d'))
              .map((item: any) => (
                <SingleSeat
                  key={item.id}
                  vip={item.vip}
                  onPress={() => toggleSeat(item)}
                  selected={item.selected}
                  available={item.available}
                  id={item.id}
                  opacity={item.opacity}
                  booked={item.booked}
                />
              ))}
          </View>
        </View>
        <View style={[seatStyles.rowContainer, { width: '40%' }]}>
          <View style={seatStyles.arrangeRow}>
            {seats
              .filter((seat: any) => seat.id[0].includes('e'))
              .map((item: any) => (
                <View style={{ width: '25%' }} key={item.id}>
                  <SingleSeat
                    vip={item.vip}
                    onPress={() => toggleSeat(item)}
                    selected={true}
                    available={item.available}
                    id={item.id}
                    opacity={item.opacity}
                    booked={item.booked}
                  />
                </View>
              ))}
          </View>
        </View>
        <View style={seatStyles.rowContainer}>
          <View style={seatStyles.arrangeRow}>
            {seats
              .filter((seat: any) => seat.id[0].includes('f'))
              .map((item: any) => (
                <View style={{ width: '33%' }} key={item.id}>
                  <SingleSeat
                    vip={item.vip}
                    onPress={() => toggleSeat(item)}
                    selected={true}
                    available={item.available}
                    id={item.id}
                    opacity={item.opacity}
                    booked={item.booked}
                  />
                </View>
              ))}
          </View>
        </View>
      </View>
      <View style={seatStyles.row}>
        <View style={seatStyles.rowContainer}>
          <View style={seatStyles.arrangeRow}>
            {seats
              .filter((seat: any) => seat.id[0].includes('g'))
              .map((item: any) => (
                <SingleSeat
                  key={item.id}
                  vip={item.vip}
                  onPress={() => toggleSeat(item)}
                  selected={item.selected}
                  available={item.available}
                  id={item.id}
                  opacity={item.opacity}
                  booked={item.booked}
                />
              ))}
          </View>
        </View>
        <View style={[seatStyles.rowContainer, { width: '40%' }]}>
          <View style={seatStyles.arrangeRow}>
            {seats
              .filter((seat: any) => seat.id[0].includes('h'))
              .map((item: any) => (
                <View style={{ width: '25%' }} key={item.id}>
                  <SingleSeat
                    vip={item.vip}
                    onPress={() => toggleSeat(item)}
                    selected={true}
                    available={item.available}
                    id={item.id}
                    opacity={item.opacity}
                    booked={item.booked}
                  />
                </View>
              ))}
          </View>
        </View>
        <View style={seatStyles.rowContainer}>
          <View style={seatStyles.arrangeRow}>
            {seats
              .filter((seat: any) => seat.id[0].includes('i'))
              .map((item: any) => (
                <View style={{ width: '33%' }} key={item.id}>
                  <SingleSeat
                    vip={item.vip}
                    onPress={() => toggleSeat(item)}
                    selected={true}
                    available={item.available}
                    id={item.id}
                    opacity={item.opacity}
                    booked={item.booked}
                  />
                </View>
              ))}
          </View>
        </View>
      </View>
    </>
  )
})

export { AllSeats }
