import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Status from 'components/Status/Status'
import TopNav from 'components/TopNav/TopNav'
import { useGeneralUserState } from 'context/user/UserContext'
import { RootStackParamList } from 'navigation/types'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import Login from 'screens/Auth/Login'
import { DetailsStyles } from 'screens/MovieDetails/DetailsStyles'
import { seatStyles } from 'screens/Tickets/Seats/styles'
import PaymentFormFields from './PaymentFormFields'

type PaymentScreenProps = NativeStackScreenProps<RootStackParamList, 'Payment'>

const Payment = ({ navigation }: PaymentScreenProps) => {
  const { state } = useGeneralUserState()
  const [status, setStatus] = useState<any>()
  const [subText, setsubText] = useState<string>('')
  const [showModal, setShowModal] = useState(false)
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(state.isLoggedIn)
  //   const isLoggedIn = state.isLoggedIn

  useEffect(() => {
    setisLoggedIn(state.isLoggedIn)
  }, [state.isLoggedIn])

  return (
    <>
      {isLoggedIn ? (
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
        </View>
      ) : (
        <Login />
      )}
    </>
  )
}

export default Payment
