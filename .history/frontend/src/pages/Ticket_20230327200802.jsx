import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BackButton from '../components/BackButton'

export default function Ticket() {
    const {} = useSelector((state) => state.tickets)
    const {dispatch} =  useDispatch()

    if(!ticket) {
        return <div></div>
    }
  return (
    <div>
    <BackButton/>
    Ticket</div>
  )
}
