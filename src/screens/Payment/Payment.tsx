import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Status from 'components/Status/Status'
import TopNav from 'components/TopNav/TopNav'
import { RootStackParamList } from 'navigation/types'
import React, { useState } from 'react'
import { View } from 'react-native'
import { DetailsStyles } from 'screens/MovieDetails/DetailsStyles'
import { seatStyles } from 'screens/Tickets/Seats/styles'
import PaymentFormFields from './PaymentFormFields'

type PaymentScreenProps = NativeStackScreenProps<RootStackParamList, 'Payment'>

const Payment = ({ navigation }: PaymentScreenProps) => {
  const [status, setStatus] = useState<any>()
  const [subText, setsubText] = useState<string>('')
  const [showModal, setShowModal] = useState(false)

  return (
    <View style={[DetailsStyles.container, seatStyles.container]}>
      <TopNav goBack={() => navigation.goBack()}>Payment</TopNav>

      <PaymentFormFields
        setsubText={setsubText}
        setShowModal={setShowModal}
        setStatus={setStatus}
      />
      <Status
        subText={subText}
        navigation={navigation}
        setShowModal={setShowModal}
        showModal={showModal}
        status={status}
      />
      {/* <View style={seatStyles.bottom}>
        <View>
          <TextDisplay styles={seatStyles.cost}>Total Cost</TextDisplay>
          <TextDisplay styles={seatStyles.amount}>
            {convertCurrency(5000)}
          </TextDisplay>
        </View>
        <View style={{ width: '45%' }}>
          <Button title='Make Payment' onPress={handleSubmit(onSubmit)} />
        </View>
      </View> */}
    </View>
  )
}

export default Payment
