import React from 'react'
import {Navigate} from 'react-router-dom'
import {useAuthStatus} from '../hooks/useAuthStatus'

const PrivateRoute = () => {
    const {isLoggedIn, checkAuthStatus} = useAuthStatus()
    
  return (
    <div>
    
    </div>
  )
}

export default PrivateRoute