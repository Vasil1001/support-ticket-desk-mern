import React from 'react'
import { useSelector } from 'react-redux'

function NewTicket() {
  const {user} = useSelector((state) => state.auth) // ? GET USER FROM REDUX STORE

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [product, setProduct] = useState(user.product)
  const [description, setDescription] = useState(user.description)
  
  return (
    <section>
    <h1>Create New Ticket</h1>
    <p></p>
    </section>
  )
}

export default NewTicket