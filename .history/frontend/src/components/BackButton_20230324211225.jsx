import React from "react"
import { FaArrowCircleLeft } from "react-icons/fa"
import { Link } from "react-router-dom"
 const BackButton = ({ url }) => {
  return (
    <Link to={url} className="flex align-baseline items-center gap-2 p-2 border-2 border-gray-500 w-sm">
      <FaArrowCircleLeft className="text-xl" /> Back
    </Link>
  )
}

export default BackButton