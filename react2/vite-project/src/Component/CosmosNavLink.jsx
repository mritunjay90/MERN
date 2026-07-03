import React from 'react'
import { NavLink } from 'react-router-dom'
const CosmosNavLink = () => {
  return (
    <div>
      <NavLink to ="/user">user</NavLink><br></br>
      <NavLink to="/create-user">create user</NavLink><br></br>
      <NavLink to="/school">school</NavLink><br></br>
      <NavLink to="/create-school">create school</NavLink><br></br>
      <NavLink to="/product">product</NavLink><br></br>
      <NavLink to="/create-product">create product</NavLink>

    </div>
  )
}

export default CosmosNavLink
