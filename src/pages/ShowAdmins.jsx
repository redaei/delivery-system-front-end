import { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import View from './view'
const ShowAdmin = ({ drivers, shops, setEdit }) => {
  const navigate = useNavigate()

  const onClick = (e) => {
    e.preventDefault()
    console.log(e.target.id)
    console.log(e.target.className)
    if (e.target.className === 'driver') {
      drivers.drivers.forEach((driver) => {
        if (driver._id === e.target.id) {
          setEdit(driver)
          navigate('/editDriver')
        }
      })
    } else {
      shops.forEach((shop) => {
        if (shop._id === e.target.id) {
          setEdit(shop)
          navigate('/editShop')
        }
      })
    }

    // setEdit(e)
  }
  useEffect(() => {}, [])

  console.log(drivers.drivers)
  console.log(shops)

  return (
    <>
      <h2>Admin Page:</h2>
      <h3>{/*orders.length*/}</h3>

      <Tabs>
        <TabList>
          <Tab>Drivers</Tab>
          <Tab>Shops</Tab>
        </TabList>

        <TabPanel>
          <h2>Drivers</h2>
          {drivers.drivers.map((driver) => (
            <div key={driver._id}>
              <Link to="/editDriver" onClick={onClick}>
                <h3 className="driver" id={driver._id}>
                  {driver.driverName}
                </h3>
              </Link>
            </div>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Shops</h2>
          {shops.map((shop) => (
            <div key={shop._id}>
              <Link to="/editShop" onClick={onClick}>
                <h3 className="shop" id={shop._id}>
                  {shop.shopUserName}
                </h3>
              </Link>
            </div>
          ))}
        </TabPanel>
      </Tabs>
    </>
  )
}

export default ShowAdmin
