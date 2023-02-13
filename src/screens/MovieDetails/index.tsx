import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useScrollDirection } from 'components/ScrollDirection'
import { useReusableQuery } from 'config/api/useReusableQuery'
import { pixelSizeVertical } from 'config/normalize'
import { RootStackParamList } from 'navigation/types'
import React from 'react'
import { Animated, View } from 'react-native'
import MovieService from 'screens/Home/services'
import { TicketsScreen } from '..'
import Crew from './Crew'
import { DetailsStyles } from './DetailsStyles'
import DetailsView from './DetailsView'
import Nav from './Nav'
import Reviews from './Reviews/Reviews'
import { tabs } from './Tabs'
import MovieImagePreview from './Visuals/MovieImages'
import MovieVideos from './Visuals/MovieVideos'

const baseImgUrl = 'https://image.tmdb.org/t/p'
const size = 'w500'

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'MovieDetails'> {
  // other props ...
}

const MovieDetails = ({ route, navigation }: Props) => {
  // @ts-ignore
  const { movie: id } = route.params

  const data = useReusableQuery({
    fetcher: () => MovieService.getSingleMovie(id),
    queryKey: ['movie']
  })

  const {
    backdrop_path,
    adult,
    genres,
    original_title,
    overview,
    release_date,
    runtime,
    tagline,
    video
  } = data

  const [scrollDir, onScroll] = useScrollDirection()

  const previewOpacity = React.useRef(new Animated.Value(1)).current
  const showNav = React.useRef(new Animated.Value(1)).current

  const [tabIndex, setTabIndex] = React.useState(0)
  const changeView = (index: number) => setTabIndex(index)

  React.useEffect(() => {
    if (scrollDir === 'down') {
      Animated.timing(previewOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start()

      Animated.timing(showNav, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start()
    } else {
      Animated.timing(previewOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start()
      Animated.timing(showNav, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start()
    }
  }, [scrollDir, previewOpacity])

  const goBack = () => navigation.goBack()

  return (
    <View style={DetailsStyles.main}>
      {tabIndex === 0 && (
        <>
          <Animated.View
            style={{
              opacity: showNav,
              ...DetailsStyles.showNav
            }}
          >
            <Nav
              onPress={goBack}
              container={{ paddingTop: pixelSizeVertical(25) }}
            />
          </Animated.View>
          <DetailsView
            tabs={tabs}
            backdrop_path={backdrop_path}
            goBack={goBack}
            changeView={changeView}
            onScroll={onScroll}
            overview={overview}
            original_title={original_title}
            runtime={runtime}
            tabIndex={tabIndex}
            genres={genres}
            adult={adult}
          >
            <Crew id={id} />
            <MovieImagePreview id={id} />
            <MovieVideos id={id} />
          </DetailsView>
        </>
      )}
      {tabIndex === 1 && (
        <View style={[DetailsStyles.container, DetailsStyles.contentContainer]}>
          <Reviews
            tabs={tabs}
            changeView={changeView}
            id={id}
            tabIndex={tabIndex}
          />
        </View>
      )}
      {tabIndex === 2 && (
        <View style={[DetailsStyles.container, DetailsStyles.contentContainer]}>
          <TicketsScreen
            navigation={navigation}
            original_title={original_title}
            goBack={goBack}
            tabIndex={tabIndex}
            tabs={tabs}
            changeView={changeView}
          />
        </View>
      )}
    </View>
  )
}

export default MovieDetails
