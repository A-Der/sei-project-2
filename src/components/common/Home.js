import React from 'react'


import vid from '../../assets/moonland.mp4'
import logo from '../../assets/nasa-red-logo.png'

const Home = () => {
  return (
    <div>
      <section className="hero is-fullheight-with-navbar is-info is-medium">
        <header className="home-header">
          <img src={logo} alt=""/>
        THE ARCHIVES
        </header>
        
        <div className="hero-body">
          <video autoPlay muted>
            <source src={vid} type="video/mp4"/>
          </video>
        </div>
      </section>
    </div>
  )
}

export default Home