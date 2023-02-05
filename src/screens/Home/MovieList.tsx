import { ErrorDisplay } from 'components/Error/Error'
import LoadingIndicator from 'components/Loader/Loading'
import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import { useQuery } from 'react-query'
import { ApiError } from 'types'
import { IBMovie } from 'types/IBMovie'
import MoviePoster from './MoviePoster'
import MovieService from './services'

type Props = {
  navigation: any
}

const MovieList = ({ navigation }: Props) => {
  const { isLoading, error, data } = useQuery<any, ApiError>(['movies'], () =>
    MovieService.getAllMovies()
  )

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

  if (isLoading) return <LoadingIndicator loading={isLoading} />

  if (error) return <ErrorDisplay errorMessage={error?.message} />
  return (
    <FlatList
      horizontal={false}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
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
