import { Action, SelectedMovieProps, initialState } from './types'

export function selectedMovieReducer(
  state: SelectedMovieProps,
  action: Action
): SelectedMovieProps {
  switch (action.type) {
    case 'addTime':
      return { ...state, time: action.payload }
    case 'addTheatre':
      return { ...state, theatre: action.payload }
    case 'addDate':
      return { ...state, date: action.payload }
    case 'addResolution':
      return { ...state, resolution: action.payload }
    case 'addMovieName':
      return { ...state, movieName: action.payload }
    case 'addSelectedSeats':
      return { ...state, selectedSeat: action.payload }
    case 'addMoviePoster':
      return { ...state, moviePoster: action.payload }
    case 'reset':
      return initialState
    default:
      throw new Error('Unsupported action type')
  }
}
