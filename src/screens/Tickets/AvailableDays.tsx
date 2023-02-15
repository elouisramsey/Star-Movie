import DaySelector from 'components/DaySelector/DaySelector'
import { useGeneralTicketState } from 'context/SelectedMovie/TicketContext'
import React from 'react'

type Props = {}

const dates = [
  { day: '21 may', weekday: 'wed' },
  {
    day: '23 may',
    weekday: 'thu'
  },
  {
    day: '24 may',
    weekday: 'fri'
  },
  {
    day: '25 may',
    weekday: 'sat'
  },
  {
    day: '26 may',
    weekday: 'sun'
  }
]

const AvailableDays = (props: Props) => {
  const [currentTab, setCurrentTab] = React.useState(0)
  const changeViews = (index: number) => setCurrentTab(index)

  const { dispatch } = useGeneralTicketState()

  const filteredDates = React.useMemo(() => {
    return dates.filter((item, index) => index === currentTab)
  }, [currentTab, dates])

  React.useEffect(() => {
    dispatch({ type: 'addDate', payload: filteredDates[0].day })
  }, [dispatch, filteredDates])

  return (
    <DaySelector
      currentIndex={currentTab}
      onChange={changeViews}
      tabs={dates}
    />
  )
}

export default AvailableDays
