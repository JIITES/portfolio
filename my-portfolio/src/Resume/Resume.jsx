import React from 'react'

const Resume = () => { 
  return (
    <div className='flex justify-items-center gap-5  ' >
        <div>
        Download : <button className='bg-pink-400 h-[40px] w-[150px]  rounded '><a  href='/Jithesh.pdf'download>Download resume</a></button>
        </div>
        <div>
        View : <button className='bg-red-600 h-[40px] w-[150px]  rounded '><a  href='/Jithesh.pdf'>View resume</a></button>
       </div>
    </div>
  )
}

export default Resume