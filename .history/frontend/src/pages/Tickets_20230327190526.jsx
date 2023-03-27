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
      <div className="flex flex-col mx-auto  mt-14 w-6/12">
        <p className="text-3xl font-bold mb-10">Tickets</p>
        <div className="grid grid-cols-4 text-center mb-4 bg-gray-300 p-2 rounded-xl gap-20 text-lg">
          <div>Date</div>
          <div>Product</div>
          <div className="">Status</div>
          <div>Option</div>
        </div>
        <div className="">
          {tickets.map((ticket) => (
            <TicketItem key={ticket._id} ticket={ticket} />
          ))}
        </div>
      </div>
    </>
  )
}
