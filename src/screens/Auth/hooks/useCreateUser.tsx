import { GraphQLResult } from '@aws-amplify/api-graphql'
import { API, Auth } from 'aws-amplify'
import { createUser } from 'graphql/mutations'
import { Alert } from 'react-native'
import { useMutation } from 'react-query'

export type SignupInfo = {
  username: string
  password: string
  email: string
  name: string
  code?: string
}

type CreateUserResponse = {
  createUser: {
    id: string
    email: string
    name: string
    points: number
    watched: number
    Image: string
    tickets: []
  }
}

const useCreateUser = ({
  setConfirmSignup
}: {
  setConfirmSignup: (val: boolean) => void
}) => {
  return useMutation<GraphQLResult<CreateUserResponse>, Error, SignupInfo>(
    async (
      userData: SignupInfo
    ): Promise<GraphQLResult<CreateUserResponse>> => {
      const user = await Auth.signUp({
        username: userData.username,
        password: userData.password,
        attributes: {
          email: userData.email,
          name: userData.name
        }
      })

      const response = (await API.graphql({
        query: createUser,
        variables: {
          input: {
            id: user.userSub,
            email: userData.email,
            name: userData.name,
            points: 0,
            watched: 0,
            Image: '',
            tickets: []
          }
        }
      })) as GraphQLResult<CreateUserResponse>

      if (response.data?.createUser) {
        setConfirmSignup(true)
        return response
      } else {
        throw new Error('An error occured')
      }
    },
    {
      onSuccess: () => {
        setConfirmSignup(true)
      }
    }
  )
}

export const confirmUser = async ({
  username,
  authCode,
  navigateTo
}: {
  username: string
  authCode: string
  navigateTo: any
}) => {
  await Auth.confirmSignUp(username, authCode)
    .then((res) => {
      navigateTo()
    })
    .catch((err) => {
      Alert.alert('There was an error confirming your code.')
    })
}

export default useCreateUser
