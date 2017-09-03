import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to='/'>Home</Link>
                    <Link className="nav-item nav-link" to='/roster'>Roster</Link>
                    <Link className="nav-item nav-link" to='/aboutus'>aboutus</Link>
                    <Link className="nav-item nav-link" to='/contactus'>contactus</Link>
                </div>
              </div>
            </nav>                        
        </div>
      )
  }
}

export default Navbar


        // <div>
        //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //       <Link className="navbar-brand" to='/'>Navbar</Link>
        //       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //       </button>
        //       <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //         <div className="navbar-nav">
        //             <Link className="nav-item nav-link" to='/'>Home</Link>
        //             <Link className="nav-item nav-link" to='/aboutus'>aboutus</Link>
        //             <Link className="nav-item nav-link" to='/contactus'>contactus</Link>
        //         </div>
        //       </div>
        //     </nav>                        
        // </div>