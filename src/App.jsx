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
import { useEffect, useState } from 'react'
import { getProfile, getShops } from './Services/userService'
import { getShop } from './Services/userService'
import { getDriver } from './Services/userService'

const App = () => {
  const [user, setUser] = useState(null)
  const [shops, setShops] = useState([])
  const getUserProfile = async () => {
    try {
      const data = await getProfile()
      setUser(data)
    } catch (error) {
      setUser(null)
      console.log(error)
    }
  }
  const logOut = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('role')
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
  //get shops list from getShop

  const getShopsList = async () => {
    try {
      const shopsList = await getShops()
      setShops(shopsList)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    //getUserProfile()
    getShopProfile()
    //getDriver()
    getShopsList()
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
          if (localStorage.getItem('role') === 'driver')(
          <Route path="/driver" element={<Driver shops={shops} />} />)
          <Route
            path="/auth/bananaSignin"
            element={<Signin getUserProfile={getUserProfile} />}
          />
          <Route
            path="/auth/bananaSignup"
            element={<Signup getUserProfile={getUserProfile} />}
          />
          <Route
            path="/shops/shopSignin"
            element={<ShopSignin getShopProfile={getShopProfile} />}
          />
          <Route
            path="/shops/shopSignup"
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
          <Route path="/logout" element={<Home logOut={logOut} />} />
        </Routes>
      </main>
    </>
  )
}

export default App
