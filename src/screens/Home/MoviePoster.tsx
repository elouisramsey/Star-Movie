import { MaterialIcons } from '@expo/vector-icons'
import { baseImgUrl, size } from 'config/URLS'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { IBMovie } from 'types/IBMovie'
import { HomeStyles } from './HomeStyles'
import { stars } from './utils'

//   const goToMovieDetails =
//     (movie) => {
//       navigation.navigate('MovieDetails', {
//         movie: movie.id
//       })
//     }

const MoviePoster = ({
  movie,
  onPress
}: {
  movie: IBMovie
  onPress: (id: number) => void
}) => {
  stars.fill(
    <MaterialIcons name='star' size={14} color='#ffc045' />,
    0,
    movie?.vote_average / 3 >= 5 ? 5 : movie?.vote_average / 2
  )

  return (
    <TouchableOpacity
      style={[HomeStyles.movieHolder]}
      onPress={() => onPress(movie.id)}

      //   onPress={async () => {
      //     navigation.navigate('MovieDetails', {
      //       movie: movie.id
      //     })
      //     // dispatch(setMovieName(movie.title))
      //     // dispatch(setMoviePoster(`${baseImgUrl}/${size}${movie.poster_path}`))
      //   }}
    >
      <Image
        source={{
          uri: `${baseImgUrl}/${size}${movie?.poster_path}`
        }}
        resizeMode='cover'
        style={HomeStyles.moviePoster}
      />
      <View>
        <View style={HomeStyles.movieRating}>
          {stars.map((star, index) => (
            <Text style={HomeStyles.rating} key={index}>
              {star}
            </Text>
          ))}
        </View>
        <Text style={HomeStyles.movieTitle} numberOfLines={1}>
          {movie?.title}
        </Text>
        <View style={HomeStyles.minorInfo}>
          <Text
            style={[
              HomeStyles.movieText,
              {
                textTransform: 'capitalize'
              }
            ]}
          >
            {movie?.media_type}
          </Text>
          <View style={HomeStyles.circle} />
          <Text style={HomeStyles.movieText}>
            1hr 45mins| {movie?.adult ? 'PG' : 'PG-18'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MoviePoster
