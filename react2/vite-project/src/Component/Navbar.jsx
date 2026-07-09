import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  const close = () => setOpen(false)
  const toggleMenu = () => setOpen((prev) => !prev)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        close()
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        close()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="nav-header">
      <div className="nav-container">
        <div className="brand">Cosmos</div>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={toggleMenu}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav ref={navRef} id="site-nav" className={`nav ${open ? 'open' : ''}`} aria-label="Primary navigation">
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

      <div className={`mobile-overlay ${open ? 'show' : ''}`} onClick={close} />
    </header>
  )
}

export default Navbar
