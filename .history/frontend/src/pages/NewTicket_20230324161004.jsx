import { Card } from "@tremor/react"
import React, { useState } from "react"
import { useSelector } from "react-redux"

function NewTicket() {
  const { user } = useSelector((state) => state.auth) // ? GET USER FROM REDUX STORE

  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [product, setProduct] = useState(user.product)
  const [description, setDescription] = useState(user.description)

  const onSubmit = (e) => {}
  return (
    <section>
      <div className="flex flex-col mx-auto items-center mt-24">
        <section>
          <h1 className="flex font-bold text-4xl gap-3 justify-center">
            Create a new ticket
          </h1>
          <p className="text-gray-600 text-lg mb-5">
            Please fill out the form below to create a new ticket
          </p>
          <div className="form-group">
            <label htmlFor="name">Customer Name</label>
            <input
              className="border-2 border-gray-300 p-2 rounded-md w-full mb-3"
              type="form-control"
              value={name}
              disabled
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Customer Email</label>
            <input
              className="border-2 border-gray-300 p-2 rounded-md w-full mb-3"
              type="form-control"
              value={email}
              disabled
            />
          </div>
        </section>
      </div>
      <div className="flex flex-col min-h-screen mx-auto items-center mt-24">
        <Card
          decoration="left"
          decorationColor="indigo"
          className="max-w-2xl mt-3 shadow-md"
        >
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2 ">
              <h1 className="flex font-bold text-4xl gap-3">
                Create a new ticket
              </h1>
              <p className="text-gray-600 text-lg">
                Please fill out the following ticket details
              </p>
            </div>
            <div className="col-span-1">
              <input
                className="border-2 border-gray-300 p-2  rounded-md w-full mb-3"
                type="form-control"
                value={name}
                disabled
              />
              <input
                className="border-2 border-gray-300 p-2  rounded-md w-full mb-3"
                type="form-control"
                value={email}
                disabled
              />
            </div>
          </div>
          <hr className="my-2 slate-500" />
          <form className="flex flex-col" onSubmit={onSubmit}>
            <label className="mt-5" htmlFor="name">
              Ticket By
            </label>
            <div className="flex gap-5">
              <input
                className="border-2 border-gray-300 p-2  rounded-md w-full mb-3"
                type="form-control"
                value={name}
                disabled
              />
              <input
                className="border-2 border-gray-300 p-2  rounded-md w-full mb-3"
                type="form-control"
                value={email}
                disabled
              />
            </div>
            <label
              htmlFor="product"
              className="block font-bold text-gray-600 mt-3 mb-1"
            >
              Product
            </label>
            <select
              name="product"
              className="border-2 border-gray-600 p-2  rounded-md w-full"
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value="iPhone">iPhone</option>
              <option value="MacBook Pro">MacBook Pro</option>
              <option value="iMac">iMac</option>
              <option value="iPad">iPad</option>
            </select>

            <label className="mt-5" htmlFor="name">
              Description
            </label>
            <textarea
              className="border-2 border-gray-600 p-2  rounded-md w-full"
              name="description"
              id="description"
              placeholder="Please describe your issue here"
              cols="10"
              rows="6"
            ></textarea>

            <label className="mt-5" htmlFor="name">
              Ticket By
            </label>
            <input
              className="border-2 border-gray-300 p-2  rounded-md w-full mb-3"
              type="form-control"
              value={name}
              disabled
            />

            <button className="w-full text-white px-3 p-2 bg-green-700 rounded-md mt-2">
              Create
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
