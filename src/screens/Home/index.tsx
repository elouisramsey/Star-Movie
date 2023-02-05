import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from 'navigation/types'
import React from 'react'
import { View } from 'react-native'
import { HomeStyles } from './HomeStyles'
import MovieList from './MovieList'
import SearchContainer from './SearchContainer'

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const { navigation } = props

  return (
    <View style={HomeStyles.ListContainer}>
      <SearchContainer />
      <MovieList navigation={navigation} />
    </View>
  )
}

export default HomeScreen
