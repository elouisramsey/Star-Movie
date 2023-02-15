import Button from 'components/Button/Button'
import PickerComponent from 'components/Picker/Picker'
import SegmentController from 'components/SegmentController/SegmentController'
import TextDisplay from 'components/TextDisplay/TextDisplay'
import TopNav from 'components/TopNav/TopNav'
import { useGeneralTicketState } from 'context/SelectedMovie/TicketContext'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { SharedProps } from 'screens/MovieDetails/types'
import AvailableDays from './AvailableDays'
import ActiveCinema from './CinemaTimes'
import { ticketStyles } from './styles'

export interface Props
  extends Pick<
    SharedProps,
    'changeView' | 'original_title' | 'goBack' | 'tabs' | 'tabIndex'
  > {
  navigation: any
}

const cinema = [
  {
    label: 'Paragon Cinema',
    value: 'paragon'
  },
  {
    label: 'Genesis Deluxe Cinema',
    value: 'genesis'
  },
  {
    label: 'Cinepolis Cinema',
    value: 'cinepolis'
  }
]

const TicketsScreen = ({
  goBack,
  original_title,
  changeView,
  tabs,
  tabIndex,
  navigation
}: Props) => {
  const share = () => {}
  const [selectedCinema, setSelectedCinema] = useState('paragon')
  const [selectedTime, setSelectedTime] = useState('')
  const [currentResolution, setCurrentResolution] = useState('')

  const { dispatch } = useGeneralTicketState()

  useEffect(() => {
    dispatch({ type: 'addTheatre', payload: selectedCinema })
  }, [selectedCinema])

  return (
    <>
      <TopNav onPress={share} goBack={goBack} share={false}>
        {original_title}
      </TopNav>
      <SegmentController
        tabs={tabs}
        currentIndex={tabIndex}
        onChange={changeView}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextDisplay styles={ticketStyles.heading}>Choose Day</TextDisplay>

        <AvailableDays />
        <TextDisplay styles={ticketStyles.heading}>Choose cinema</TextDisplay>
        <PickerComponent
          selectedValue={selectedCinema}
          items={cinema}
          onValueChange={(itemValue: React.SetStateAction<string>) => {
            setSelectedCinema(itemValue)
          }}
        />
        <ActiveCinema
          selectedCinema={selectedCinema}
          setSelectedTime={setSelectedTime}
          selectedTime={selectedTime}
          setCurrentResolution={setCurrentResolution}
          currentResolution={currentResolution}
        />
        <Button
          title='Seat selection'
          onPress={() => navigation.navigate('SeatSelection')}
          disabled={selectedTime.length === 0}
        />
      </ScrollView>
    </>
  )
}

export default TicketsScreen
