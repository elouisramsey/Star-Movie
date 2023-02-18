import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Button from 'components/Button/Button'
import Input from 'components/TextInput/TextInput'
import { ProfileStackParamList } from 'navigation/types'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import SignupForm from './SignupForm'
import { AuthStyles } from './styles'
import useCustomForm from './useCustomForm'

type Props = {
  navigation?: any
}

type SignupScreenProps = NativeStackScreenProps<ProfileStackParamList, 'Signup'>

const Signup = ({ navigation }: SignupScreenProps) => {
  const { errors } = useCustomForm()

  const [confirmsignup, setConfirmSignup] = React.useState(false)
  const [authCode, setAuthCode] = React.useState('')
  const [username, setUsername] = React.useState('')

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
          <Button
            onPress={async () => {
              try {
                //   await Auth.confirmSignUp(username, authCode)
              } catch (error) {
                console.log(error)
              }
            }}
            title='Signup'
          />
        </View>
      ) : (
        <SignupForm navigation={navigation} setUsername={setUsername} />
      )}
    </View>
  )
}

export default Signup
