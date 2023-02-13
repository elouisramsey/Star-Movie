import React from 'react'
import { Text, View } from 'react-native'
import { DetailsStyles } from './DetailsStyles'

type Genres = {
  id: number
  name: string
}

type Props = {
  title: string
  genres: Genres[]
  duration: number
  adult: boolean
}

const MovieRuntimeInfo = ({ title, genres, duration, adult }: Props) => {
  return (
    <View style={DetailsStyles.runtimeContainer}>
      <Text style={DetailsStyles.movieTitle}>{title}</Text>
      <Text style={DetailsStyles.movieText}>
        {duration}mins | {!adult ? 'PG' : 'PG-18'}
      </Text>
      <Text style={DetailsStyles.movieText}>
        {genres?.map((genre) => genre.name).join(', ')}
      </Text>
    </View>
  )
}

export default MovieRuntimeInfo
