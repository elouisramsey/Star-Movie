import { useReusableQuery } from 'config/api/useReusableQuery'
import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import { IBMovie } from 'types/IBMovie'
import MoviePoster from './MoviePoster'
import MovieService from './services'

type Props = {
  navigation: any
}

const MovieList = ({ navigation }: Props) => {
  const openMovieDetails = React.useCallback(
    (movie: any) => {
      navigation.navigate('MovieDetails', {
        movie
      })
    },
    [navigation]
  )

  const renderItem: ListRenderItem<IBMovie> = React.useCallback(
    ({ item }) => {
      return <MoviePoster movie={item} onPress={openMovieDetails} />
    },
    [openMovieDetails]
  )

  const data = useReusableQuery({
    fetcher: () => MovieService.getAllMovies(),
    queryKey: ['movies']
  })

  return (
    <FlatList
      horizontal={false}
      columnWrapperStyle={{
        justifyContent: 'space-between'
      }}
      data={data?.results}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      bounces={false}
      numColumns={2}
    />
  )
}

export default MovieList
