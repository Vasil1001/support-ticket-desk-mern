import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
    <div className="py-5  border-b-orange-50">
        <Link to="/">Support Desk</Link>
    </div>
    <hr/>
    </header>
  )
}

export default Header