import { Link } from 'react-router-dom'

const Card = ({ userType }) => {
  const link = `/${userType.toLowerCase()}/${userType.toLowerCase()}Signin`
  return (
    <Link to={link}>
      <div className="card">
        <h1>{userType}</h1>
      </div>
    </Link>
  )
}

export default Card
