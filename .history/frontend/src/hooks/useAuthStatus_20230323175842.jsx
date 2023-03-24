import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const useAuthStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [checkAuthStatus, setCheckAuthStatus] = useState(true)

  const { user } = useSelector((state) => state.auth)
  useState
  useSelector

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [user])
  return isAuthenticated
}
