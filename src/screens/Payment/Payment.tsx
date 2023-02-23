import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useGeneralUserState } from 'context/user/UserContext'
import { RootStackParamList } from 'navigation/types'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import Login from 'screens/Auth/Login'
import { DetailsStyles } from 'screens/MovieDetails/DetailsStyles'
import { seatStyles } from 'screens/Tickets/Seats/styles'
import { useTicket } from './useTicketPayment'

type PaymentScreenProps = NativeStackScreenProps<RootStackParamList, 'Payment'>

const Payment = ({ navigation }: PaymentScreenProps) => {
  const { state } = useGeneralUserState()
  const {
    createAndAssignTicket,
    loading,
    showModal,
    setShowModal,
    status,
    subText
  } = useTicket()
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(state.isLoggedIn)

  useEffect(() => {
    setisLoggedIn(state.isLoggedIn)
  }, [state.isLoggedIn])

  return (
    <>
      {isLoggedIn ? (
        <View style={[DetailsStyles.container, seatStyles.container]}>
          {/* <TopNav goBack={() => navigation.goBack()}>Payment</TopNav>

          <PaymentFormFields
            createAndAssignTicket={createAndAssignTicket}
            loading={loading}
          />
          <Status
            subText={subText}
            navigation={navigation}
            setShowModal={setShowModal}
            showModal={showModal}
            status={status}
          /> */}
        </View>
      ) : (
        <Login />
      )}
    </>
  )
}

export default Payment
