import React, { useState } from "react"
import { FaUser } from "react-icons/fa"
import { Card, Text } from "@tremor/react"
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
      <Card className="w-lg max-w-lg mx-auto" decoration="top" decorationColor="indigo">
        <h1 className="flex gap-3 font-bold text-4xl pt-5">
          <FaUser /> Register
        </h1>
        <Text>Please create an account</Text>
        <p>Please create an account</p>
        <form action="">Form</form>
      </Card>
    </div>
  )
}
