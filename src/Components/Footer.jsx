import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
const Footer = () => {
  return (
<>
<div className='md:ml-60 md:mr-24 ml-4 mr-4 mt-5 pb-2 md:pb-5 text-white'>
    <div className='flex gap-3 md:gap-20'>
       <div>
      <h1>Connect with me</h1>
      <div className='flex gap-1'>
        <div> <IoMdMailOpen className='text-black mt-1  ' /></div>
        <div><h1 className='font-bold text-xs'>trollyprankerteam@gmail.com</h1></div>
      </div>
        <div className='flex text-black text-xl md:gap-5 gap-2 md:mt-4 mt-2 md:2xl'>
            <a className='md:text-4xl'><FaInstagramSquare /></a>
            <a className='md:text-4xl'><FaLinkedin /></a>
            <a className='md:text-4xl'><FaGithubSquare /></a>
        </div>
       </div>
       <div className='list-none'>
        <h1>Help</h1>
        <li><a href="/about">About</a></li>
        <li><a href="/">Home</a></li>
        <li><a href="">Privacy & Policy</a></li>
        <li> Terms and Conditions</li>
       </div>
       <div>
        <h1 className='md:text-2xl '>News Letter</h1>
        <input type='text' className='bg-transparent border-2 md:w-40 w-10' />
        <button className='btn bg-transparent border-2  bg-white text-black'>Subscribe</button>
        </div> 
    </div>
    </div>
    <div className='mt-0 mr-0 bg-slate-500 text-white'>
        <div className='md:ml-24 ml-5  flex gap-2 md:gap-4 font-bold text-[6px] md:text-xl  list-none shadow-2xl'>
        <li className='md:ml-96 ml-14 text-black'>Copyright @trollyprankerteam 2024</li>
        </div>
</div>
</>
  );
}

export default Footer;
