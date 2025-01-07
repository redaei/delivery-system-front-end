import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { driverSignUp } from '../Services/authService'

const initialFormData = {
  driverUserName: '',
  password: '',
  passwordConf: '',
  driverName: '',
  phone: '',
  deliveryPrice: ''
}
const DriverSignup = ({ getDriverProfile }) => {
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState(initialFormData)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await driverSignUp(formData)
      await getDriverProfile()
      setFormData(initialFormData)
      navigate('/')
    } catch (error) {
      setMessage(error.response?.data?.error)
      console.log(error)
    }
  }

  const isFormInvalid = () => {
    return !(
      formData.driverUserName &&
      formData.password &&
      formData.password === formData.passwordConf &&
      formData.driverName &&
      formData.phone &&
      formData.deliveryPrice
    )
  }

  return (
    <main>
      <h1>Sign Up</h1>
      <p style={{ color: 'red' }}>{message}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="driverUserName">Username:</label>
          <input
            type="text"
            id="driverUserName"
            value={formData.driverUserName}
            name="driverUserName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirm">Confirm Password:</label>
          <input
            type="password"
            id="confirm"
            value={formData.passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="driverName">Name:</label>
          <input
            type="text"
            id="driverName"
            value={formData.driverName}
            name="driverName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Number:</label>
          <input
            type="number"
            id="phone"
            value={formData.phone}
            name="phone"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="deliveryPrice">delivery Price:</label>
          <input
            type="number"
            id="deliveryPrice"
            value={formData.deliveryPrice}
            name="deliveryPrice"
            onChange={handleChange}
          />
        </div>
        <section>
          <button disabled={isFormInvalid()}>Sign Up</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </section>
      </form>
    </main>
  )
}

export default DriverSignup
