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
    <main>
      <h1>Sign Up</h1>
      <p style={{ color: 'red' }}>{message}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="shopUserName">Username:</label>
          <input
            type="text"
            id="shopUserName"
            value={formData.shopUserName}
            name="shopUserName"
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
          <label htmlFor="location">location:</label>
          <input
            type="text"
            id="location"
            value={formData.location}
            name="location"
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

export default ShopSignup
