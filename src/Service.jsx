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
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="#" className="btn btn-primary">Get Started</NavLink>
  </div>
</div>

        </div>
        <div className="col-md-4 col-10 mx-auto">
    <div className="card" >
  <img src={app} className="card-img-top" alt="img" />
  <div className="card-body">
    <h5 className="card-title">App Development</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="#" className="btn btn-primary">Get Started</NavLink>
  </div>
</div>

        </div>
        <div className="col-md-4 col-10 mx-auto">
    <div className="card" >
  <img src={android } className="card-img-top" alt="img" />
  <div className="card-body">
    <h5 className="card-title">Android Development</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="#" className="btn btn-primary">Get Started</NavLink>
  </div>
</div>

        </div>
        <div className="col-md-4 col-10 mx-auto">
    <div className="card" >
  <img src={software} className="card-img-top" alt="img" />
  <div className="card-body">
    <h5 className="card-title">Software Development</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="#" className="btn btn-primary">Get Started</NavLink>
  </div>
</div>

        </div>
        <div className="col-md-4 col-10 mx-auto">
    <div className="card" >
  <img src={digital} className="card-img-top" alt="img" />
  <div className="card-body">
    <h5 className="card-title">Digital Development</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="#" className="btn btn-primary">Get Started</NavLink>
  </div>
</div>

        </div>
        <div className="col-md-4 col-10 mx-auto">
    <div className="card" >
  <img src={marketing} className="card-img-top" alt="img" />
  <div className="card-body">
    <h5 className="card-title">Marketing Development</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="#" className="btn btn-primary">Get Started</NavLink>
  </div>
</div>

        </div>
        
        
    </div>
             </div>
         
         </div>

     </div>
     <br />
     
     <section id="header" className=" d-flex align-items-center">
<div className="container-fluid  ">
     <div className="row">
         <div className="col-11 mx-auto">
             <div className="row">
             <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                 <h1>  Grow your any service with < strong className="brand-name">E-phantom</strong></h1>
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
    

</>
 )
};

export default Service;
