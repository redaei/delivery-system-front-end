import {
  Navigate,
  redirect,
  Route,
  Routes,
  useNavigate
} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Nav from './components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Driver from './pages/Driver'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ShopSignin from './pages/ShopSignin'
import ShopSignup from './pages/ShopSignup'
import DriverSignup from './pages/DriverSignup'
import DriverSignin from './pages/DriverSignin'
import CreateOrder from './pages/CreateOrder'
import { useEffect, useState } from 'react'
import { getProfile, getShops, getDrivers } from './Services/userService'
import { getShop } from './Services/userService'
import { getDriver } from './Services/userService'

import { getOrder } from './Services/userService'
import Shop from './pages/Shop'
import ShopRoutes from './components/ShopRoutes'
import Logout from './components/Logout'
import DriverRoutes from './components/DriverRoutes'

const App = () => {
  const [user, setUser] = useState(null)
  const [order, setOrder] = useState(null)
  const [role, setRole] = useState(null)
  const [shops, setShops] = useState([])
  const [drivers, setDrivers] = useState([])

  const getUserProfile = async () => {
    try {
      const data = await getProfile()
      setUser(data)
    } catch (error) {
      setUser(null)
      console.log(error)
    }
  }
  const getOrders = async () => {
    try {
      const data = await getOrder()
      setUser(data)
    } catch (error) {
      setUser(null)
      console.log(error)
    }
  }

  const getShopProfile = async () => {
    try {
      const data = await getShop()
      setUser(data)
    } catch (error) {
      setUser(null)
      console.log(error)
    }
  }

  const getDriverProfile = async () => {
    try {
      const data = await getDriver()
      setUser(data)
    } catch (error) {
      setUser(null)
      console.log(error)
    }
  }

  const getShopsList = async () => {
    try {
      const shopsList = await getShops()
      setShops(shopsList)
    } catch (error) {
      console.log(error)
    }
  }
  const getDriverList = async () => {
    try {
      const driversList = await getDrivers()
      setDrivers(driversList)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserProfile()
    getShopProfile()
    getDriver()
    getShopsList()
    getOrder()
    getDriverList()
  }, [])
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <h2>Delivery App</h2>
        <h3>{role === null ? 'Not Logged in!' : role}</h3>

        <Routes>
          <Route path="/" element={<Home role={role} />} />

          <Route
            path="/auth/bananaSignin"
            element={<Signin setRole={setRole} />}
          />
          <Route
            path="/auth/bananaSignup"
            element={<Signup getUserProfile={getUserProfile} />}
          />
          <Route
            path="/shop/shopSignin"
            element={<ShopSignin setRole={setRole} />}
          />
          <Route
            path="/shop/shopSignup"
            element={<ShopSignup getShopProfile={getShopProfile} />}
          />
          <Route
            path="/driver/driverSignin"
            element={<DriverSignin setRole={setRole} />}
          />
          <Route
            path="/driver/driverSignup"
            element={<DriverSignup getDriverProfile={getDriverProfile} />}
          />
          <Route path="/" element={<DriverRoutes role={role} />}>
            <Route path="/driver" element={<Driver shops={shops} />} />
          </Route>
          <Route path="/" element={<ShopRoutes role={role} />}>
            <Route
              path="/shop"
              element={<Shop shops={shops} drivers={drivers} />}
            />
            <Route
              path="/order/createOrder"
              element={
                <CreateOrder
                  getOrders={getOrders}
                  drivers={drivers}
                  user={user}
                />
              }
            />
          </Route>
          <Route
            path="/logout"
            element={<Logout setRole={setRole} setUser={setUser} />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App
