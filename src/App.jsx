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
import ShowAdmin from './pages/ShowAdmins'
import View from './pages/view'
import DriverView from './pages/DriverView'
import {
  getAllDrivers,
  getAllShops,
  getOrdersList,
  getProfile
} from './Services/userService'

import { getShop } from './Services/userService'
import { getDriver } from './Services/userService'
import Shop from './pages/Shop'
import ShopRoutes from './components/ShopRoutes'
import DriverRoutes from './components/DriverRoutes'
import AdminRoutes from './components/AdminRoutes'
import ViewOrder from './pages/ViewOrder'

const App = () => {
  const [user, setUser] = useState(null)
  const [order, setOrder] = useState(null)
  const [orders, setOrders] = useState([])
  const [role, setRole] = useState(null)
  const [shops, setShops] = useState([])
  const [drivers, setDrivers] = useState([])
  const [edit, setEdit] = useState(null)

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
      const ordersList = await getOrdersList(role)
      setOrders(ordersList)
    } catch (error) {
      setOrder(null)
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
      const shopsList = await getAllShops()
      setShops(shopsList)
    } catch (error) {
      console.log(error)
    }
  }

  const getDriversList = async () => {
    try {
      const driversList = await getAllDrivers()

      setDrivers(driversList)
    } catch (error) {
      console.log(error)
    }
  }

  const logOut = () => {
    localStorage.clear()
    setRole(null)
    setUser(null)
  }

  useEffect(() => {
    // getOrders()
    // getShopsList()
    // getDriversList()
    // getOrders()
    // getOrdersList()
  }, [])

  return (
    <>
      <header>
        <Nav role={role} handleLogOut={logOut} />
      </header>
      <main>
        <h4>Delivery App</h4>
        <p>{role === null ? 'Not Logged in!' : role}</p>

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
            element={
              <ShopSignup
                getShopProfile={getShopProfile}
                getOrders={getOrders}
              />
            }
          />
          <Route
            path="/driver/driverSignin"
            element={<DriverSignin setRole={setRole} />}
          />
          <Route
            path="/driver/driverSignup"
            element={<DriverSignup getDriverProfile={getDriverProfile} />}
          />
          <Route path="/" element={<AdminRoutes role={role} />}>
            <Route
              path="/admins"
              element={
                <ShowAdmin
                  getDriversList={getDriversList}
                  getShopsList={getShopsList}
                  drivers={drivers}
                  shops={shops}
                  edit={edit}
                  setEdit={setEdit}
                />
              }
            />
          </Route>
          <Route path="/" element={<DriverRoutes role={role} />}>
            <Route
              path="/driver"
              element={
                <Driver
                  orders={orders}
                  getOrders={getOrders}
                  setOrder={setOrder}
                />
              }
            />
          </Route>
          <Route path="/" element={<ShopRoutes role={role} />}>
            <Route
              path="/shop"
              element={
                <Shop
                  orders={orders}
                  getOrders={getOrders}
                  setOrder={setOrder}
                />
              }
            />
            <Route
              path="/order/createOrder"
              element={
                <CreateOrder
                  drivers={drivers}
                  getDriversList={getDriversList}
                />
              }
            />
          </Route>
          <Route path="/editShop" element={<View edit={edit} />} />
          <Route path="/editDriver" element={<DriverView edit={edit} />} />
          <Route
            path="/order/:id"
            element={<ViewOrder order={order} role={role} />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App
