import React from "react"
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="flex py-4 justify-between mx-5 gap-5">
      <div className="hover:bg-[#2b3137] px-3 py-2 rounded-md">
        <Link to="/">Support Desk</Link>
      </div>
      <div className="flex gap-2">
        <div className="hover:bg-slate-500 px-3 py-2 rounded-md">
          <Link to="/">Login</Link>
        </div>
        <div className="hover:bg-slate-500 px-3 py-2 rounded-md">
          <Link to="/">Register</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
