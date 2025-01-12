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
    <main className="container mt-4">
      <h1>Sign Up</h1>
      <p className="text-danger">{message}</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="driverUserName" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="driverUserName"
            value={formData.driverUserName}
            name="driverUserName"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirm" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirm"
            value={formData.passwordConf}
            name="passwordConf"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="driverName" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="driverName"
            value={formData.driverName}
            name="driverName"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Number:
          </label>
          <input
            type="number"
            id="phone"
            value={formData.phone}
            name="phone"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="deliveryPrice" className="form-label">
            delivery Price:
          </label>
          <input
            type="number"
            id="deliveryPrice"
            value={formData.deliveryPrice}
            name="deliveryPrice"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <section>
          <button className="btn btn-primary" disabled={isFormInvalid()}>
            Sign Up
          </button>
          <Link to="/">
            <button className="btn btn-secondary">Cancel</button>
          </Link>
        </section>
      </form>
    </main>
  )
}

export default DriverSignup
