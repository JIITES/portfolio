import React from 'react'
import { Assets } from '../asset/asset'
import Resume from '../Resume/Resume'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const Banner = () => {
  return (
    <div className="bg-stone-800 min-h-screen px-4 md:px-10 py-10 transition-shadow duration-300 hover:shadow-xl hover:shadow-yellow-300/30">
      <div className="max-w-6xl mx-auto text-white pt-[50px]">

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.175, 0.885, 0.32, 1.275],
          }}
          className="text-center pt-32"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-300 to-purple-600 bg-clip-text text-transparent leading-tight">
            Welcome to My Portfolio
          </h1>
          <TypeAnimation
            sequence={[
              'Explore my Small projects and skills',
              2000,
              '',
              400,
            ]}
            wrapper="p"
            speed={70}
            repeat={Infinity}
            
          
            className="text-lg  text-blue-400"
          />
          <Link to="Sporjects/">
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300 hover:scale-105">
              View Projects
            </button>
          </Link>
        </motion.div>
<div className="flex justify-center bg-stone-800 mt-10 py-10  rounded-2xl shadow-lg transition-shadow duration-300  hover:shadow-green-500 ">
  <div className="pr-7">
    <Resume />
  </div>  
</div>

        <div className="pt-32">
          <h2 className="text-5xl font-bold text-blue-500 mb-6">
            Technologies Used
          </h2>
          <ul className="flex flex-wrap gap-9 justify-center text-lg list-disc list-inside">
            {Assets.map((item, index) => (
              <div
                key={index}
                className="pt-5 transform transition duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20 p-4 rounded"
              >
                <p className="mb-2">{item.name}</p>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 mx-auto"
                />
              </div>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Banner
