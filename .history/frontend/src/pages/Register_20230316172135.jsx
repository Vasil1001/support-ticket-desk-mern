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
    <h1 className="font-bold text-4xl pt-5"><FaUser/> Register</h1>
    <section></section>
      <h1><FaUser/>Register</h1>
      <form action="">Form</form>
    </div>
  )
}
