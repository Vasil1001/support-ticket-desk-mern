import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
    <div className="py-5 border-bo">
        <Link to="/">Support Desk</Link>
    </div>
    </header>
  )
}

export default Header