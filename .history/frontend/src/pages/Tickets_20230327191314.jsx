import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import { getTickets } from "../features/tickets/ticketSlice"
import TicketItem from "./TicketItem"

export default function Tickets() {
  const { tickets } = useSelector((state) => state.tickets)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch])

  if (!tickets) {
    return <Spinner />
    // {
    //   tickets.map((ticket, index) => (
    //     <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
    //       <div className="h-48 rounded-t dark:bg-gray-700"></div>
    //       <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
    //         <div className="w-full h-6 rounded dark:bg-gray-700"></div>
    //         <div className="w-full h-6 rounded dark:bg-gray-700"></div>
    //         <div className="w-3/4 h-6 rounded dark:bg-gray-700"></div>
    //       </div>
    //     </div>
    //   ))
    // }
  }

  return (
    <>
      <BackButton url="/" />
      <Card
          decoration="left"
          decorationColor="indigo"
          className="max-w-2xl mt-3 shadow-md"
        >
          <div className="grid grid-cols-3 gap-5 ">
            <div className="col-span-2">
              <h1 className="flex font-bold text-4xl gap-3">
                Create a new ticket
              </h1>
              <p className="text-gray-600 text-lg">
                Fill out details about your issue or bug
              </p>
            </div>
            <div className="col-span-1">
              <input
                className="border-2 text-md text-gray-600 border-gray-300 p-1 px-2 rounded-md w-full mb-2"
                type="form-control"
                value={name}
                disabled
              />
              <input
                className="border-2 text-md text-gray-600 border-gray-300 p-1 px-1 rounded-md w-full mb-3"
                type="form-control"
                value={email}
                disabled
              />
            </div>
          </div>
          <hr className="my-2 border-gray-400" />
          <form className="flex flex-col" onSubmit={onSubmit}>
            <label htmlFor="product" className="block text-gray-800 mb-1">
              Product
            </label>
            <select
              name="product"
              className="border-2 border-gray-600 p-2 rounded-md w-full"
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option disabled="disabled">Select a product</option>

              <option value="iPhone">iPhone</option>
              <option value="MacBook Pro">MacBook Pro</option>
              <option value="iMac">iMac</option>
              <option value="iPad">iPad</option>
            </select>

            <label className="block text-gray-800 mt-5 mb-1" htmlFor="name">
              Description
            </label>
            <textarea
              className="border-2 border-gray-600 p-2 rounded-md w-full"
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Please describe your issue here"
              cols="10"
              rows="6"
            ></textarea>

            <label className="mt-5" htmlFor="name">
              Ticket By
            </label>
            <div className="flex gap-5">
              <input
                className="border-2 border-gray-300 p-2 rounded-md w-full mb-3"
                type="form-control"
                value={name}
                disabled
              />
              <input
                className="border-2 border-gray-300 p-2 rounded-md w-full mb-3"
                type="form-control"
                value={email}
                disabled
              />
            </div>

            <button className="w-lg text-white px-3 p-2 border-2 border-slate-700 bg-green-700 rounded-md mt-3">
              Create
            </button>
          </form>
        </Card>
      <div className="flex flex-col mx-auto bg-white rounded-sm p-4 justify-between mt-14 w-6/12">
        <p className="text-3xl font-bold mb-10">Tickets</p>
        <div className="grid grid-cols-4 text-center border-2 border-gray-600 mb-4 bg-gray-300 p-2 rounded-xl gap-20 text-lg">
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div>Option</div>
        </div>
        <div className="text-center">
          {tickets.map((ticket) => (
            <TicketItem key={ticket._id} ticket={ticket} />
          ))}
        </div>
      </div>
    </>
  )
}
