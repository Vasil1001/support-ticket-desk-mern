import React from "react"
import { Link } from "react-router-dom"

export default function TicketItem({ ticket }) {
  return ( 
    <div className="grid grid-cols-4 text-center flex-flow:column wrap justify-between mt-3 py-2 bg-gray-200 border shadow-sm border-gray-300 p-2 rounded-md text-lg">
      <div className="text-base">{new Date(ticket.createdAt).toLocaleDateString("en-GB")}</div>
      <div>{ticket.product}</div>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <Link to={`/ticket/${ticket._id}`}>
      <div className="border ml-3 mr-1 border-gray-600 rounded-md px-1 py-1 bg-white align-text-middle text-sm shadow-md">View</div></Link>
      
    </div>
  )
}
