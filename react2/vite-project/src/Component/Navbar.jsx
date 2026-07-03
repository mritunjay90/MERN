import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="nav-header">
      <div className="nav-container">
        <div className="brand">Cosmos</div>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label="Toggle navigation"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav className={`nav ${open ? 'open' : ''}`}>
          <NavLink to="/user" className="nav-link" onClick={close}>
            User
          </NavLink>
          <NavLink to="/user/create" className="nav-link" onClick={close}>
            Create User
          </NavLink>
          <NavLink to="/school" className="nav-link" onClick={close}>
            School
          </NavLink>
          <NavLink to="/school/create" className="nav-link" onClick={close}>
            Create School
          </NavLink>
          <NavLink to="/product" className="nav-link" onClick={close}>
            Product
          </NavLink>
          <NavLink to="/product/create" className="nav-link" onClick={close}>
            Create Product
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
