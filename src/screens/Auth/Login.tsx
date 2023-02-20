import { AntDesign, Entypo } from '@expo/vector-icons'
import Button from 'components/Button/Button'
import TextDisplay from 'components/TextDisplay/TextDisplay'
import Input from 'components/TextInput/TextInput'
import { useGeneralUserState } from 'context/user/UserContext'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TouchableOpacity, View } from 'react-native'
import { Credentials } from './hooks/types'
import { useSubmit } from './hooks/useLogin'
import { AuthStyles } from './styles'

type Props = {
  navigation?: any
  navigateTopage?: boolean
}

type LoginInfo = {
  username: string
  password: string
}

const Login = ({ navigation, navigateTopage = false }: Props) => {
  const [loading, setLoading] = useState(false)
  const { mutate, status, error, data } = useSubmit()
  const { state, dispatch } = useGeneralUserState()

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<LoginInfo>({
    defaultValues: {},
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })

  // Password: '@@88Abba'
  // Username: 'lui'

  const handleLogin = (credentials: Credentials) => {
    setLoading(true)
    mutate(credentials)
  }

  useEffect(() => {
    if (status === 'success') {
      setLoading(false)
      navigateTopage && navigation.navigate('Profile')
      dispatch({
        type: 'LOGIN',
        payload: data.user
      })
    }
    if (status === 'error') {
      setLoading(false)
    }
  }, [status, error, navigateTopage, navigation])

  return (
    <View style={AuthStyles.container}>
      <Controller
        name='username'
        defaultValue=''
        control={control}
        rules={{
          required: { value: true, message: 'Name is required' }
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            icon={
              <AntDesign
                name='user'
                size={24}
                color='rgba(255, 255, 255, 0.2)'
              />
            }
            labelStyle={AuthStyles.label}
            error={Boolean(errors?.username)}
            errorText={errors?.username?.message}
            onChangeText={(text) => onChange(text)}
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
            icon={
              <Entypo name='lock' size={24} color='rgba(255, 255, 255, 0.2)' />
            }
            containerStyle={AuthStyles.inputContainer}
            labelStyle={AuthStyles.label}
            error={Boolean(errors?.password)}
            errorText={errors?.password?.message}
            onChangeText={(text) => onChange(text)}
            value={value}
            label='Password'
            secureTextEntry={true}
          />
        )}
      />
      <View style={AuthStyles.btnHolder}>
        <TouchableOpacity>
          <TextDisplay styles={AuthStyles.forgotPassword}>
            Forgot Password?
          </TextDisplay>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <TextDisplay
            styles={[
              AuthStyles.forgotPassword,
              {
                color: 'gray'
              }
            ]}
          >
            Sign up
          </TextDisplay>
        </TouchableOpacity>
      </View>
      <Button
        onPress={handleSubmit(handleLogin)}
        title='Login'
        loading={loading}
      />
    </View>
  )
}

export default Login
