import React from 'react';
import EJS from '../assets/EJS.png'
const Skills = () => {
  return (
    <>
    <div className='text-white ml-4 mt-5 md:mr-24 md:ml-24'>
        <h1 className='md:text-4xl text-xl font-bold'>SKILLS</h1>
        <div className='md:grid md:grid-cols-4 grid grid-cols-2'>
            <div>
                <img src="https://logolook.net/wp-content/uploads/2022/11/Java-Logo-1996.png" alt="" />
            </div>
            <div>
                <img src="https://emaillistvalidation.com/blog/content/images/2023/09/HTML5_logo_and_wordmark.svg.png" className='h-28' alt="" />
            </div>
            <div className='mt-2'>
                <img src="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png" className='h-28' alt="" />
            </div>
            <div className='-ml-14'>
                <img src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Logo.png" className='h-28'  alt="" />
            </div>
            <div className='mt-2 ml-10 md:ml-32'>
                <img src="https://res.cloudinary.com/lwgatsby/f_auto/www/uploads/2020/11/mongodb.png"className='h-28' alt="" />
            </div>
            <div className='-ml-10'>
                <img src={EJS} alt=""  />
            </div>
            <div className='mt-2 md:ml-7'>
                <img src="https://www.ictdemy.com/images/5728/nodejs_logo.png" className='h-28 ml-2 ' alt="" />
            </div>
            <div>
                <img src="https://www.concur.com/sites/default/files/2000px-sap_2011_logo.svg_.png" className='h-28' alt="" />
            </div>
        </div>
    </div>
    </>
  );
}

export default Skills;
