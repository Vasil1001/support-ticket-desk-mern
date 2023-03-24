import React from "react"
import { Navigate } from "react-router-dom"
import { useAuthStatus } from "../hooks/useAuthStatus"
import Spinner from "./Spinner"

const PrivateRoute = () => {
  const { isLoggedIn, checkAuthStatus } = useAuthStatus()
  
  if (checkAuthStatus) {
    return <Spinner />
  }

  return isLoggedIn ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRoute
