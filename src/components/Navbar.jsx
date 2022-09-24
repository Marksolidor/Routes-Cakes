import {NavLink} from 'react-router-dom'

export default function Navbar() {
    return (
    <div className="nav-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="logo-container">
    <NavLink className="navbar-brand" to="/">HAPPY CAKE</NavLink>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">Contacto</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    )
    }  
  