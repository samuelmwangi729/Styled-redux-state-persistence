import React, { ReactNode } from 'react'
import { useAppSelector } from '../redux/hooks'
import { selectUser } from '../redux/userSlice'
import { Navigate } from 'react-router-dom'

const Protect: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { loggedIn } = useAppSelector(selectUser)
  if (!loggedIn) {
    return <Navigate to={"/"} replace />
  }
  return children
}

export default Protect
