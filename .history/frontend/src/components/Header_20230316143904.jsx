import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
    <div className="py-5  border-b-orange-50">
        <Link to="/">Support Desk</Link>
    </div>
    <div className="divide-y-4 divide-slate-100/25"></div>
    </header>
  )
}

export default Header