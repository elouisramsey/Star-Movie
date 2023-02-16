import TextDisplay from 'components/TextDisplay/TextDisplay'
import { useGeneralSeatState } from 'context/MovieContext'
import React from 'react'
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { ExtraStyles } from './styles'

type Props = {
  item: {
    name: string
    price: number
    quantity: number
    image: ImageSourcePropType
    id: string
  }
}

const ExtraItem = ({ item }: Props) => {
  const { name, price, quantity, image, id } = item

  const { dispatch } = useGeneralSeatState()
  console.log(quantity)
  return (
    <View style={ExtraStyles.item}>
      <View style={ExtraStyles.items}>
        <Image
          style={ExtraStyles.image}
          source={image}
          accessibilityLabel={name}
        />
        <View>
          <Text style={ExtraStyles.name}>{name}</Text>
          <Text style={ExtraStyles.price}>${price}.00</Text>
        </View>
      </View>
      <View style={ExtraStyles.counterHolder}>
        <TouchableOpacity
          disabled={quantity < 1}
          style={ExtraStyles.btnHolder}
          onPress={() => {
            // dispatch(decreaseExtra(item))
            dispatch({ type: 'decreaseExtra', payload: { id } })
          }}
        >
          <TextDisplay styles={ExtraStyles.sub}>-</TextDisplay>
        </TouchableOpacity>
        <View style={ExtraStyles.counter}>
          <TextDisplay styles={ExtraStyles.counterText}>{quantity}</TextDisplay>
        </View>
        <TouchableOpacity
          style={ExtraStyles.btnHolder}
          onPress={() => dispatch({ type: 'addExtra', payload: { id } })}
        >
          <TextDisplay styles={ExtraStyles.sub}>+</TextDisplay>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ExtraItem
