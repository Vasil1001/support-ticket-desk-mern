import React from "react"
import { Link } from "react-router-dom"

export default function TicketItem({ ticket }) {
  return (
    <div className="flex">
      <div>{new Date(ticket.createdAt).toLocaleDateString("en-GB")}</div>
      <div>{ticket.product}</div>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <Link to={`/ticket/${ticket._id}`}>View</Link>
    </div>
  )
}
