import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/Spinner'
import { getTickets } from '../features/tickets/ticketSlice'

export default function Tickets() {
    const {} = useSelector(){}
    const [] = useDispatch()
    getTickets
    Spinner
  return (
    <div>Tickets</div>
  )
}
