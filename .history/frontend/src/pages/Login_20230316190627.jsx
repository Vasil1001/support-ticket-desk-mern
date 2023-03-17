import { Card } from "@tremor/react"
import React, { useState } from "react"
import { FaUser } from "react-icons/fa"
import { Button } from "@tremor/react"
export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
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
          <FaUser /> Login
        </h1>
        <p className="text-gray-500 text-lg">Please login to your account</p>

        <label className="block font-bold text-gray-600 mt-3 mb-1">Name</label>
        <input
          type="text"
          className="border-2 border-gray-300 p-2 rounded-md w-full mb-3"
          id="email"
          value={email}
          onChange={onChange}
          placeholder="Enter your email"
        />

        <label className="block font-bold text-gray-600 mb-1">Password</label>
        <input
          type="text"
          className="border-2 border-gray-300 p-2 rounded-md w-full mb-3"
          id="password"
          value={password}
          onChange={onChange}
          placeholder="Enter your password"
        />

        <button className="w-full text-white px-3 p-2 bg-green-700 rounded-md mt-2">
          Login
        </button>

        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="flex-shrink mx-4 text-2xl ">OR</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        <button className="w-full text-white px-3 p-2 bg-green-700 rounded-md">
          Register
        </button>
      </Card>
    </div>
  )
}