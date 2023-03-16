import React from "react"
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="flex">
      
      <ul>
        <li>
          <Link to="/">Support Desk</Link>
        </li>
        <li>
          <Link to="/">Support Desk</Link>
        </li>
        <li>
          <Link to="/">Support Desk</Link>
        </li>
      </ul>
      <hr className="border-gray-600 mx-5" />
    </header>
  )
}

export default Header
