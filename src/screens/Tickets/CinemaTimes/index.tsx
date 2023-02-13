import TextDisplay from 'components/TextDisplay/TextDisplay'
import React from 'react'
import { View } from 'react-native'
import { ITimes } from 'types/ITimes'
import { ticketStyles } from '../styles'
import CinemaTimes from './ViewingTimes.json'
import ViewingTimesItems from './ViewingTimesItems'

interface Props extends Omit<ITimes, 'item'> {
  selectedCinema: string
}

const ActiveCinema = ({
  selectedCinema,
  currentResolution,
  selectedTime,
  setSelectedTime,
  setCurrentResolution
}: Props) => {
  return (
    <View>
      <TextDisplay styles={ticketStyles.version}>2D</TextDisplay>
      {selectedCinema === 'genesis' && (
        <View style={ticketStyles.timesContainer}>
          {CinemaTimes.genesis.main.map((item, index) => (
            <ViewingTimesItems
              key={index}
              selectedTime={selectedTime}
              item={item}
              setCurrentResolution={setCurrentResolution}
              setSelectedTime={setSelectedTime}
              currentResolution={currentResolution}
              resolution='2d'
            />
          ))}
        </View>
      )}
      {selectedCinema === 'paragon' && (
        <View style={ticketStyles.timesContainer}>
          {CinemaTimes.paragon.main.map((item, index) => (
            <ViewingTimesItems
              key={index}
              resolution='2d'
              selectedTime={selectedTime}
              item={item}
              setCurrentResolution={setCurrentResolution}
              setSelectedTime={setSelectedTime}
              currentResolution={currentResolution}
            />
          ))}
        </View>
      )}
      {selectedCinema === 'cinepolis' && (
        <View style={ticketStyles.timesContainer}>
          {CinemaTimes.genesis.main.map((item, index) => (
            <ViewingTimesItems
              key={index}
              resolution='2d'
              selectedTime={selectedTime}
              item={item}
              setCurrentResolution={setCurrentResolution}
              setSelectedTime={setSelectedTime}
              currentResolution={currentResolution}
            />
          ))}
        </View>
      )}
      <TextDisplay styles={ticketStyles.version}>IMax</TextDisplay>
      {selectedCinema === 'genesis' && (
        <View style={ticketStyles.timesContainer}>
          {CinemaTimes.genesis.imax.map((item, index) => (
            <ViewingTimesItems
              key={index}
              resolution='3d'
              selectedTime={selectedTime}
              item={item}
              setCurrentResolution={setCurrentResolution}
              setSelectedTime={setSelectedTime}
              currentResolution={currentResolution}
            />
          ))}
        </View>
      )}
      {selectedCinema === 'paragon' && (
        <View style={ticketStyles.timesContainer}>
          {CinemaTimes.paragon.imax.map((item, index) => (
            <ViewingTimesItems
              key={index}
              resolution='3d'
              selectedTime={selectedTime}
              item={item}
              setCurrentResolution={setCurrentResolution}
              setSelectedTime={setSelectedTime}
              currentResolution={currentResolution}
            />
          ))}
        </View>
      )}

      {selectedCinema === 'cinepolis' && (
        <View style={ticketStyles.timesContainer}>
          {CinemaTimes.cinepolis.imax.map((item, index) => (
            <ViewingTimesItems
              key={index}
              resolution='3d'
              selectedTime={selectedTime}
              item={item}
              setCurrentResolution={setCurrentResolution}
              setSelectedTime={setSelectedTime}
              currentResolution={currentResolution}
            />
          ))}
        </View>
      )}
    </View>
  )
}

{
  /* 

  setSelectedTime,
  setCurrentResolution,
  item,
  currentResolution,
  selectedTime

*/
}

export default ActiveCinema
