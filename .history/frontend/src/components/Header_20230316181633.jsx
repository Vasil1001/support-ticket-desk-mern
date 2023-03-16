import React from "react"
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

function Header() {
  return (
    <>
      <header className="flex py-4 justify-between mx-5 gap-5">
        <Link to="/">
          <div className="hover:bg-slate-400 hover:shadow-md font-bold px-3 py-2 rounded-md">
            Support Desk
          </div>
        </Link>
        <div className="flex gap-2">
          <Link to="/login">
            <div className="hover:bg-slate-400 hover:shadow-md font-bold px-3 py-2 rounded-md">
              Login
            </div>
          </Link>

          <Link to="/register">
            <div className="hover:bg-slate-400 hover:shadow-md font-bold px-3 py-2 rounded-md">
              Register
            </div>
          </Link>
        </div>
      </header>
      <hr className="border-gray-300 mx-5 mb-3" />
    </>
  )
}

export default Header
