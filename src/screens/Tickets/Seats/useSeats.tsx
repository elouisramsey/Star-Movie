import React, { useCallback, useEffect, useState } from 'react'
import { cinemaRows } from './FakeData'
import { Seat } from './types'

type Props = {}

const useSeats = (props: Props) => {
  const [selectedSeats, setSelectedSeats] = useState<any>([])

  const [rows, setRows] = React.useState('')

  const toggleSeat = useCallback(
    (seat: Seat) => {
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
    },
    [selectedSeats]
  )

  //   useEffect(() => {
  //     const acc = [] as any[]
  //     const row = items.filter((seat: any) => {
  //       if (seat.selected) {
  //         const row = acc.push(seat.id)
  //         return row
  //       }
  //     })
  //     setRows(acc.join(', '))
  //     return () => {}
  //   }, [selectedSeats])

  useEffect(() => {
    // @ts-ignore
    setSelectedSeats(cinemaRows)
    return () => {}
  }, [])

  return {
    toggleSeat,
    rows,
    selectedSeats
  }
}

export default useSeats
