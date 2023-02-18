import {
  COLORS,
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical
} from 'config/config'
import React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import { IBProps } from 'src/types/IBType'

const Button = (props: IBProps) => {
  const {
    title = 'Get ticket',
    onPress,
    backgroundColor = COLORS.primary,
    color = COLORS.white,
    width = '100%',
    disabled,
    loading,
    textStyles
  } = props

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: disabled ? 'grey' : backgroundColor,
        width
      }}
    >
      {loading && <ActivityIndicator size='small' color={COLORS.white} />}
      <Text
        style={{
          ...styles.text,
          marginLeft: loading ? pixelSizeHorizontal(20) : 0,
          ...textStyles,
          color
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: heightPixel(48),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginVertical: pixelSizeVertical(15),
    flexDirection: 'row'
  },
  text: {
    fontSize: fontPixel(16),
    lineHeight: 20,
    fontFamily: 'SF_Pro',
    fontWeight: 'bold'
  }
})

export default Button
