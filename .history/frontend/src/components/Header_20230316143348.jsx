import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
    <div className="logo">
        <Link to="/"></Link>
    </div>
    </header>
  )
}

export default Header