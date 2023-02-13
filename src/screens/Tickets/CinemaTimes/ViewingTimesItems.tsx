import TextDisplay from 'components/TextDisplay/TextDisplay'
import { COLORS } from 'config/COLORS'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { ITimes } from 'types/ITimes'
import { ticketStyles } from '../styles'

const ViewingTimesItems = ({
  setSelectedTime,
  setCurrentResolution,
  item,
  currentResolution,
  selectedTime,
  resolution
}: ITimes) => {
  return (
    <TouchableOpacity
      onPress={() => {
        // @ts-ignore
        setCurrentResolution(resolution)
        setSelectedTime(item.time)
        // dispatch(setTime(item.time))
        // dispatch(setResolution('2d'))
      }}
      style={ticketStyles.timeHolder}
    >
      <View
        style={[
          ticketStyles.timeBox,
          {
            backgroundColor:
              selectedTime === item.time && currentResolution === resolution
                ? COLORS.inactive
                : COLORS.grayed
          }
        ]}
      >
        <TextDisplay styles={ticketStyles.time}>{item.time}</TextDisplay>
      </View>
      <View
        style={{
          borderColor: '#F8C42F',
          borderWidth: 1,
          width: item.width
        }}
      />
    </TouchableOpacity>
  )
}

export default ViewingTimesItems
