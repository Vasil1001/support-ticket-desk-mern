import React from "react"
import { useDispatch, useSelector } from "react-redux"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"

export default function Ticket() {
  const { ticket } = useSelector((state) => state.tickets)
  const { dispatch } = useDispatch()

  if (!ticket) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }
  return (
    <div>
      <BackButton />
      Ticket
    </div>
  )
}
