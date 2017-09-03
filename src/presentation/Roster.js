import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import RosterOne from './RosterOne';
import RosterTwo from './RosterTwo';


class Roster extends Component {
  render(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to='/roster/one'>RosterOne</Link>
                    <Link className="nav-item nav-link" to='/roster/two'>RosterTwo</Link>
                </div>
              </div>
            </nav> 

          <Switch>
            <Route path='/roster/one' component={RosterOne}/>
            <Route path='/roster/two' component={RosterTwo}/>
          </Switch>
          This is roster home page
        </div>
      )
  }
}

export default Roster