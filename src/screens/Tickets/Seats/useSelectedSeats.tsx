import { useState } from 'react'
import { Seat } from './types'

type Props = {}

const useSelectedSeats = (props: Props) => {
  const [selectedSeats, setSelectedSeats] = useState<any>([])

  const toggle = (seat: Seat) => {
    setSelectedSeats(
      selectedSeats.map((seatArr: Seat) => {
        if (seatArr.id === seat.id) {
          seatArr.selected = !seatArr.selected
          seatArr.available = !seatArr.available
        }
        return seatArr
      })
    )
    //   dispatch(addTicket(seat))
  }

  return {
    selectedSeats,
    toggle
  }
}

export default useSelectedSeats
