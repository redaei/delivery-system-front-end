import { Route, Routes } from 'react-router-dom'
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
import { getProfile } from './Services/userService'
import { getShop } from './Services/userService'
import { getDriver } from './Services/userService'

import { getOrder } from './Services/userService'


const App = () => {
  const [user, setUser] = useState(null)
  const [order, setOrder] = useState(null)

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
  const logOut = () => {
    localStorage.removeItem('authToken')
    setUser(null)
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

  useEffect(() => {
    getUserProfile()
    getShopProfile()
    getDriver()
    getOrder()
  }, [])
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <h1>Delivery App</h1>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/driver" element={<Driver />} />

          <Route
            path="/auth/bananaSignin"
            element={<Signin getUserProfile={getUserProfile} />}
          />
          <Route
            path="/auth/bananaSignup"
            element={<Signup getUserProfile={getUserProfile} />}
          />
          <Route
            path="/shop/shopSignin"
            element={<ShopSignin getShopProfile={getShopProfile} />}
          />
          <Route
            path="/shop/shopSignup"
            element={<ShopSignup getShopProfile={getShopProfile} />}
          />

          <Route
            path="/driver/driverSignin"
            element={<DriverSignin getDriverProfile={getDriverProfile} />}
          />
          <Route
            path="/driver/driverSignup"
            element={<DriverSignup getDriverProfile={getDriverProfile} />}
          />
          <Route
            path="/order/createOrder"
            element={<CreateOrder getOrders={getOrders} />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App
