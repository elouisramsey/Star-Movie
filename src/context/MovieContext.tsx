import { createContext, useContext, useReducer } from 'react'
import { cinemaRows, extrasData } from 'screens/Tickets/Seats/FakeData'
import { Seat } from 'screens/Tickets/Seats/types'

type Extra = {
  id: string
  quantity: number
  name: string
  price: number
  image: any
}

type State = {
  seats: Seat[]
  extras: Extra[]
}

const initialState: State = {
  // @ts-ignore
  seats: cinemaRows,
  extras: extrasData
}

type Action =
  | { type: 'addTicket'; payload: { id: string } }
  | { type: 'addExtra'; payload: { id: string } }
  | { type: 'decreaseExtra'; payload: { id: string } }
  | { type: 'resetTicket' }

function ticketReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'addTicket': {
      const { id } = action.payload
      const findSeat = state.seats.find((seat) => seat.id === id)

      if (findSeat) {
        return {
          ...state,
          seats: state.seats.map((seat) => {
            if (seat.id === id) {
              return {
                ...seat,
                selected: !seat.selected,
                available: !seat.available
              }
            }
            return seat
          })
        }
      }
      break
    }

    case 'addExtra': {
      const { id } = action.payload
      const findExtra = state.extras.find((extra) => extra.id === id)

      if (findExtra) {
        return {
          ...state,
          extras: state.extras.map((extra) => {
            if (extra.id === id) {
              return {
                ...extra,
                quantity: extra.quantity + 1
              }
            }
            return extra
          })
        }
      }
      break
    }

    case 'decreaseExtra': {
      const { id } = action.payload
      const findExtra = state.extras.find((extra) => extra.id === id)

      if (findExtra && findExtra.quantity > 0) {
        return {
          ...state,
          extras: state.extras.map((extra) => {
            if (extra.id === id) {
              return {
                ...extra,
                quantity: extra.quantity >= 1 ? extra.quantity - 1 : 0
              }
            }
            return extra
          })
        }
      }
      break
    }

    case 'resetTicket':
      return initialState

    default:
      return state
  }

  return state
}

type TicketContextValue = {
  state: State
  dispatch: React.Dispatch<Action>
}

export const TicketContext = createContext<TicketContextValue>({
  state: initialState,
  dispatch: () => {}
})

interface TicketProviderProps {
  children: React.ReactNode
}

export const TicketProvider: React.FC<TicketProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(ticketReducer, initialState)

  return (
    <TicketContext.Provider value={{ state, dispatch }}>
      {children}
    </TicketContext.Provider>
  )
}

export const useGeneralSeatState = () => {
  const context = useContext(TicketContext)
  if (context === undefined) {
    throw new Error('useGeneralState must be used in a context provider')
  }
  return context
}
