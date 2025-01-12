import { Link } from 'react-router-dom'

const Card = ({ userType }) => {
  const link = `/${userType.toLowerCase()}/${userType.toLowerCase()}Signin`
  return (
    <Link to={link} className="text-decoration-none">
      <div className="card text-center mb-4">
        <div className="card-body">
          <h1 className="card-title">{userType}</h1>
        </div>
      </div>
    </Link>
  )
}

export default Card
