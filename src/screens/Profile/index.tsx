import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useGeneralUserState } from 'context/user/UserContext'
import { RootStackParamList } from 'navigation/types'
import React, { useState } from 'react'
import { Text } from 'react-native'
import Login from 'screens/Auth/Login'

type Props = {}

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>

const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
  const { state, dispatch } = useGeneralUserState()
  const { isLoggedIn } = state
  const [authStatus, setAuthStatus] = useState<boolean>(isLoggedIn)

  return (
    <>
      {isLoggedIn ? (
        <Text>ProfileScreen</Text>
      ) : (
        <Login navigation={navigation} />
      )}
    </>
  )
}

export default ProfileScreen
