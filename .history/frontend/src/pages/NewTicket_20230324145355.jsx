import React from 'react'
import { useSelector } from 'react-redux'

function NewTicket() {
  const {user} = useSelector((state) => state.auth)
  const [name, setName] = useState(user.name)
  const [name, setName] = useState(user.email)
  return (
    <div>NewTicket</div>
  )
}

export default NewTicket