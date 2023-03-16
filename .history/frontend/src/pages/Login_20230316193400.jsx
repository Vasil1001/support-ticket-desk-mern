import React, { useState } from "react"
import { FaUser } from "react-icons/fa"
import { Card, Text } from "@tremor/react"
import {toast} from "react-toastify"

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password,  } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(!password){
        toast.error("Passwords do not match")

    }
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
        <p className="text-gray-500 text-lg">Please login to continue</p>
        <form onSubmit={onSubmit}>

          <label className="block font-bold text-gray-600 mb-1">Email</label>
          <input
            type="text"
            className="border-2 border-gray-300 p-2 rounded-md w-full mb-3"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter an email"
            required
          />

          <label className="block font-bold text-gray-600 mb-1">Password2</label>
          <input
            type="text"
            className="border-2 border-gray-300 p-2 rounded-md w-full mb-3"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Enter a password"
            required
          />

          
          <button className="w-full text-white px-3 p-2 bg-indigo-700 rounded-md mt-2">
            Register
          </button>

          <div className="relative flex py-3 items-center">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="flex-shrink mx-4 text-2xl ">OR</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          <button className="w-full text-white px-3 p-2 bg-green-700 rounded-md">
            Login
          </button>
        </form>
      </Card>
    </div>
  )
}
