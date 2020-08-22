import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home'
import Service from './Service'
import About from './About'
import Contact from './Contact'
import Navabar from './Navbar'
import Footer from './Footer'
import { Switch, Route, Redirect } from 'react-router-dom';


const App = () =>{
 

 return (
 <>
 <Navabar />
 <Switch>
   <Route exact path='/' component={Home}/>
   <Route exact path='/about' component={About}/>
   <Route exact path='/service' component={Service}/>
   <Route path='/contact' component={Contact}/>
   <Redirect to="/"/>

</Switch>
<br />
<br />
<br />
<br />
<br />
<Footer />
</>
 )
};

export default App;
