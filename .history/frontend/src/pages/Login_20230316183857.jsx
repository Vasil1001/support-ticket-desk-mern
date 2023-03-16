import { Card } from "@tremor/react"
import React from "react"
import { FaUser } from "react-icons/fa"

export default function Login() {
  const onChange = (e) => {}
  return (
    <div className="flex flex-col min-h-screen mx-auto items-center mt-24">
      <Card
        decoration="top"
        decorationColor="indigo"
        className="max-w-md mt-3 shadow-md"
      >
        <h1 className="flex font-bold text-4xl gap-3">
          <FaUser /> Login{" "}
        </h1>
        <p className="text-gray-500 text-xl">Please login to your account</p>
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

        <label className="block text-gray-600 text-sm font-bold mb-1 mt-5">
          Name
        </label>
        <input
          type="text"
          className="border-2 border-gray-300 p-2 rounded-md w-full"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Enter your name"
        />
      </Card>
    </div>
  )
}
