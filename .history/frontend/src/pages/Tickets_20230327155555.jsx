import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTickets } from '../features/tickets/ticketSlice'

export default function Tickets() {
    const tickets = useSelector(){}
    const [] = useDispatch()
    getTickets
  return (
    <div>Tickets</div>
  )
}
