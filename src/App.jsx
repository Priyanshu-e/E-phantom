import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home'
import Service from './Service'
import About from './About'
import Contact from './Contact'
import Navabar from './Navbar'
import Footer from './Footer'
import Web from './Web'
import Application from './Application'

import { Switch, Route, Redirect } from 'react-router-dom';
import Android from './Android';
import Software from './Software';
import Digital from './Digital';
import Marketing from './Marketing';


const App = () =>{
 

 return (
 <>
 <Navabar />
 <Switch>
   <Route exact path='/' component={Home}/>
   <Route exact path='/about' component={About}/>
   <Route exact path='/service' component={Service}/>
   <Route exact path='/contact' component={Contact}/>
   <Route exact path='/service/web' component={Web}/>
   <Route  exact path='/service/application' component={Application}/>
   <Route  exact  path='/service/android' component={Android}/>
   <Route  exact path='/service/software' component={Software}/>
   <Route  exact path='/service/digital' component={Digital}/>
   <Route  path='/service/marketing' component={Marketing}/>

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
