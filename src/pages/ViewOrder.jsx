import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { updateOrderStatus } from '../Services/userService'

const ViewOrder = ({ order, role }) => {
  const [nextStatus, setNextStatus] = useState()
  const navigate = useNavigate()

  if (!order) {
    return <div>Loading...</div>
  }

  useEffect(() => {
    if (order.orderStatus === 'Pending') setNextStatus('Accepted')
    else if (order.orderStatus === 'Accepted') setNextStatus('Out for delivery')
    else {
      setNextStatus('Delivered')
    }
  }, [])

  const handleStatusUpdate = async (action) => {
    try {
      const updatedOrder = await updateOrderStatus(order._id, action.nextStatus)
      const path = `/${role.toLowerCase()}`
      navigate(path)
    } catch (error) {
      console.error('Error updating order status:', error)
    }
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h3>Order Details</h3>
        </div>
        <div className="card-body">
          <h5 className="card-title">Order Number: {order.orderNumber}</h5>
          <p className="card-text">
            Order Date: {new Date(order.orderDate).toLocaleDateString()}
          </p>
          <p className="card-text">Order Status: {order.orderStatus}</p>
          <p className="card-text">
            Pick Time:{' '}
            {order.pickTime
              ? new Date(order.pickTime).toLocaleTimeString()
              : 'N/A'}
          </p>
          <p className="card-text">
            Drop Time:{' '}
            {order.dropTime
              ? new Date(order.dropTime).toLocaleTimeString()
              : 'N/A'}
          </p>
          <p className="card-text">Description: {order.description}</p>
          <p className="card-text">Delivery Price: BD{order.deliveryPrice}</p>
          {role === 'Driver' &&
            order.orderStatus !== 'Delivered' &&
            order.orderStatus !== 'Rejected' && (
              <>
                <button
                  className="btn btn-success mt-3"
                  onClick={() => handleStatusUpdate({ nextStatus })}
                >
                  {nextStatus}
                </button>
                <button
                  className="btn btn-danger mt-3 ms-2"
                  onClick={() => handleStatusUpdate({ nextStatus: 'Rejected' })}
                >
                  Reject
                </button>
              </>
            )}
        </div>
      </div>
    </div>
  )
}

export default ViewOrder
