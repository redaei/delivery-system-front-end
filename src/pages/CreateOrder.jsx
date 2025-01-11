import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createOrder } from '../Services/authService'

const initialFormData = {
  description: ''
}
const CreateOrder = () => {
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
      setFormData(initialFormData)
      navigate('/shop')
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
