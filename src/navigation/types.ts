export type RootStackParamList = {
  Home: undefined
  Profile: { updateAuthState: (authState: boolean) => void }
  Tickets: undefined
  Notification: undefined
  MovieDetails: any
  SeatSelection: undefined
  Extra: undefined
  Payment: undefined
  Signup: undefined
  Login: undefined
}

export type ProfileStackParamList = {
  Profile: { updateAuthState: (authState: boolean) => void }
  Notification: undefined
  Signup: undefined
  Login: undefined
}
