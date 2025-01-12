import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

const Driver = ({ orders, getOrders, setOrder }) => {
  useEffect(() => {
    getOrders()
  }, [])
  return (
    <>
      <h3>Driver Page:</h3>
      <h5>total Orders: {orders.length}</h5>

      <Tabs>
        <TabList>
          <Tab>Pending</Tab>
          <Tab>Accepted</Tab>
          <Tab>Out for delivery</Tab>
          <Tab>Delivered</Tab>
          <Tab>Rejected</Tab>
        </TabList>

        <TabPanel>
          {orders.map(
            (order) =>
              order.orderStatus === 'Pending' && (
                <div key={order._id} className="card mb-3">
                  <div className="card-body">
                    <Link
                      to={`/order/${order.orderNumber}`}
                      onClick={() => setOrder(order)}
                    >
                      <h4 className="card-title">
                        Order Number: {order.orderNumber}
                      </h4>
                      <p className="card-text">
                        {' '}
                        Description: {order.description}
                      </p>
                      <p className="card-text">
                        Shop Name: {order.shopId.shopUserName}
                      </p>
                      <p className="card-text">
                        Order status: {order.orderStatus}
                      </p>
                    </Link>
                  </div>
                </div>
              )
          )}
        </TabPanel>
        <TabPanel>
          {orders.map(
            (order) =>
              order.orderStatus === 'Accepted' && (
                <div key={order._id}>
                  <Link
                    to={`/order/${order._id}`}
                    onClick={() => setOrder(order)}
                  >
                    <h4 className="card-title">
                      Order Number: {order.orderNumber}
                    </h4>
                    <p className="card-text">
                      {' '}
                      Description: {order.description}
                    </p>
                    <p className="card-text">
                      Shop Name: {order.shopId.shopUserName}
                    </p>
                    <p className="card-text">
                      Order status: {order.orderStatus}
                    </p>
                  </Link>
                </div>
              )
          )}
        </TabPanel>
        <TabPanel>
          {orders.map(
            (order) =>
              order.orderStatus === 'Out for delivery' && (
                <div key={order._id}>
                  <Link
                    to={`/order/${order._id}`}
                    onClick={() => setOrder(order)}
                  >
                    <h4 className="card-title">
                      Order Number: {order.orderNumber}
                    </h4>
                    <p className="card-text">
                      {' '}
                      Description: {order.description}
                    </p>
                    <p className="card-text">
                      Shop Name: {order.shopId.shopUserName}
                    </p>
                    <p className="card-text">
                      Order status: {order.orderStatus}
                    </p>
                  </Link>
                </div>
              )
          )}
        </TabPanel>
        <TabPanel>
          {orders.map(
            (order) =>
              order.orderStatus === 'Delivered' && (
                <div key={order._id}>
                  <Link
                    to={`/order/${order._id}`}
                    onClick={() => setOrder(order)}
                  >
                    <h4 className="card-title">
                      Order Number: {order.orderNumber}
                    </h4>
                    <p className="card-text">
                      {' '}
                      Description: {order.description}
                    </p>
                    <p className="card-text">
                      Shop Name: {order.shopId.shopUserName}
                    </p>
                    <p className="card-text">
                      Order status: {order.orderStatus}
                    </p>
                  </Link>
                </div>
              )
          )}
        </TabPanel>
        <TabPanel>
          {orders.map(
            (order) =>
              order.orderStatus === 'Rejected' && (
                <div key={order._id}>
                  <Link
                    to={`/order/${order._id}`}
                    onClick={() => setOrder(order)}
                  >
                    <h4 className="card-title">
                      Order Number: {order.orderNumber}
                    </h4>
                    <p className="card-text">
                      {' '}
                      Description: {order.description}
                    </p>
                    <p className="card-text">
                      Shop Name: {order.shopId.shopUserName}
                    </p>
                    <p className="card-text">
                      Order status: {order.orderStatus}
                    </p>
                  </Link>
                </div>
              )
          )}
        </TabPanel>
      </Tabs>
    </>
  )
}

export default Driver
