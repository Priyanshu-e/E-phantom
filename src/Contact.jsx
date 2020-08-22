import React from 'react';
import { useState } from 'react';


const Contact = () =>{

    const[data, setData]= useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",

    });

    const InputEvent=(event)=>{
        const{ name, value } = event.target;
        
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });
    };
    const formSubmit=()=>{
    
        alert(
            `My name is ${data.fullname}.my mobile no. is ${data.phone} and email is ${data.email}, here i want to say ${data.msg}`
        );

    }
 

 return (
 <>
 <div className="my-5">
     <h1 className="text-center">Contact Us</h1>
     </div>
     <div className="container contact_div">
         <div className="row">
             <div className="col-md-6 col-10 mx-auto">
             <form onSubmit={formSubmit}>
             <div className="form-group">
    <label for="exampleFormControlInput1">FullName</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="enter your full name" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Phone</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="contact number" />
  </div>


  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
  </div>

  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent} ></textarea>
  </div>
  <br />
  <button class="btn btn-outline-primary" type="submit">Submit form</button>

</form>
                 </div>
             </div>
         </div>
</>
 )
};

export default Contact;
