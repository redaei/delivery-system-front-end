import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoutes = () => {
  const [admin, setAdmin] = useState(
    localStorage.getItem('role') === 'admin' ? true : null
  )
  return admin ? <Outlet /> : <Navigate to="/" />
}

export default AdminRoutes
