import React from 'react'
import { useSelector } from 'react-redux'

function NewTicket() {
  const {user} = useSelector((state) => state.auth) // ? GET USER FROM REDUX STORE

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [product, setProduct] = useState(user.product)
  const [description, setDescription] = useState(user.description)
  
  return (
    <div>NewTicket</div>
  )
}

export default NewTicket