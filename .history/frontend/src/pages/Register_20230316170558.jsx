import React, { useState } from "react"
import {FaUser} from 'react-icons/fa'

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  })

  const { name, email, password, password2 } = formData
  return (
    <div>
    <section></section>
      <h1><FaUser></FaUser>Register</h1>
      <form action="">Form</form>
    </div>
  )
}
