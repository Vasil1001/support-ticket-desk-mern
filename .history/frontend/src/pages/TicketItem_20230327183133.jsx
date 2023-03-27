import React from "react"
import { Link } from "react-router-dom"

export default function TicketItem({ ticket }) {
  return (
    <div className="flex justify-between p-3 gap-20">
      <div>{new Date(ticket.createdAt).toLocaleDateString("en-GB")}</div>
      <div>{ticket.product}</div>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <div><Link to={`/ticket/${ticket._id}`}>View</Link></div>
      
    </div>
  )
}
