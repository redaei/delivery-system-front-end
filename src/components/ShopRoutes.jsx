import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ShopRoutes = ({ role }) => {
  const [shop, setShop] = useState(role == 'Shop' ? true : null)

  return shop ? <Outlet /> : <Navigate to="/" />
}

export default ShopRoutes
