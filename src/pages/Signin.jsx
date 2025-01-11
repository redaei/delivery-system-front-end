import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signIn } from '../Services/authService'

const initialFormData = {
  userName: '',
  password: ''
}
const Signin = ({ getUserProfile }) => {
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState(initialFormData)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signIn(formData)
      await getUserProfile()
      setFormData(initialFormData)
      navigate('/')
    } catch (error) {
      setMessage(error.response?.data?.error)
    }
  }

  return (
    <main>
      <h1>Log In</h1>
      <p style={{ color: 'red' }}>{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">Username:</label>
          <input
            type="text"
            autoComplete="off"
            id="userName"
            value={formData.username}
            name="userName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <section>
          <button>Log In</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </section>
      </form>
      <Link to="/auth/bananaSignup">Sign Up</Link>
    </main>
  )
}

export default Signin
