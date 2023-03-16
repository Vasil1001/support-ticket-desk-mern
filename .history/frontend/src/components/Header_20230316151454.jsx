import React from "react"
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="flex py-5 mx-5">
      <div className=">
        <Link to="/">Support Desk</Link>
      </div>
      <div>
        <Link to="/">Support Desk</Link>
      </div>
      <div>
        <Link to="/">Support Desk</Link>
      </div>
      <hr className="border-gray-600 mx-5" />
    </header>
  )
}

export default Header
