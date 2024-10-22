import React, { useEffect, useRef } from 'react';
import HIMANSHU from '../assets/Himanshu.png'
import Typed from 'typed.js'
function Herosection () {
    const typedRef = useRef(null);
    useEffect (() => {
      const options = {
        strings: ["Welcome to my world","I'm Himanshu Sekhar","Fullstack Developer","Java Developer","ABAP Developer"],
        typeSpeed: 40,
        backSpeed: 0,
        loop: true
      }
      const typed = new Typed(typedRef.current, options)
      return () => {
        typed.destroy();
      };
    }, [])
  return (
    <>
    <div className='md:pb-44 md:ml-24 md:mr-24 text-white '>
        <div className='flex'>
        <div className='p-20 mt-60 relavtive'>
            <h1 className='md:text-4xl'> Welcome !</h1>
            <h1 ref={typedRef}    className='md:text-6xl md:font-bold'></h1>
           <div className='-ml-14 mr-4'>
            <p className=' md:pr-[500px] mt-[70px]'>"Fueled by a fascination for untangling complex problems, I am a final-year Computer Science and Engineering student at Sardar Beant Singh State University. My journey into the world of code began in high school, and since then, I've delved into the fascinating realms of Machine Learning, Data Science, and Software Development. With a competitive spirit honed through hundreds of coding challenges, I'm on a mission to leverage technology to solve real-world problems and push the boundaries of Artificial Intelligence and Machine Learning."</p>
            
            <div className='flex md:gap-2 gap-5 border-r-4 mt-3 -pr-[500px]  md:pr-[500px]'>
                <div className='border-r-4 pr-2'>
                    <h1 className='text-2xl font-bold'>2+</h1>
                    <p>Master Of Computer Science :
                    YEARS OF EXPERIENCE</p>
                </div>
                <div className='border-r-4 pr-2'>
                    <h1 className='text-2xl font-bold'>5+</h1>
                    <p>PROJECTS
                    COMPLETED</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>1+</h1>
                    <p>COMPETITIVE PROGRAMMING:
                    YEARS OF EXPERIENCE</p>
                </div>
            </div>
            </div>
            </div>
        <div className='absolute'>
        <img src={HIMANSHU} alt=""  className='md:ml-[600px] md:rounded-lg h-[450px] w-[400px] md:h-[700px] md:w-[700px] border-b-8'/>
        <div className=' -mt-[200px] ml-10 md:hidden text-white'>
            <h1 className='text-2xl ml-20'> Welcome !</h1>
            <h1 className='text-4xl font-bold ml-5'>I am <span>Full Stack Developer</span></h1>
            </div>
        </div>
    </div>
    
        </div>
       
    </>
  );
}

export default Herosection;


