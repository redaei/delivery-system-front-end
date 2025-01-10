import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className="nav navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Shop Home Page</NavLink>
      <NavLink to="/driver">Driver Home Page</NavLink>
      <NavLink to="/logout">LogOut</NavLink>
    </nav>
  )
}

export default Nav
