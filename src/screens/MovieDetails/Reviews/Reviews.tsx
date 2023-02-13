import SegmentController from 'components/SegmentController/SegmentController'
import TextDisplay from 'components/TextDisplay/TextDisplay'
import { useReusableQuery } from 'config/api/useReusableQuery'
import React from 'react'
import { FlatList, View } from 'react-native'
import MovieService from 'screens/Home/services'
import ReviewItem from './ReviewItem'

type Props = {
  changeView: (val: number) => void
  tabs: { name: string }[]
  tabIndex: number
  id: number
}

const Reviews = ({ tabs, tabIndex, changeView, id }: Props) => {
  const reviews = useReusableQuery({
    fetcher: () => MovieService.getMovieReviews(id),
    queryKey: ['movie-reviews']
  })

  return (
    <View>
      <SegmentController
        tabs={tabs}
        currentIndex={tabIndex}
        onChange={changeView}
      />
      <FlatList
        data={reviews.results}
        renderItem={({ item }) => <ReviewItem item={item} />}
        ListEmptyComponent={() => <TextDisplay>No reviews yet</TextDisplay>}
      />
    </View>
  )
}

export default Reviews
