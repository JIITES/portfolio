import React from 'react'
import { SmallP } from '../asset/asset'

const Smallproject = () => {
  return (
    <div >
        <p className='text-white'>Small tasks</p>
        <div className=''>       
           {SmallP.map((item, index) => (
<div key={index} className='text-white bg-neutral-400  w-[390px] rounded-3xl p-5 m-5 transition-transform duration-300 transform hover:scale-105 '>
    <img src={item.image} alt={item.alt} className="w-[300px] h-[200px] pl-5 pt-5 transition-transform duration-300 transform hover:scale-90" />
    <p className='text-1xl font-extrabold '>{item.description}</p>
  <div className='flex justify-baseline items-center gap-5 pt-5 rounded'>
      <a className= "hover:text-amber-800 " href={item.liveLink}>livelink</a>
  <a className= "hover:text-amber-200"  href={item.codeLink}>codelink</a>
  </div>
</div>
           ))}
</div>
    </div>
        )
}

export default Smallproject