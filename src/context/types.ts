import { Seat } from 'screens/Tickets/Seats/types'

export interface Extra {
  id: string
  quantity: number
}

export interface State {
  seats: Seat[]
  extras: Extra[]
}

export type Action =
  | { type: 'addTicket'; payload: { id: string } }
  | { type: 'addExtra'; payload: { id: string } }
  | { type: 'decreaseExtra'; payload: { id: string } }
  | { type: 'resetTicket' }
