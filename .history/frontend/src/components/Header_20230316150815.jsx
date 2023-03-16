import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
    <div className="py-5 mx-5 border border-b-orange-50">
        <Link to="/">Support Desk</Link>
    </div>
    <hr className="border-gray-600 mx-5"/>
    </header>
  )
}

export default Header