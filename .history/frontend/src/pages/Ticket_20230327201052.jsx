import React from "react"
import { useDispatch, useSelector } from "react-redux"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import { getTicket } from "../features/tickets/ticketSlice"

export default function Ticket() {
  const { ticket } = useSelector((state) => state.tickets)
  
  const dispatch  = useDispatch()
  const navigate = useNavigate()
  
  const ticketId = useParams()

  useEffect(() => {
    dispatch(getTicket(ticketId)).unwrap().catch(toast.error)
  }, [ticketId, dispatch])

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
