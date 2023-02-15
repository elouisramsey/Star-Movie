import { createContext, useContext, useReducer } from 'react'
import { selectedMovieReducer } from './SMReducer'
import { ContextType, MovieProviderProps, initialState } from './types'

export const SelectedMovieContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => null
})

export const SelectedMovieProvider: React.FC<MovieProviderProps> = ({
  children
}) => {
  const [state, dispatch] = useReducer(selectedMovieReducer, initialState)

  return (
    <SelectedMovieContext.Provider value={{ state, dispatch }}>
      {children}
    </SelectedMovieContext.Provider>
  )
}

export const useGeneralTicketState = () => {
  const context = useContext(SelectedMovieContext)
  if (context === undefined) {
    throw new Error('useGeneralState must be used in a context provider')
  }
  return context
}
