import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import AboutUs from '../presentation/AboutUs';
import ContactUs from '../presentation/ContactUs';
import Home from '../presentation/Home';
import Navbar from '../presentation/Navbar';

class MainLayout extends Component {
  render(){
    return(
        <div >
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/aboutus' component={AboutUs}/>
            <Route path='/contactus' component={ContactUs}/>
          </Switch>              
        </div>       
      )
  }
}

export default MainLayout