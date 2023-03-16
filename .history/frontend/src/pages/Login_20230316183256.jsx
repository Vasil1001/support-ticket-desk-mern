import { Card } from "@tremor/react"
import React from "react"

export default function Login() {
  const onChange = (e) => {}
  return (
    <div className="flex flex-col min-h-screen mx-auto items-center">
      <h1 className="font-bold text-4xl pt-5">Login</h1>
      <p className="text-gray-500 text-xl">Please create an account</p>
      <Card decoration="top" decorationColor="indigo" className=" max-w-md mt-3 shadow-md">

      <h1 className="font-bold text-4xl">Login</h1>
      <p className="text-gray-500 text-xl">Please create an account</p>
        <label className="block text-gray-600 text-sm font-bold mb-1 mt-3">
          Name
        </label>
        <input
          type="text"
          className="border-2 border-gray-300 p-2 rounded-md w-96 "
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
          className="border-2 border-gray-300 p-2 rounded-md w-96 "
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
          className="border-2 border-gray-300 p-2 rounded-md w-96 "
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Enter your name"
        />
      </Card>
    </div>
  )
}
