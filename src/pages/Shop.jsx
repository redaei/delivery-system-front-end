import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

const Shop = ({ orders, getOrders }) => {
  useEffect(() => {
    getOrders()
  }, [])

  return (
    <>
      <h2>Shop Page:</h2>
      <h3>{orders.length}</h3>
      <Link to="/order/createOrder">
        <button>New Order</button>
      </Link>

      <Tabs>
        <TabList>
          <Tab>Pending</Tab>
          <Tab>Accepted</Tab>
          <Tab>Out for delivery</Tab>
          <Tab>Delivered</Tab>
          <Tab>Rejected</Tab>
        </TabList>

        <TabPanel>
          <h2>Tab: In Progress</h2>
          {orders.map(
            (order) =>
              order.orderStatus === 'Pending' && (
                <div key={order._id}>
                  <h3>{order.orderNumber}</h3>
                  <p>{order.description}</p>
                  <p>{order.shopId.shopUserName}</p>
                  <p>{order.orderStatus}</p>
                </div>
              )
          )}
        </TabPanel>
        <TabPanel>
          <h2>Tab: Accepted</h2>
          {orders.map(
            (order) =>
              order.orderStatus === 'Accepted' && (
                <div key={order._id}>
                  <h3>{order.orderNumber}</h3>
                  <p>{order.description}</p>
                  <p>{order.shopId.shopUserName}</p>
                  <p>{order.orderStatus}</p>
                </div>
              )
          )}
        </TabPanel>
        <TabPanel>
          <h2>Tab: Out for delivery</h2>
          {orders.map(
            (order) =>
              order.orderStatus === 'Out for delivery' && (
                <div key={order._id}>
                  <h3>{order.orderNumber}</h3>
                  <p>{order.description}</p>
                  <p>{order.shopId.shopUserName}</p>
                  <p>{order.orderStatus}</p>
                </div>
              )
          )}
        </TabPanel>
        <TabPanel>
          <h2>Tab: Delivered</h2>
          {orders.map(
            (order) =>
              order.orderStatus === 'Delivered' && (
                <div key={order._id}>
                  <h3>{order.orderNumber}</h3>
                  <p>{order.description}</p>
                  <p>{order.shopId.shopUserName}</p>
                  <p>{order.orderStatus}</p>
                </div>
              )
          )}
        </TabPanel>
        <TabPanel>
          <h2>Tab: Rejected</h2>
          {orders.map(
            (order) =>
              order.orderStatus === 'Rejected' && (
                <div key={order._id}>
                  <h3>{order.orderNumber}</h3>
                  <p>{order.description}</p>
                  <p>{order.shopId.shopUserName}</p>
                  <p>{order.orderStatus}</p>
                </div>
              )
          )}
        </TabPanel>
      </Tabs>
    </>
  )
}

export default Shop
