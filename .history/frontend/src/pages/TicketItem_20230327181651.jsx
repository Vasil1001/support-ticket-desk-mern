import React from "react"
import { Link } from "react-router-dom"

export default function TicketItem({ ticket }) {
  return (
    <div className='ticket'>
      <div>{new Date(ticket.createdAt).toLocaleDateString()}</div>
      <div>{ticket.product}</div>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <Link to={`/ticket/${ticket._id}`}></Link>
    </div>
  )
}
