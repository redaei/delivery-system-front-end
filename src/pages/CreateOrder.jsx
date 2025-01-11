import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createOrder } from '../Services/authService'
import Driver from './Driver'

const initialFormData = {
  description: '',
  shopId: '',
  driverId: ''
}
const CreateOrder = ({ getOrders, drivers, user }) => {
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState(initialFormData)
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
      await createOrder(formData)
      await getOrders()
      setFormData(initialFormData)
      navigate('/')
    } catch (error) {
      setMessage(error.response?.data?.error)
      console.log(error)
    }
  }

  return (
    <main>
      <h1>New order</h1>
      <p style={{ color: 'red' }}>{message}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">description:</label>
          <input
            type="text"
            id="description"
            value={formData.description}
            name="description"
            onChange={handleChange}
          />
        </div>
        {/* <div>
          <label htmlFor="shopId" hidden={true}>
            user ID
          </label>
          <input
            type="text"
            id="shopId"
            value={user._id}
            name="shopId"
            onChange={handleChange}
            hidden={true}
          />
        </div>*/}
        <div>
          <label htmlFor="driverId">choose a driver</label>

          <select onChange={handleChange} name="driverId">
                       {' '}
            {drivers.map((driver) => (
              <option id="driverId" key={driver._id} value={driver._id}>
                                {driver.driverName}             {' '}
              </option>
            ))}
                     {' '}
          </select>
        </div>

        <section>
          <button disabled={isFormInvalid()}>Create Order</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </section>
      </form>
    </main>
  )
}
export default CreateOrder
