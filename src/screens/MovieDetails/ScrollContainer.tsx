import React from 'react'
import { ScrollView } from 'react-native'
import { DetailsStyles } from './DetailsStyles'

type Props = {
  children: React.ReactNode
}

const ScrollContainer = ({ children }: Props) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={DetailsStyles.imgContentContainerStyle}
      horizontal={true}
    >
      {children}
    </ScrollView>
  )
}

export default ScrollContainer
