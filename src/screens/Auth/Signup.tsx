import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Button from 'components/Button/Button'
import Input from 'components/TextInput/TextInput'
import { ProfileStackParamList } from 'navigation/types'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import SignupForm from './SignupForm'
import { AuthStyles } from './styles'
import useCustomForm from './useCustomForm'

type Props = {
  navigation?: any
}

type SignupScreenProps = NativeStackScreenProps<ProfileStackParamList, 'Signup'>

const Signup = ({ navigation }: SignupScreenProps) => {
  const [confirmsignup, setConfirmSignup] = useState(false)
  const { errors, completeSignup } = useCustomForm({ setConfirmSignup })

  const [authCode, setAuthCode] = React.useState('')
  const [username, setUsername] = React.useState('')

  const confirmCode = () =>
    completeSignup({
      username,
      authCode,
      navigateTo: () => navigation.navigate('Login')
    })

  return (
    <View style={AuthStyles.container}>
      {confirmsignup ? (
        <View
          style={{
            width: '100%'
          }}
        >
          <Input
            labelStyle={AuthStyles.label}
            error={Boolean(errors?.code)}
            errorText={errors?.code?.message}
            onChangeText={(text) => setAuthCode(text)}
            value={authCode}
            label='Confirmation Code'
          />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={[
                AuthStyles.forgotPassword,
                {
                  color: 'gray'
                }
              ]}
            >
              Login
            </Text>
          </TouchableOpacity>
          <Button onPress={confirmCode} title='Signup' />
        </View>
      ) : (
        <SignupForm
          setConfirmSignup={setConfirmSignup}
          navigation={navigation}
          setUsername={setUsername}
        />
      )}
    </View>
  )
}

export default Signup
