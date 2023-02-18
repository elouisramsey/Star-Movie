import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Auth } from 'aws-amplify'
import { useGeneralUserState } from 'context/user/UserContext'
import { RootStackParamList } from 'navigation/types'
import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import Login from 'screens/Auth/Login'

type Props = {}

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>

const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
  const { state, dispatch } = useGeneralUserState()
  const { isLoggedIn } = state
  const [authStatus, setAuthStatus] = useState<boolean>(isLoggedIn)

  async function checkAuthState() {
    try {
      await Auth.currentAuthenticatedUser()
      console.log('✅ User is signed in')
      dispatch({
        type: 'LOGIN',
        payload: {
          email: 'test@gmsil.com'
        }
      })
    } catch (err) {
      console.log('❌ User is not signed in')
      //  setUsernameLoggedIn('loggedOut')
    }
  }

  useEffect(() => {}, [isLoggedIn])

  useEffect(() => {
    checkAuthState()
  }, [])

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
