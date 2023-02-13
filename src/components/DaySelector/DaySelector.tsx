import TextDisplay from 'components/TextDisplay/TextDisplay'
import Layout from 'config/Layout'
import { fontPixel, pixelSizeVertical } from 'config/normalize'
import React, { useEffect } from 'react'
import { Animated, TouchableOpacity } from 'react-native'
import { styles } from './styles'

type Props = {
  tabs: any
  onChange: (val: any) => void
  currentIndex: number
  segmentedControlBackgroundColor?: string
  paddingVertical?: number
  activeSegmentBackgroundColor?: string
}

// So that it stretches in landscape mode.
const width = Layout.window.width - 2

const DaySelector = ({
  tabs,
  onChange,
  currentIndex = 0,
  segmentedControlBackgroundColor = 'transparent',
  paddingVertical = pixelSizeVertical(14),
  activeSegmentBackgroundColor = '#F8C42F'
}: Props) => {
  const translateValue = (width - 4) / tabs?.length
  const [tabTranslate, setTabTranslate] = React.useState(new Animated.Value(0))

  const memoizedTabPressCallback = React.useCallback((index: number) => {
    onChange(index)
  }, [])

  useEffect(() => {
    Animated.spring(tabTranslate, {
      toValue: currentIndex * translateValue,
      stiffness: 180,
      damping: 20,
      mass: 1,
      useNativeDriver: true
    }).start()
  }, [currentIndex])

  return (
    <Animated.ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[
        styles.segmentedControlWrapper,
        { paddingVertical: paddingVertical }
      ]}
    >
      {tabs.map((tab: any, index: number) => {
        const isCurrentIndex = currentIndex === index
        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.textWrapper,
              {
                backgroundColor: isCurrentIndex
                  ? activeSegmentBackgroundColor
                  : segmentedControlBackgroundColor
              }
            ]}
            onPress={() => memoizedTabPressCallback(index)}
            activeOpacity={0.8}
          >
            <TextDisplay
              // numberOfLines={1}
              styles={[
                styles.textStyles,
                {
                  opacity: isCurrentIndex ? 1 : 0.7,
                  marginBottom: pixelSizeVertical(5)
                },
                isCurrentIndex && { color: '#0F1B2B' }
              ]}
            >
              {tab.day}
            </TextDisplay>
            <TextDisplay
              // numberOfLines={1}
              styles={[
                styles.textStyles,
                {
                  color: '#fff',
                  fontSize: fontPixel(14),
                  opacity: isCurrentIndex ? 1 : 0.5,
                  textTransform: 'uppercase'
                },
                isCurrentIndex && { color: '#0F1B2B' }
              ]}
            >
              {tab.weekday}
            </TextDisplay>
          </TouchableOpacity>
        )
      })}
    </Animated.ScrollView>
  )
}

export default DaySelector
