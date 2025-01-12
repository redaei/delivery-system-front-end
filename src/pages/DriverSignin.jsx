import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { driverSignIn } from '../Services/authService'

const initialFormData = {
  driverUserName: '',
  password: ''
}
const DriverSignin = ({ setRole }) => {
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState(initialFormData)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await driverSignIn(formData)
      //await getDriverProfile()
      setRole('Driver')
      setFormData(initialFormData)
      navigate('/driver')
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
          <label htmlFor="driverUserName" className="form-label">
            Username:
          </label>
          <input
            type="text"
            autoComplete="off"
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
      <Link to="/driver/driverSignup">Create Driver Profile</Link>
    </main>
  )
}

export default DriverSignin
