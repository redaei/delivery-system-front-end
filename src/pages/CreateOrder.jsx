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
  const [driver, setDriver] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
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
      console.log('submited: ', formData)

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
    <main>
      <h1>New order</h1>
      <p style={{ color: 'red' }}>{message}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Package description:</label>
          <input
            type="text"
            id="description"
            value={formData.description}
            name="description"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="driverId">Choose a driver:</label>
          <select
            id="driverId"
            name="driverId"
            value={formData.driverId}
            onChange={handleChange}
          >
            <option value=""> </option>
            {drivers.map((driver) => (
              <option
                id="driverId"
                name="driverId"
                key={driver._id}
                value={driver._id}
              >
                {driver.driverName} - BD{driver.deliveryPrice}
              </option>
            ))}
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
