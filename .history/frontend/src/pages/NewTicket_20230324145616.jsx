import React from 'react'
import { useSelector } from 'react-redux'

function NewTicket() {
  const {user} = useSelector((state) => state.auth) // ? GET USER FROM REDUX STORE

  const [name] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [product, setProduct] = useState(user.product)
  const [description, setDescription] = useState(user.description)
  
  return (
    <section>
    <h1>Create New Ticket</h1>
    <p>Please fill out the form below to create a new ticket</p>

    <section>
      <div className="form-group">
        <label htmlFor="name">Customer Name</label>;
        <input type="form-control" value={name} disabled />
      </div>
    </section>
    </section>
  )
}

export default NewTicket