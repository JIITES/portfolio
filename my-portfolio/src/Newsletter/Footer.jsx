import React from 'react'
import Footerimage from "../asset/infoooter.png"
import gitfooter from "../asset/footergit.png"

const Footer = () => {
  return (
    <div className=" justify-items-start pt-20 left-0 w-full z-50">
          <footer className=" pt-11 w-full text-white  border-t border-white  shadow-inner">
        <div className="text-center">

        <div className='flex justify-center gap-2 mb-4 ' >
        <img className="transition-transform duration-300 transform hover:scale-125" src={gitfooter} alt='github' />
        <img className=" w-[60px] h-[60px] transition-transform duration-300 transform hover:scale-125" src={Footerimage} alt="linkin"/>        

        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <p className="mt-2">Made with ❤️ by Jithesh</p>
      </div>
    </footer>

    </div>
  );
}
export default Footer
