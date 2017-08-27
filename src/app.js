import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Header from './presentation/Header';
import Footer from './presentation/Footer';
import MainLayout from './layout/MainLayout'

class App extends Component {
	render(){
		return(
			<div className="container-fluid">
				<Header />
					<MainLayout/>
				<Footer />
			</div>
			)
	}
}


ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
	document.getElementById('root'))