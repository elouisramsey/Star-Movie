import SegmentController from 'components/SegmentController/SegmentController'
import TextDisplay from 'components/TextDisplay/TextDisplay'
import { useGeneralTicketState } from 'context/SelectedMovie/TicketContext'
import React, { useEffect } from 'react'
import { Animated, ScrollView, View } from 'react-native'
import { DetailsStyles } from './DetailsStyles'
import MovieRuntimeInfo from './MovieRuntimeInfo'
import Preview from './Preview'
import { SharedProps } from './types'

const baseImgUrl = 'https://image.tmdb.org/t/p'
const size = 'w500'

const DetailsView = ({
  goBack,
  backdrop_path,
  overview,
  original_title,
  runtime,
  genres,
  changeView,
  tabIndex,
  adult,
  onScroll,
  children,
  tabs
}: SharedProps) => {
  const bgImageUrl = `${baseImgUrl}/${size}${backdrop_path}`

  const previewOpacity = React.useRef(new Animated.Value(1)).current

  const { dispatch } = useGeneralTicketState()

  useEffect(() => {
    dispatch({ type: 'addMoviePoster', payload: bgImageUrl })
    dispatch({ type: 'addMovieName', payload: original_title })
    dispatch({ type: 'addTime', payload: runtime + '' })
  }, [bgImageUrl])

  return (
    <ScrollView
      style={DetailsStyles.container}
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
      scrollEventThrottle={16}
      bounces={false}
    >
      <Animated.View style={{ opacity: previewOpacity }}>
        <Preview goBack={goBack} backgroundImage={bgImageUrl} />
      </Animated.View>

      <MovieRuntimeInfo
        title={original_title}
        duration={runtime}
        genres={genres}
        adult={adult}
      />
      <View style={DetailsStyles.tabContainer}>
        <SegmentController
          tabs={tabs}
          currentIndex={tabIndex}
          onChange={changeView}
        />
        <TextDisplay>Synopsis</TextDisplay>
        <TextDisplay longerText styles={DetailsStyles.overview}>
          {overview}
        </TextDisplay>

        {children}
      </View>
    </ScrollView>
  )
}

export default DetailsView
