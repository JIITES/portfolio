import React from 'react'
import emailjs from "emailjs-com";
import { useState } from 'react';

const Getintouch = () => {
  const[format,setformat] = useState({name:"",email:"",message:""});
  const SERVICE_ID = "service_0boquxm";
  const TEMPLATE_ID = "template_ot5j1hk";
  const USER_ID = "lfuqmbZoU3Pb_dZQT";
  const handlesubbmit=(e)=>{
e.preventDefault();
emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
.then((result)=>{
  alert("Message sent successfully",result)
  setformat({name:"",email:"",message:""})
  .catch((error)=>{
alert("An error occurred, Please try again later",error);
  })
})
  }
  return (
    <div className='  pt-72 w-[400px] pl-72 '>
    <div className=" bg-blue-950  justify md:w-[400px] lg:w-[500px] xl:w-[600px] mx-auto rounded-4xl  " id="contact">
  <h1 className="text-white text-3xl font-bold text-center pt-6 mb-8">Get in Touch</h1>

  <form onSubmit={handlesubbmit} className="max-w-md mx-auto flex flex-col gap-4 text-amber-50">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={format.name}
      
      onChange={(e) => setformat({ ...format, name: e.target.value })}
      className="bg-gray-700 rounded px-4 py-2"
      required
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"

      value={format.email}
      onChange={(e) => setformat({ ...format, email: e.target.value })}
      className="bg-gray-700 rounded px-4 py-2 "
      required
    />
<br/>
    <textarea className="bg-gray-700 rounded px-3 py-2  "
      name="message"
      placeholder="Your Message"
      rows="4"
      value={format.message}
      onChange={(e) => setformat({ ...format, message: e.target.value })}
      required
    />
<br/>
    <button
      type="submit"
      className="bg-blue-500 text-white rounded py-2 hover:bg-blue-600 w-[230px]  animate-bounce"
    >
      Send Message
    </button>
  </form>
</div>
    </div>

  )
}

export default Getintouch