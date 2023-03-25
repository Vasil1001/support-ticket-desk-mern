import React from "react"
import { FaArrowCircleLeft } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function BackButton({ url }) {
  return (
    <Link to={url} className="flex align-baseline items-center gap-2">
      <FaArrowCircleLeft className="text-xl" /> Back
    </Link>
  )
}
