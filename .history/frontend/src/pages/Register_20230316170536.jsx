import React, { useState } from "react"
import 
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
      <h1>Register</h1>
      <form action="">Form</form>
    </div>
  )
}
