export interface Seat {
  available: boolean
  onPress?: () => void
  vip: boolean
  booked: boolean
  id: String
  selected: boolean
  opacity: number
  amount?: number
}

export interface ROW {
  [key: string]: Seat[]
}

export interface Seats {
  ROW_A: Seat[]
  ROW_B: Seat[]
  ROW_C: Seat[]
  ROW_D: Seat[]
  ROW_E: Seat[]
  ROW_F: Seat[]
  ROW_G: Seat[]
  ROW_H: Seat[]
  ROW_I: Seat[]
}
