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
      <BackButton to="/tickets" />
      Ticket ID: {ticket.id}
      <span className="text-sm text-gray-500">{}</span>
    </div>
  )
}
