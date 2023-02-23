import { API, Auth } from 'aws-amplify'
import { getUser } from 'graphql/queries'
import { useMutation } from 'react-query'
import { Credentials, GetUserResult, SubmitResult } from './types'

function submit(credentials: Credentials): Promise<SubmitResult> {
  return Auth.signIn(credentials.username, credentials.password).then(
    async (user) => {
      const response = await API.graphql<GetUserResult>({
        query: getUser,
        variables: { id: user.attributes.sub }
      })

      // @ts-ignore
      const data = response.data.getUser
      return { user: data }
    }
  )
}

export function useSubmit() {
  return useMutation(submit)
}
