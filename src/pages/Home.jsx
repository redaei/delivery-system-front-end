import { Link } from 'react-router-dom'
import Card from '../components/Card'

const Home = ({ role }) => {
  return (
    <>
      {role ? (
        role === 'Admin' ? (
          <h3>Admin</h3>
        ) : (
          <Link to={`/${role.toLowerCase()}`}>Go to {role} Home Page</Link>
        )
      ) : (
        <>
          <Card userType="Shop" />
          <Card userType="Driver" />
        </>
      )}
    </>
  )
}
export default Home
