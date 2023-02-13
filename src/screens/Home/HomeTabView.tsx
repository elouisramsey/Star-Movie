import { Ionicons } from '@expo/vector-icons'
import SegmentController from 'components/SegmentController/SegmentController'
import { COLORS } from 'config/COLORS'
import React from 'react'
import { Text } from 'react-native'
import MovieList from './MovieList'

const tabs = [
  {
    name: 'Now showing',
    icon: <Ionicons name='ios-play' size={10} color={COLORS.inactive} />
  },
  {
    name: 'Coming soon'
  }
]

const HomeTabView = ({ navigation }: { navigation: any }) => {
  const [tabIndex, setTabIndex] = React.useState(0)
  const changeView = (index: number) => setTabIndex(index)

  return (
    <>
      <SegmentController
        tabs={tabs}
        currentIndex={tabIndex}
        onChange={changeView}
      />
      {tabIndex === 0 && <MovieList navigation={navigation} />}
      {tabIndex === 1 && <Text>Coming soon</Text>}
    </>
  )
}

export default HomeTabView
