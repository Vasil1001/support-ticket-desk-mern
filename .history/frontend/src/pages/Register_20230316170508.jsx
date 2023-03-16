import React, { useState } from "react"

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formData
  return( 
  <div>
    <h1></h1>
  </div>)
}
