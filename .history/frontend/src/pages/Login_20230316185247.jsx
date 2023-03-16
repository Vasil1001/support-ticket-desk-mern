import { Card } from "@tremor/react"
import React from "react"
import { FaUser } from "react-icons/fa"
import { Button } from "@tremor/react";
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
        <p className="text-gray-500 text-lg">Please login to your account</p>

        <input
          type="text"
          className="border-2 border-gray-300 p-2 rounded-md w-full "
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Enter your name"
        />


        <input
          type="text"
          className="border-2 border-gray-300 p-2 rounded-md w-full"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Enter your name"
        />

        <input
          type="text"
          className="border-2 border-gray-300 p-2 rounded-md w-full"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Enter your name"
        />

        <button className="w-full text-white px-3 p-2 bg-indigo-500 rounded-md mt-3">Submit</button>
      </Card>
    </div>
  )
}
