import { NavLink } from 'react-router-dom'
const Nav = ({ handleLogOut, role }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {role === 'Shop' && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/shop">
                    Shop Home Page
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/order/createOrder">
                    Create Order
                  </NavLink>
                </li>
              </>
            )}
            {role === 'Driver' && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/driver">
                  Driver Home Page
                </NavLink>
              </li>
            )}
            {role === 'Admin' && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/admins">
                  Admin
                </NavLink>
              </li>
            )}

            {role && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/" onClick={handleLogOut}>
                  LogOut
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
