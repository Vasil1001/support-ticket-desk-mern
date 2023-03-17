import React from "react"
import { Link } from "react-router-dom"
import
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mx-auto items-center mt-24">
      <h1 className="font-bold text-4xl pt-5">What do you need help with?</h1>
      <p className="font-bold text-3xl pt-5">
        Please choose from the options below
      </p>
      <Link to="/new-ticket"></Link>
    </div>
  )
}