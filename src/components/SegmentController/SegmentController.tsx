import { COLORS } from 'config/COLORS'
import Layout from 'config/Layout'
import { pixelSizeHorizontal, pixelSizeVertical } from 'config/normalize'
import { shadow } from 'config/shadow'
import React, { useEffect } from 'react'
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { IBSegmentController } from 'types/IBSegmentController'
import { styles } from './SegmentStyles'

// So that it stretches in landscape mode.
const width = Layout.window.width - 2

const SegmentController = ({
  tabs,
  onChange,
  currentIndex = 0,
  segmentedControlBackgroundColor = 'transparent',
  paddingVertical = 12,
  activeSegmentBackgroundColor = COLORS.inactive,
  textColor = '#333',
  activeTextColor = COLORS.white
}: IBSegmentController) => {
  const translateValue = (width - 4) / tabs?.length
  const [tabTranslate, setTabTranslate] = React.useState(new Animated.Value(0))

  // useCallBack with an empty array as input, which will call inner lambda only once and memoize the reference for future calls
  const memoizedTabPressCallback = React.useCallback((index: number) => {
    onChange(index)
  }, [])

  useEffect(() => {
    // Animating the active index based current index
    Animated.spring(tabTranslate, {
      toValue: currentIndex * translateValue,
      stiffness: 180,
      damping: 20,
      mass: 1,
      useNativeDriver: true
    }).start()
  }, [currentIndex])

  return (
    <Animated.View
      style={[
        styles.segmentedControlWrapper,
        {
          paddingVertical: pixelSizeVertical(paddingVertical),
          backgroundColor: segmentedControlBackgroundColor
        }
      ]}
    >
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          {
            position: 'absolute',
            width: (width - 4) / tabs?.length,
            top: 0,
            marginVertical: pixelSizeVertical(2),
            marginHorizontal: pixelSizeHorizontal(2),
            backgroundColor: activeSegmentBackgroundColor,
            borderRadius: 8,
            ...shadow
          },
          {
            transform: [
              {
                translateX: tabTranslate
              }
            ]
          }
        ]}
      ></Animated.View>
      {tabs.map((tab: any, index: number) => {
        const isCurrentIndex = currentIndex === index
        return (
          <TouchableOpacity
            key={index}
            style={[styles.textWrapper]}
            onPress={() => memoizedTabPressCallback(index)}
            activeOpacity={0.8}
          >
            {tab.icon && (
              <View
                style={[
                  styles.iconWrapper
                  //   isCurrentIndex && { color: activeTextColor }
                ]}
              >
                {tab.icon}
              </View>
            )}
            <Text
              numberOfLines={1}
              style={[
                styles.textStyles,
                {
                  color: textColor
                },
                isCurrentIndex && { color: activeTextColor }
              ]}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        )
      })}
    </Animated.View>
  )
}

export default SegmentController
