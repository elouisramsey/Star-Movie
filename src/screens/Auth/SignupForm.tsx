import Button from 'components/Button/Button'
import TextDisplay from 'components/TextDisplay/TextDisplay'
import Input from 'components/TextInput/TextInput'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { AuthStyles } from './styles'
import useCustomForm from './useCustomForm'

type Props = {
  navigation: any
  setUsername: (val: string) => void
}

type SignupInfo = {
  username: string
  password: string
  email: string
  name: string
  code?: string
}

const SignupForm = ({ navigation, setUsername }: Props) => {
  const { control, errors, handleSubmit, isSubmitting, Controller } =
    useCustomForm()

  return (
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
              onChange(text)
              setUsername(text)
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
          <TextDisplay
            styles={[
              AuthStyles.forgotPassword,
              {
                color: 'gray'
              }
            ]}
          >
            Login
          </TextDisplay>
        </TouchableOpacity>
      </View>

      <Button
        width='100%'
        onPress={handleSubmit}
        disabled={isSubmitting}
        title='Signup'
      />
    </>
  )
}

export default SignupForm
