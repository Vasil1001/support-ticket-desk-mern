import React from "react"
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="flex py-5 mx-5 gap-5">
      <div>
        <Link to="/">Support Desk</Link>
      </div>
      <div>
        <Link to="/">Login</Link>
      </div>
      <div>
        <Link to="/">Register</Link>
      </div>
    </header>
  )
}

export default Header