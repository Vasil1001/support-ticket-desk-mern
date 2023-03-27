import React from "react"
import { Link } from "react-router-dom"

export default function TicketItem({ ticket }) {
  return (
    <div className="grid grid-cols-4 text-center mt-3 py-2 bg-gray-200 border shadow-sm border-gray-300 p-2 rounded-xl text-lg">
      <div className="text-bas">{new Date(ticket.createdAt).toLocaleDateString("en-GB")}</div>
      <div>{ticket.product}</div>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <div className="border border-gray-600 rounded-sm px-2 py-1 bg-white align-text-middle text-sm shadow-md"><Link to={`/ticket/${ticket._id}`}>View</Link></div>
      
    </div>
  )
}
