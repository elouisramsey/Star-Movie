import MoreInfo from 'components/MoreInfo/MoreInfo'
import TextDisplay from 'components/TextDisplay/TextDisplay'
import { useReusableQuery } from 'config/api/useReusableQuery'
import React, { useState } from 'react'
import { WebView } from 'react-native-webview'

import { Image, TouchableOpacity, View } from 'react-native'
import MovieService from 'screens/Home/services'
import { DetailsStyles } from '../DetailsStyles'
import ScrollContainer from '../ScrollContainer'

type Props = {
  id: number
}

const VideoItem = ({ item }: { item: any }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  // useEffect(() => {
  //   if (isPlaying) {
  //     setIsPlaying(false)
  //   }
  // }, [])

  const onPress = () => setIsPlaying(true)

  return (
    <TouchableOpacity style={[DetailsStyles.imageContainer]} onPress={onPress}>
      <Image
        accessibilityLabel={item.name}
        source={{
          uri: `https://img.youtube.com/vi/${item.key}/0.jpg`
        }}
        style={[DetailsStyles.images]}
      />
      <View style={DetailsStyles.playBtn}>
        <TextDisplay>▶</TextDisplay>
      </View>

      {isPlaying ? (
        <WebView
          source={{ uri: `https://www.youtube.com/watch?v=${item.key}` }}
          allowsFullscreenVideo={true}
        />
      ) : null}
    </TouchableOpacity>
  )
}

const MovieVideos = ({ id }: Props) => {
  const videos = useReusableQuery({
    fetcher: () => MovieService.getMovieVideos(id),
    queryKey: ['movive-videos']
  })

  return (
    <>
      <MoreInfo onPress={() => {}}>Videos</MoreInfo>
      <ScrollContainer>
        {videos?.results?.map((item: any) => (
          <VideoItem item={item} key={item.id} />
        ))}
      </ScrollContainer>
    </>
  )
}

export default MovieVideos
