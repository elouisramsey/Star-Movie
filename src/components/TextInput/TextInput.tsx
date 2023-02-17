import TextDisplay from 'components/TextDisplay/TextDisplay'
import { COLORS } from 'config/config'
import React from 'react'
import { TextInput, TextInputProps, View } from 'react-native'
import { InputStyles } from './styles'

interface Props extends TextInputProps {
  label?: string
  error?: boolean
  errorText?: any
  inputContainerStyle?: any
  labelStyle?: any
  containerStyle?: any
  value: any
  icon?: any
}

const Input: React.FC<Props> = ({
  label,
  error,
  errorText,
  inputContainerStyle,
  labelStyle,
  containerStyle,
  value,
  icon,
  ...rest
}) => {
  return (
    <View style={[InputStyles.container, containerStyle]}>
      {label && (
        <TextDisplay styles={[InputStyles.label, labelStyle]}>
          {label}
        </TextDisplay>
      )}
      <View
        style={[
          InputStyles.inputContainer,
          inputContainerStyle,
          error && { borderColor: '#EE4B2B' }
        ]}
      >
        {icon && <>{icon}</>}
        <TextInput
          style={InputStyles.input}
          placeholderTextColor={COLORS.grayed}
          value={value}
          {...rest}
        />
      </View>
      {error && (
        <TextDisplay styles={InputStyles.error}>{errorText}</TextDisplay>
      )}
    </View>
  )
}

export default Input

Input.defaultProps = {
  returnKeyType: 'next',
  autoCapitalize: 'none'
}
