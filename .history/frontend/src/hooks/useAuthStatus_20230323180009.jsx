import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const useAuthStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [checkAuthStatus, setCheckAuthStatus] = useState(true)
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
    return setCheckAuthStatus(false) // ? status is checked, no need to check again
  }, [user]) // ? Run whenever user changes

  return isAuthenticated
}
