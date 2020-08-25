import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/image/20.jpeg';
import android from '../src/image/22.jpg';
import app from '../src/image/21.jpeg';
import software from '../src/image/23.png';
import digital from '../src/image/26.jpg';
import marketing from '../src/image/27.jpg';
import ser from '../src/image/28.jpg';

const Service = () =>{
 

 return (
 <>

<section id="header" className=" d-flex align-items-center">
<div className="container-fluid  ">
     <div className="row">
         <div className="col-11 mx-auto">
             <div className="row">
             <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                 <h1>  Grow your any service with < strong className="brand-name">E-PHANTOM</strong></h1>
                 <h2 className="my-3">we are the team of talented developer making website</h2>
                 <div className="mt-3">
                     
                     </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 header-img ">
                <img src ={ser} className="img-fluid animated" alt="common img" />
                </div>
                </div>

             </div>
         
         </div>

     </div>
	 
	 
	 
    </section>
    
 
 <div className="my-5">
     <h1 className="text-center">Our Sevices</h1>
     </div>
     <div className="container-fluid mb-5">
     <div className="row ">
         <div className="col-10 mx-auto">
<div className="row gy-5">
    <div className="col-md-4 col-10 mx-auto">
    <div className="card" >
  <img src={web} className="card-img-top" alt="img" />
  <div className="card-body">
    <h5 className="card-title">Web Development</h5>
    <p className="card-text">We are the team who work in Web Devlopment area and make sure we give good service.</p>
    <NavLink to="/service/web" className="btn btn-primary">Get Started</NavLink>
  </div>
</div>

        </div>
        <div className="col-md-4 col-10 mx-auto">
    <div className="card" >
  <img src={app} className="card-img-top" alt="img" />
  <div className="card-body">
    <h5 className="card-title">App Development</h5>
    <p className="card-text">We are the team who work in App Devlopment area and make sure we give good service.</p>
    <NavLink to="/service/application" className="btn btn-primary">Get Started</NavLink>
  </div>
</div>

        </div>
        <div className="col-md-4 col-10 mx-auto">
    <div className="card" >
  <img src={android } className="card-img-top" alt="img" />
  <div className="card-body">
    <h5 className="card-title">Android Development</h5>
    <p className="card-text">We are the team who work in Android Devlopment area and make sure we give good service.</p>
    <NavLink to="/service/android" className="btn btn-primary">Get Started</NavLink>
  </div>
</div>

        </div>
        <div className="col-md-4 col-10 mx-auto">
    <div className="card" >
  <img src={software} className="card-img-top" alt="img" />
  <div className="card-body">
    <h5 className="card-title">Software Development</h5>
    <p className="card-text">We are the team who work in Software Devlopment area and make sure we give good service.</p>
    <NavLink to="/service/software" className="btn btn-primary">Get Started</NavLink>
  </div>
</div>

        </div>
        <div className="col-md-4 col-10 mx-auto">
    <div className="card" >
  <img src={digital} className="card-img-top" alt="img" />
  <div className="card-body">
    <h5 className="card-title">Digital Development</h5>
    <p className="card-text">We are the team who work in Digital Devlopment area and make sure we give good service.</p>
    <NavLink to="/service/digital" className="btn btn-primary">Get Started</NavLink>
  </div>
</div>

        </div>
        <div className="col-md-4 col-10 mx-auto">
    <div className="card" >
  <img src={marketing} className="card-img-top" alt="img" />
  <div className="card-body">
    <h5 className="card-title">Marketing Development</h5>
    <p className="card-text">We are the team who work in Marketing Devlopment area and make sure we give good service.</p>
    <NavLink to="/service/marketing" className="btn btn-primary">Get Started</NavLink>
  </div>
</div>

        </div>
        
        
    </div>
             </div>
         
         </div>

     </div>
     <br />
     
     

</>
 )
};

export default Service;
