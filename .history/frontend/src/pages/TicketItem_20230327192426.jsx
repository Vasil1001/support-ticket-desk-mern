import React from "react"
import { Link } from "react-router-dom"

export default function TicketItem({ ticket }) {
  return (
    <div className="grid grid-cols-4 text-center mt-3 py-2 bg-gray-200 border shadow-sm border-gray-300 p-2 rounded-xl gap-20 text-lg">
      <div>{new Date(ticket.createdAt).toLocaleDateString("en-GB")}</div>
      <div>{ticket.product}</div>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <div className="border border-gray-600 rounded-md px-2 bg-white shadow-md"><Link to={`/ticket/${ticket._id}`}>View</Link></div>
      
    </div>
  )
}
