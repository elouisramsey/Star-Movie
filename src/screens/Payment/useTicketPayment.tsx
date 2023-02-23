import { API, Auth } from 'aws-amplify'
import { useGeneralTicketState } from 'context/SelectedMovie/TicketContext'
import { createTickets, updateUser } from 'graphql/mutations'
import { getUser } from 'graphql/queries'
import { useState } from 'react'
import uuid from 'react-native-uuid'

type State = {
  movieName: string
  moviePoster: string
  theatre: string
  time: string
  selectedSeat: string[]
  date: string
}

type Ticket = {
  id: string
  name: string
  date: string
  time: string
  theatre: string
  Image: string
  seat: string[]
  reference: string
}

type User = {
  id: string
  email: string
  name: string
  points: number
  watched: number
  Image: string
  tickets: string[] | null
}

type createTicketsResponse = {
  data: {
    createTickets: Ticket
  }
}

type getUserResponse = {
  data: {
    getUser: User
  }
}

type updateUserResponse = {
  data: {
    updateUser: User
  }
}

type status = 'error' | 'success' | ''

type ReturnType = {
  createAndAssignTicket: () => Promise<void>
  loading: boolean
  showModal: boolean
  setShowModal: (val: boolean) => void
  subText: string
  status: status
}

export const useTicket = (): ReturnType => {
  const { state } = useGeneralTicketState()
  const [loading, setLoading] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const { movieName, moviePoster, theatre, time, selectedSeat, date } = state
  const [status, setStatus] = useState<status>('')
  const [subText, setsubText] = useState<string>('')

  const createAndAssignTicket = async (): Promise<void> => {
    const isUserAvailable = await Auth.currentAuthenticatedUser()
    try {
      const createTicketResponse = (await API.graphql({
        query: createTickets,
        variables: {
          input: {
            id: uuid.v4().slice(0, 18),
            name: movieName,
            date: date,
            time: time,
            theatre: theatre,
            Image: moviePoster,
            seat: selectedSeat,
            reference: uuid.v4().slice(0, 7)
          }
        }
      })) as createTicketsResponse

      if (createTicketResponse?.data) {
        const { createTickets } = createTicketResponse.data
        const { id } = createTickets

        const getUserFromDb = (await API.graphql({
          query: getUser,
          variables: {
            id: isUserAvailable.attributes.sub
          }
        })) as getUserResponse

        if (getUserFromDb?.data) {
          const { data } = getUserFromDb
          const { getUser } = data
          const { name, points, tickets, email } = getUser

          const updateUserResponse = (await API.graphql({
            query: updateUser,
            variables: {
              input: {
                id: isUserAvailable.attributes.sub,
                email: email,
                name: name,
                points: points + 3,
                watched: 0,
                Image: '',
                tickets: tickets === null ? [id] : [...tickets, id]
              }
            }
          })) as updateUserResponse

          if (updateUserResponse) {
            setLoading(false)
            setsubText('Ticket successfully purchased!')
            setShowModal(true)
            setStatus('success')
          }
        }
      }
    } catch (error) {
      setsubText('There was an error updating user details')
      setLoading(false)
      setStatus('error')
    }
  }

  return {
    createAndAssignTicket,
    loading,
    showModal,
    setShowModal,
    status,
    subText
  }
}
