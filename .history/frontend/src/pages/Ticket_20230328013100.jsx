import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import { getTicket, closeTicket } from "../features/tickets/ticketSlice"

export default function Ticket() {
  const { ticket } = useSelector((state) => state.tickets)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { ticketId } = useParams()


  // This function is called when the user clicks the "Close Ticket" button on
  // the ticket page. It dispatches the closeTicket action, which sends a
  // request to the server to close the ticket. If the request is successful,
  // the user is navigated to the "/tickets" route and a success toast is
  // displayed. If the request fails, a failure toast is displayed.
  const onTicketClose = () => {
    dispatch(closeTicket(ticketId))
      .unwrap()
      .then(() => {
        toast.success("Ticket closed!")
        navigate("/tickets")
      })
      .catch(toast.error)
  }



  const onTicketClose = () => {
    dispatch(closeTicket(ticketId))
      .unwrap()
      .then(() => {
        toast.success("Ticket closed!")
        navigate("/tickets")
      })
      .catch(toast.error)
  }

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
      Ticket ID: {ticket._id}
      <span className={`status status-${ticket.status}`}>{ticket.status}</span>
      <div className="ticket-desc">
        <h3>Description of Issue</h3>
        <p>{ticket.description}</p>
        <p>{ticket.product}</p>
      </div>
      <p>Date submitted: {new Date(ticket.createdAt).toDateString()}</p>
      {ticket.status !== "closed" && (
        <button className="w-full text-white px-3 p-2 mt-10 bg-indigo-700 rounded-md" onClick={onTicketClose}>
          Close Ticket
        </button>
      )}
    </div>
  )
}
