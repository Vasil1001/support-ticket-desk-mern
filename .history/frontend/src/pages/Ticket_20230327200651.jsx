import React from 'react'
import { useSelector } from 'react-redux'
import BackButton from '../components/BackButton'

export default function Ticket() {
    const {} = useSelector((state) => state.tickets)
  return (
    <div>
    <BackButton/>
    Ticket</div>
  )
}
