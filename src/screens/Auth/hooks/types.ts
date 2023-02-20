interface User {
  id: string
  // add other properties here
}

interface GetUserResult {
  getUser: User
}

interface Credentials {
  username: string
  password: string
}

interface SubmitResult {
  user: User
}

export { User, GetUserResult, Credentials, SubmitResult }
