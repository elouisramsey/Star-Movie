export const initialState = {
  time: '',
  theatre: '',
  date: '',
  resolution: '',
  movieName: '',
  selectedSeat: '',
  moviePoster: ''
}

export type SelectedMovieProps = {
  time: string
  theatre: string
  date: string
  resolution: string
  movieName: string
  selectedSeat: string
  moviePoster: string
}

export type Action =
  | { type: 'addTime'; payload: string }
  | { type: 'addTheatre'; payload: string }
  | { type: 'addDate'; payload: string }
  | { type: 'addResolution'; payload: string }
  | { type: 'addMovieName'; payload: string }
  | { type: 'addSelectedSeats'; payload: string }
  | { type: 'addMoviePoster'; payload: string }
  | { type: 'reset' }

export interface MovieProviderProps {
  children: React.ReactNode
}

export type ContextType = {
  state: SelectedMovieProps
  dispatch: React.Dispatch<Action>
}
