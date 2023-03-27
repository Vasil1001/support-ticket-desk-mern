import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import { getTickets } from "../features/tickets/ticketSlice"

export default function Tickets() {
  const { tickets } = useSelector((state) => state.tickets)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch])

  if (!tickets) {
    // return <Spinner />
    {tickets.map((ticket, index) => (
        <TicketItem key={ticket._id} ticket={ticket} />
    ))}
  }

  return (
    <>
        <BackButton url='/' />
        <div className="flex flex-col mx-auto items-center mt-14">
            Tickets
            {tickets.map((ticket) => (
                <TicketItem key={ticket._id} ticket={ticket} />
            ))}
        </div>
        <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
	
</div>
    </>
  )
}
