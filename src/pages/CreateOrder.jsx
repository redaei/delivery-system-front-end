import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createOrder } from '../Services/authService'

const initialFormData = {
  description: '',
  shopId: '',
  driverId: ''
}

const CreateOrder = ({ drivers, getDriversList }) => {
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState(initialFormData)
  //const [driver, setDriver] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const isFormInvalid = () => {
    return !formData.description
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      formData.shopId = localStorage.getItem('userId')

      if (!formData.driverId) {
        return
      }

      const selectedDriver = drivers.find(
        (driver) => driver._id === formData.driverId
      )
      if (selectedDriver) {
        formData.deliveryPrice = selectedDriver.deliveryPrice
      }

      await createOrder(formData)
      setFormData(initialFormData)
      navigate('/shop')
    } catch (error) {
      setMessage(error.response?.data?.error)
      console.log(error)
    }
  }

  useEffect(() => {
    getDriversList()
  }, [])

  return (
    <main className="container mt-4">
      <h3>New Order</h3>
      <p className="text-danger">{message}</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Package Description:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="driverId" className="form-label">
            Choose a Driver:
          </label>
          <select
            id="driverId"
            name="driverId"
            value={formData.driverId}
            onChange={handleChange}
            className="form-select"
          >
            <option key="0" value="">
              {''}
            </option>
            {drivers.map((driver) => (
              <option key={driver._id} value={driver._id}>
                {driver.driverName} - BD{driver.deliveryPrice}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!formData.description || !formData.driverId}
        >
          Submit
        </button>
      </form>
    </main>
  )
}
export default CreateOrder
