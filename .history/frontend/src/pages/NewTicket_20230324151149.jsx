import React, { useState } from "react"
import { useSelector } from "react-redux"

function NewTicket() {
  const { user } = useSelector((state) => state.auth) // ? GET USER FROM REDUX STORE

  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [product, setProduct] = useState(user.product)
  const [description, setDescription] = useState(user.description)

  return (
    <section>
      <h1>Create New Ticket</h1>
      <p>Please fill out the form below to create a new ticket</p>

      <section>
        <div className="form-group">
          <label htmlFor="name">Customer Name</label>;
          <input type="form-control" value={name} disabled />
        </div>

        <div className="form-group">
          <label htmlFor="name">Customer Email</label>;
          <input type="form-control" value={name} disabled />
        </div>
      </section>

      <div className="flex flex-col min-h-screen mx-auto items-center mt-24">
      <Card
        decoration="top"
        decorationColor="indigo"
        className="max-w-md mt-3 shadow-md"
      >
        <h1 className="flex font-bold text-4xl gap-3">
          <FaSignInAlt /> Login
        </h1>
        <p className="text-gray-500 text-lg">Please login to continue</p>
        <form onSubmit={onSubmit}>
          <label className="block font-bold text-gray-600 mt-3 mb-1">
            Email
          </label>
          <input
            type="text"
            className="border-2 border-gray-300 p-2 rounded-md w-full mb-3"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter your email"
            required
          />

          
          </div>

          <button className="w-full text-white px-3 p-2 bg-green-700 rounded-md mt-2">
            Login
          </button>

          <div className="relative flex py-3 items-center">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="flex-shrink mx-4 text-2xl ">OR</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          <button className="w-full text-white px-3 p-2 bg-indigo-700 rounded-md ">
            Register
          </button>
        </form>
      </Card>
    </div>
    </section>
  )
}

export default NewTicket
