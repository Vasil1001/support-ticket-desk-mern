import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
useState
useEffect
useSelector

export const useAuthStatus = () => { 
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const { user } = useSelector((state) => state.auth)
    useEffect(() => {
        if (user) {
        setIsAuthenticated(true)
        } else {
        setIsAuthenticated(false)
        }
    }, [user])
    return isAuthenticated
    }
