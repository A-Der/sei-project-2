import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/nasa-logo.png'


const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item"><img src={logo} alt=""/> </div>
        <Link className="navbar-item" to="/">Space Jam</Link>
        <Link className="navbar-item" to="/picofday">NASA pic of the day</Link>
        <Link className="navbar-item" to="/projects">Projects</Link>
        <Link className="navbar-item" to="/nasaimages">Nasa Albums</Link>
      </div>
    </nav>
  )
}

export default Navbar