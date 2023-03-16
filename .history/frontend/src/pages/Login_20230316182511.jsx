import React from "react"

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen mx-auto items-center rounded-3xl">
      <h1 className="font-bold text-4xl pt-5">Login</h1>
      <p className="text-gray-500 text-xl">Please create an account</p>
      <input type="text" className="form-control" id='name' value="" placeholder="Name" />

    </div>
  )
}
