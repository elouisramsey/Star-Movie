import { Picker } from '@react-native-picker/picker'
import { COLORS } from 'config/COLORS'
import React from 'react'
import { pickerStyles } from './styles'

interface Props {
  items: { label: string; value: string }[]
  selectedValue: string
  onValueChange: (value: string) => void
}

const PickerComponent = ({ items, selectedValue, onValueChange }: Props) => {
  return (
    <Picker
      style={pickerStyles.picker}
      itemStyle={pickerStyles.pickerItem}
      selectedValue={selectedValue}
      onValueChange={(itemValue) => onValueChange(itemValue)}
      dropdownIconColor={COLORS.primary}
      mode='dropdown'
    >
      {items.map((item) => (
        <Picker.Item label={item.label} value={item.value} key={item.label} />
      ))}
    </Picker>
  )
}

export default PickerComponent
