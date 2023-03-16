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
      <div className="max-w-xl w-full mb-6">
        <Link to="/new-ticket">
          <Card
            decoration="top"
            decorationColor="black"
            className="flex w-full font-bold text-xl rounded-md justify-center gap-3 items-center p-3 "
          >
            <FaQuestionCircle /> Create New Ticket
          </Card>
        </Link>
      </div>

      <div className="max-w-xl w-full mb-6">
      <Link to="/tickets">
          <Card
            decoration="top"
            decorationColor="indigo"
            className="flex w-full font-bold text-xl rounded-md justify-center gap-3 items-center p-3 "
          >
            <FaTicketAlt /> View My Tickets
          </Card>
        </Link>
      </div>
      <div className="max-w-xl w-full">
        <Link to="/new-ticket">
          <div className="flex w-full font-bold text-xl rounded-md justify-center gap-3 items-center p-3 bg-slate-300">
            <FaQuestionCircle /> Create New Ticket
          </div>
        </Link>

        
      </div>
    </div>
  )
}
