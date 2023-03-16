import React from "react"
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="flex py-4 justify-between mx-5 gap-5">
      <Link to="/">
        <div className="hover:bg-slate-200 hover:shadow-sm font-bold px-3 py-2 rounded-md">
          Support Desk
        </div>
      </Link>
      <div className="flex gap-2">
        <Link to="/login">
          <div className="hover:shadow-2xl font-bold px-3 py-2 rounded-md">
            Login
          </div>
        </Link>

        <Link to="/register">
          <div className="hover:shadow-2xl font-bold px-3 py-2 rounded-md">
            Register
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
