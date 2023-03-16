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
      <Card className="max-w-lg mx-auto" decoration="left" decorationColor="indigo">
        <h1 className="flex gap-3 font-bold text-4xl pt-5">
          <FaUser /> Register
        </h1>
        <Text>Please create an account</Text>
        <p className="text-slate-500">Please create an account</p>
        <form action="">Form</form>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="flex-shrink mx-4 text-2xl ">OR</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>
      </Card>
      <Card></Card>
    </div>
  )
}
