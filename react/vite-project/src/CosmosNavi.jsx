import React from 'react'
import { NavLink } from 'react-router-dom'

const CosmosNavLink = () => {
  return (
    <div>
      <NavLink to="/product">product</NavLink><br />
      <NavLink to="/about">about</NavLink><br />
      <NavLink to="/job">job</NavLink><br />
      <NavLink to="/login">login</NavLink><br />
    </div>
  )
}

export default CosmosNavLink