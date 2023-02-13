import DaySelector from 'components/DaySelector/DaySelector'
import React from 'react'

type Props = {}

const dates = [
  { day: 'today', weekday: 'wed' },
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

  return (
    <DaySelector
      currentIndex={currentTab}
      onChange={changeViews}
      tabs={dates}
    />
  )
}

export default AvailableDays
