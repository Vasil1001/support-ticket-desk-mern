import React from 'react'
import { useSelector } from 'react-redux'

export default function Ticket() {
    const {} = useSelector((state) => state.tickets)
  return (
    <div>
    Ticket</div>
  )
}
