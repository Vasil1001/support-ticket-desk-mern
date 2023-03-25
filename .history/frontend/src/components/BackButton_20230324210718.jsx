import React from "react"
import { FaArrowCircleLeft } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function BackButton({ url }) {
  return (
    <Link to={url} className="">
      <FaArrowCircleLeft className="text-2xl" /> Back
    </Link>
  )
}
