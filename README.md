## react-04-router

React Router has been broken into three packages: react-router, react-router-dom, and react-router-native. For webpages you need to use react-router-dom
 and for mobile apps you need to use react-router-native. react-router is exported in both of these components.

###### Installation
```bash
npm install --save react-router-dom
```

Two types of Router
```JavaScript
*  <BrowserRouter>
*  <HashRouter>
```
Router components only expect to receive a single child element. To work within this limitation, it is useful to create an <App> component that renders the rest of your application

###### Changes in the main component
```JavaScript

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
```
###### Actual routing settings.
```Javascript
<Route path='/aboutus'/>
<Route exact path='/aboutus'/>
```
*  When the pathname is '/', the path does not match
*  When the pathname is '/aboutus' or '/aboutus/xyz', the path matches
*  If you only want to match '/aboutus', then you need to use the "exact" prop.

I have added these changes in my layout file
```JavaScript
<Switch>
  <Route exact path='/' component={Home}/>
  <Route path='/aboutus' component={AboutUs}/>
  <Route path='/contactus' component={ContactUs}/>
</Switch>
```

###### add these changes in required component. I have added these in my Navbar.js
```JavaScript
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/aboutus'>About Us</Link></li>
        <li><Link to='/contactus'>Contact Us</Link></li>
      </ul>
    </nav>
```