import React from "react"
import { Link } from "react-router-dom"

export default function TicketItem({ ticket }) {
  return (
    <div className="grid grid-cols-4 text-center mb-4 bg-gray-300 p-2 rounded-xl gap-20 text-lg">
      <div>{new Date(ticket.createdAt).toLocaleDateString("en-GB")}</div>
      <div>{ticket.product}</div>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <div><Link to={`/ticket/${ticket._id}`}>View</Link></div>
      
    </div>
  )
}
