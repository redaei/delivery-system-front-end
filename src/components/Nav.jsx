import { NavLink } from 'react-router-dom'
const Nav = ({ handleLogOut, role }) => {
  return (
    <nav className="nav navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Shop Home Page</NavLink>
      <NavLink to="/driver">Driver Home Page</NavLink>
      <NavLink to="/order/createOrder">Create Order</NavLink>

      {role && (
        <NavLink to="/" onClick={handleLogOut}>
          LogOut
        </NavLink>
      )}
    </nav>
  )
}

export default Nav
