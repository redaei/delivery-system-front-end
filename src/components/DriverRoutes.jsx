import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const DriverRoutes = ({ role }) => {
  const [driver, setDriver] = useState(role === 'Driver' ? true : null)
  return driver ? <Outlet /> : <Navigate to="/" />
}

export default DriverRoutes
