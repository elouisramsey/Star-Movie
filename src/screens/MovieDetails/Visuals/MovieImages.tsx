import MoreInfo from 'components/MoreInfo/MoreInfo'
import { useReusableQuery } from 'config/api/useReusableQuery'
import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import MovieService from 'screens/Home/services'
import { DetailsStyles } from '../DetailsStyles'
import ScrollContainer from '../ScrollContainer'

type Props = {
  id: number
}

const baseImgUrl = 'https://image.tmdb.org/t/p'
const size = 'w500'

const MovieImagePreview = ({ id }: Props) => {
  const images = useReusableQuery({
    fetcher: () => MovieService.getMovieImages(id),
    queryKey: ['movive-images']
  })

  return (
    <>
      <MoreInfo onPress={() => {}}>Pictures</MoreInfo>
      <ScrollContainer>
        {images?.backdrops?.map((item: any) => (
          <TouchableOpacity
            key={item.file_path}
            style={DetailsStyles.imageContainer}
          >
            <Image
              accessibilityLabel={item.file_path}
              source={{
                uri: `${baseImgUrl}/${size}${item?.file_path}`
              }}
              style={DetailsStyles.images}
            />
          </TouchableOpacity>
        ))}
      </ScrollContainer>
    </>
  )
}

export default MovieImagePreview
