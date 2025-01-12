import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { shopSignUp } from '../Services/authService'

const initialFormData = {
  shopUserName: '',
  password: '',
  passwordConf: '',
  location: '',
  phone: ''
}
const ShopSignup = ({ getShopProfile }) => {
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState(initialFormData)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await shopSignUp(formData)
      await getShopProfile()
      setFormData(initialFormData)
      navigate('/')
    } catch (error) {
      setMessage(error.response?.data?.error)
      console.log(error)
    }
  }

  const isFormInvalid = () => {
    return !(
      formData.shopUserName &&
      formData.password &&
      formData.password === formData.passwordConf &&
      formData.location &&
      formData.phone
    )
  }

  return (
    <main className="container mt-4">
      <h1>Sign Up</h1>
      <p className="text-danger">{message}</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="shopUserName" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="shopUserName"
            value={formData.shopUserName}
            name="shopUserName"
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
          <label htmlFor="location" className="form-label">
            location:
          </label>
          <input
            type="text"
            id="location"
            value={formData.location}
            name="location"
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

export default ShopSignup
