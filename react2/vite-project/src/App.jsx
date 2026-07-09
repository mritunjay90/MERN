import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import CosmosRoute from './Component/CosmosRoute'

const App = () => {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <CosmosRoute />
      </main>
    </div>
  )
}

export default App