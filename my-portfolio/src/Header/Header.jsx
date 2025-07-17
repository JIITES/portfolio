import React from 'react'
import { useState,useEffect } from 'react'
import image from "../asset/images.jpeg"
import image2 from "../asset/hello.webp"
import { Link } from 'react-router-dom'
import githubIcon  from "../asset/github_logo_icon_click.png"; 
import Linkdin  from "../asset/Linkdin.png"; 
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';



const Header = () => {
  const[showHeader, setShowHeader] = useState(false);
  const handleScroll = () => {window.scrollTo({ top: 3000, behavior: 'smooth' });


};
useEffect(()=>{
  const Timer=setTimeout(()=>{
    setShowHeader(true);
  },3000);
  return ()=>{
    clearTimeout(Timer);
  }
},[]);

  return (
    <div>
    { showHeader && (<div className={` transition-opacity duration-1000 ${
          showHeader? 'opacity-100' : 'opacity-0'
        }`}>  
               <header className=" text-white py-20 px-4 text-center">
<div className=''>
<motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}//image will show in ite normall size and it will vsible
      transition={{//using tansition to transform 
        duration: 1,//1 time it will show
        ease: [0.175, 0.885, 0.32, 1.275], // bounce easing
      }}>
    
  
        <h1 className=" text-7xl font-bold mb-4 bg-gradient-to-tr from-emerald-600 to-emerald-200 bg-clip-text text-transparent shadow-white ">Jithesh D R</h1>
        <TypeAnimation
          sequence={[
            'I am Developer',
            
            3000,
            '',   
            1000,
            
          ]}
          wrapper="span"
          speed={150}
          repeat={Infinity}
          className="text-3xl font-bold text-shadow-indigo-100"
        />

      <p className="text-lg md:text-xl mb-6  bg-gradient-to-r from-green-300 to-purple-600 bg-clip-text text-transparent">
        Hi, I'm Jithesh, a Full Stack Developer with a strong focus on building reliable and user-friendly web applications.
        I enjoy solving problems and bringing ideas to life through clean and efficient code.
        I'm currently looking for opportunities where I can contribute, grow, and work on meaningful projects.
        If you're hiring or open to collaboration, I'd love to connect!
      </p>


    <div className="flex justify-center gap-4 mb-6">
    <p className="bg-green-700 border border-white  hover:bg-white hover:text-gray-900 py-2 px-6 rounded-full transition">
        <Link to="contactsof/"> Contact Me</Link>
      </p>
    </div>

     <div className="flex justify-center gap-6 mt-4">
        <a href="https://github.com/JIITES" target="_blank" rel="noopener noreferrer">
          <img className="bg-amber-50 w-[40px] h-[40px] "src={githubIcon} alt="GitHub"  />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <img className="w-[40px] h-[40px]" src={Linkdin} alt="LinkedIn"  />
        </a>
      </div>

</motion.div>
       
      <div className='  justify-items-end rounded-full  '><motion.img src="" alt='image' initial={{ x: 300, opacity: 0 }} //this is persons image    // Start 300px to the right
        animate={{ x: 0, opacity: 1 }}       // Animate to original position
        transition={{
          duration: 1.5,
          
          ease: 'easeInOut',
        }}
       className=' w-[250px] h-[250px]   rounded-full shadow-2xs  shadow-blue-500 border-round ' />
      </div>
-

</div>
                               


    </header>
    {/* <div className='flex justify-center items-center   '>
    <img src={image2} alt='arrow' onClick={handleScroll} className='h-[30px] w-[30px] animate-bounce' /> 
    </div> */}
        <div className='flex justify-center items-center   '>
    <a href='#project'><img src={image2} alt='arrow' className='h-[30px] w-[30px] animate-bounce' /> </a>
    </div>

  
</div>)};

    </div>
  )
}

export default Header