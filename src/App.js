import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import PicOfDay from './components/nasa/PicOfDay'
import Projects from './components/nasa/Projects'
import ProjectShow from './components/nasa/ProjectShow'
import NasaImages from './components/nasa/NasaImages'
import imageError from './components/common/Error'
import Footer from './components/nasa/Footer'



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/projects/:id" component={ProjectShow} />
        <Route path="/picofday" component={PicOfDay}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/nasaimages" component={NasaImages} />
        <Route path="/*" component={imageError}/>
      </Switch>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App