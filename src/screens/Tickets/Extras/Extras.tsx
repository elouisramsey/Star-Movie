import { NativeStackScreenProps } from '@react-navigation/native-stack'
import TopNav from 'components/TopNav/TopNav'
import { useGeneralSeatState } from 'context/MovieContext'
import { RootStackParamList } from 'navigation/types'
import React from 'react'
import { FlatList, View } from 'react-native'
import { DetailsStyles } from 'screens/MovieDetails/DetailsStyles'
import { seatStyles } from '../Seats/styles'
import ExtraItem from './ExtraItem'

type ExtraScreenProps = NativeStackScreenProps<RootStackParamList, 'Extra'>

const Extras = ({ navigation }: ExtraScreenProps) => {
  const { state } = useGeneralSeatState()
  return (
    <View style={[DetailsStyles.container, seatStyles.container]}>
      <TopNav goBack={() => navigation.goBack()}>Extras</TopNav>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={state.extras}
        renderItem={({ item }) => <ExtraItem item={item} />}
      />
    </View>
  )
}

export default Extras
