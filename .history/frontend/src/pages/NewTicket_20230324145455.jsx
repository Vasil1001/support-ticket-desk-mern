import React from 'react'
import { useSelector } from 'react-redux'

function NewTicket() {
  const {user} = useSelector((state) => state.auth)
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [product, setProduct] = useState(user.product)

  const [description, setDescription] = useState(user.description)
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)

  return (
    <div>NewTicket</div>
  )
}

export default NewTicket