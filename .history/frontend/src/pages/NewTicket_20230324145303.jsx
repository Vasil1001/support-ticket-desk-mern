import React from 'react'
import { useSelector } from 'react-redux'

function NewTicket() {
  const {user} = useSelector((state) => state.auth)
  return (
    <div>NewTicket</div>
  )
}

export default NewTicket