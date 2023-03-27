import React from "react"
import { useDispatch, useSelector } from "react-redux"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import { getTicket } from "../features/tickets/ticketSlice"

export default function Ticket() {
  const { ticket } = useSelector((state) => state.tickets)
  const { dispatch } = useDispatch()
  const params = useParams()

  useEffect(() => {
    dispatch(getTicket(ticketId)).unwrap().catch(toast.error)
  }, [ticket])

  if (!ticket) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }
  return (
    <div>
      <BackButton />
      Ticket
    </div>
  )
}
