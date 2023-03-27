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
    return <Spinner />
  }

  return (
    <>
        <BackButton url='/' />
        <div className="flex flex-col mx-auto items-center mt-14">
            Tickets
            {tickets.map((ticket) => ())}
        </div>
    </>
  )
}
