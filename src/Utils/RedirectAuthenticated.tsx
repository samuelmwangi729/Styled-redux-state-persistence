import React, { ReactNode } from 'react'
import { useAppSelector } from '../redux/hooks'
import { checkAuth } from '../redux/userSlice'
import { Navigate, useLocation } from 'react-router-dom'

const RedirectAuthenticated: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { pathname } = useLocation()
    const isAuthenticated = useAppSelector(checkAuth)
    if (isAuthenticated && (pathname === "/login" || pathname === "/register")) {
        return <Navigate to={"/dashboard"} replace />
    }
    return children
}

export default RedirectAuthenticated
