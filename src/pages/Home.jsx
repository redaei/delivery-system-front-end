import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'

const Home = ({ role }) => {
  const navigate = useNavigate()
  if (role === 'Shop') {
    navigate('/shop')
  } else if (role === 'Driver') {
    navigate('/driver')
  }
  return (
    <>
      <Card userType="Shop" />
      <Card userType="Driver" />
    </>
  )
}
export default Home
