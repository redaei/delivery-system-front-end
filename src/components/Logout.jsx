import { useNavigate } from 'react-router-dom'

const Logout = ({ setRole, setUser }) => {
  let navigate = useNavigate()
  const logOut = () => {
    localStorage.removeItem('authToken')
    setRole(null)
    setUser(null)
    navigate('/', { replace: true })
  }

  return (
    <>
      <h1>LogOut ... </h1>
      {logOut()}
    </>
  )
}

export default Logout
