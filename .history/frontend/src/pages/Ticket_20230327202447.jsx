import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import { getTicket } from "../features/tickets/ticketSlice"

export default function Ticket() {
  const { ticket } = useSelector((state) => state.tickets)
  
  const dispatch  = useDispatch()
  const navigate = useNavigate()

  const {ticketId} = useParams()

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
      <BackButton to="/tickets" />
      Ticket ID: {ticket.id}
      <span className={`status status-${ticket.status}`}>{ticket.status}</span>

      <div className='ticket-desc'>
          <h3>Description of Issue</h3>
          <p>{ticket.description}</p>
        </div>
    </div>
  )
}
