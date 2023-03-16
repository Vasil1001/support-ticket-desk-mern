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

  const onChange = (e) => {
    setFormData((prev) => ({
        
    }))
  }

  return (
    <div className="flex flex-col min-h-screen mx-auto items-center mt-24">
      <Card
        decoration="top"
        decorationColor="indigo"
        className="max-w-md mt-3 shadow-md"
      >
        <h1 className="flex font-bold text-4xl gap-3">
          <FaUser /> Register
        </h1>
        <p className="text-gray-500 text-lg">Please create an account</p>
        <form action="">
          <label className="block text-gray-600 text-sm font-bold mb-1 mt-3">
            Email
          </label>
          <input
            type="text"
            className="border-2 border-gray-300 p-2 rounded-md w-full "
            id="name"
            value={name}
            onChange={onChange}
            placeholder="Enter your name"
          />

          <label className="block text-gray-600 text-sm font-bold mb-1 mt-5">
            Password
          </label>
          <input
            type="text"
            className="border-2 border-gray-300 p-2 rounded-md w-full"
            id="name"
            value={name}
            onChange={onChange}
            placeholder="Enter your name"
          />
        </form>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="flex-shrink mx-4 text-2xl ">OR</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>
      </Card>
    </div>
  )
}
