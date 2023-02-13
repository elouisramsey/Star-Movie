import MoreInfo from 'components/MoreInfo/MoreInfo'
import { useReusableQuery } from 'config/api/useReusableQuery'
import React from 'react'
import { Image, ScrollView, TouchableOpacity } from 'react-native'
import MovieService from 'screens/Home/services'
import { DetailsStyles } from './DetailsStyles'

type Props = {
  id: number
}

const Trailers = ({ id }: Props) => {
  const images = useReusableQuery({
    fetcher: () => MovieService.getMovieImages(id),
    queryKey: ['movive-images']
  })
  return (
    <>
      <MoreInfo onPress={() => {}}>Pictures</MoreInfo>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={DetailsStyles.imgContentContainerStyle}
        horizontal={true}
      >
        {images.map((item: any) => (
          <TouchableOpacity key={item.id} style={DetailsStyles.imageContainer}>
            <Image source={item.image} style={DetailsStyles.images} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  )
}

export default Trailers
