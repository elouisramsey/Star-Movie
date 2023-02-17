import React, { Dispatch, createContext, useContext, useReducer } from 'react'

interface User {
  name: string
  email: string
}

interface UserState {
  isLoggedIn: boolean
  user: User | null
  settings: Record<string, unknown>
}

interface Action {
  type: string
  payload?: any
}

type UserDispatch = Dispatch<Action>

const initialState: UserState = {
  isLoggedIn: false,
  user: null,
  settings: {}
}

const userReducer = (state: UserState, action: Action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      }
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null
      }
    case 'UPDATE_SETTINGS':
      return {
        ...state,
        settings: action.payload
      }
    default:
      return state
  }
}

type UserContextValue = {
  state: UserState
  dispatch: UserDispatch
}

interface UserProviderProps {
  children: React.ReactNode
}

export const UserContext = createContext<UserContextValue>({
  state: initialState,
  dispatch: () => {}
})

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export const useGeneralUserState = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useGeneralUserState must be used in a context provider')
  }
  return context
}
