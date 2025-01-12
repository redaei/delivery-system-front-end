import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { shopSignIn } from '../Services/authService'

const initialFormData = {
  shopUserName: '',
  password: ''
}
const ShopSignin = ({ setRole }) => {
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState(initialFormData)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await shopSignIn(formData)
      //await getShopProfile()
      setRole('Shop')

      setFormData(initialFormData)
      navigate('/shop')
    } catch (error) {
      setMessage(error.response?.data?.error)
    }
  }

  return (
    <main className="container mt-4">
      <h1>Log In</h1>
      <p className="text-danger">{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="shopUserName" className="form-label">
            Username:
          </label>
          <input
            type="text"
            autoComplete="off"
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
            autoComplete="off"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <section>
          <button className="btn btn-primary">Log In</button>
          <Link to="/">
            <button className="btn btn-secondary">Cancel</button>
          </Link>
        </section>
      </form>
      <Link to="/shop/shopSignup">Create Shop Profile</Link>
    </main>
  )
}

export default ShopSignin
