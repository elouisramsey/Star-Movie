import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Button from 'components/Button/Button'
import Input from 'components/TextInput/TextInput'
import { RootStackParamList } from 'navigation/types'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { AuthStyles } from './styles'

type Props = {
  navigation?: any
}

type SignupInfo = {
  username: string
  password: string
  email: string
  name: string
  code?: string
}

type SignupScreenProps = NativeStackScreenProps<RootStackParamList, 'Signup'>

const Signup = ({ navigation }: SignupScreenProps) => {
  const [confirmsignup, setConfirmSignup] = React.useState(false)
  const [authCode, setAuthCode] = React.useState('')
  const [username, setUser] = React.useState('')
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<SignupInfo>({
    defaultValues: {},
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })

  const onSubmit = async ({
    username,
    password,
    email,
    name
  }: {
    username: string
    password: string
    email: string
    name: string
  }) => {}

  return (
    <View style={AuthStyles.container}>
      <ScrollView
        contentContainerStyle={{
          width: '100%',
          marginTop: 45
        }}
      >
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
          <>
            <Controller
              name='username'
              defaultValue=''
              control={control}
              rules={{
                required: { value: true, message: 'Name is required' }
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  labelStyle={AuthStyles.label}
                  error={Boolean(errors?.username)}
                  errorText={errors?.username?.message}
                  onChangeText={(text) => {
                    setUser(text)
                    onChange(text)
                  }}
                  value={value}
                  label='Username'
                />
              )}
            />
            <Controller
              name='password'
              defaultValue=''
              control={control}
              rules={{
                required: { value: true, message: 'Password is required' }
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  secureTextEntry={true}
                  labelStyle={AuthStyles.label}
                  error={Boolean(errors?.password)}
                  errorText={errors?.password?.message}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                  label='Password'
                />
              )}
            />
            <Controller
              name='email'
              defaultValue=''
              control={control}
              rules={{
                required: { value: true, message: 'Email is required' }
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  labelStyle={AuthStyles.label}
                  error={Boolean(errors?.email)}
                  errorText={errors?.email?.message}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                  label='Email'
                />
              )}
            />
            <Controller
              name='name'
              defaultValue=''
              control={control}
              rules={{
                required: { value: true, message: 'Name is required' }
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  labelStyle={AuthStyles.label}
                  error={Boolean(errors?.name)}
                  errorText={errors?.name?.message}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                  label='Name'
                />
              )}
            />
            <View
              style={[
                AuthStyles.btnHolder,
                {
                  justifyContent: 'flex-end'
                }
              ]}
            >
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
            </View>
            <View>
              <Button
                width='100%'
                onPress={handleSubmit(onSubmit)}
                title='Signup'
              />
            </View>
          </>
        )}
      </ScrollView>
    </View>
  )
}

export default Signup
