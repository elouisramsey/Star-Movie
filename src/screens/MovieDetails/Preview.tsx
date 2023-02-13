import React from 'react'
import { Image, ImageBackground, View } from 'react-native'
import { DetailsStyles } from './DetailsStyles'
import Nav from './Nav'

type Props = {
  goBack: any
  backgroundImage: string
}

const Preview = ({ goBack, backgroundImage }: Props) => {
  return (
    <ImageBackground
      source={{
        uri: backgroundImage
      }}
      style={DetailsStyles.poster}
      blurRadius={2}
    >
      <Nav onPress={goBack} />
      <View style={DetailsStyles.movieImage}>
        <Image
          source={{
            uri: backgroundImage
          }}
          style={DetailsStyles.image}
        />
      </View>
    </ImageBackground>
  )
}

export default Preview
