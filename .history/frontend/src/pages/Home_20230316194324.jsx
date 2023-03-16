import React from "react"
import { Link } from "react-router-dom"
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa"
import { Card } from "@tremor/react"
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mx-auto items-center mt-24">
      <h1 className="font-bold text-4xl pt-5">What do you need help with?</h1>
      <p className="font-bold text-3xl pt-5">
        Please choose from the options below
      </p>

      <Card
        decoration="top"
        decorationColor="indigo"
        className="max-w-x mt-3 shadow-md"
      ></Card>
      <div className="max-w-md w-full">
        <Link to="/new-ticket">
          <div className="flex w-full">
            <FaQuestionCircle /> Create New Ticket
          </div>
        </Link>

        <Link to="/tickets">
          <div className="flex">
            <FaTicketAlt /> View My Tickets
          </div>
        </Link>
      </div>
    </div>
  )
}
