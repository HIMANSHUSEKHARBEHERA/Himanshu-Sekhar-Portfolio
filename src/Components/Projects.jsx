import React from 'react';
import Travels from '../assets/Travels.png'
import Swim from '../assets/Swim.png'
import House from '../assets/House.png'
import Ecommerce from '../assets/Ecommerce.png'

const Projects = () => {
  return (
    <>
    <div className='text-white mt-2 md:[600px] md:ml-24 md:mr-24'>
        <h1 className='text-2xl md:6xl ml-4 pr-4 md:24 md:pr-24 font-bold '>Projects</h1>
        <div className='grid grid-cols-1  md:grid-cols-4 mt-2'>
            <div className='ml-4 mr-4 mt-2'>
                <img src={Travels} alt="" className='rounded-lg hover:animate-bounce' />
                <h1 className='text-xl md:2xl text-center mt-2'>Tour & Travels </h1>
            </div>
            <div className='ml-4 mr-4 mt-2'>
                <img src={Swim} alt="" className='rounded-lg hover:animate-bounce' />
                <h1 className='text-xl md:2xl text-center mt-2'> Swimming Pool Booking</h1>
            </div>
            <div className='ml-4 mr-4 mt-2'>
                <img src={House} alt="" className='rounded-lg hover:animate-bounce' />
                <h1 className='text-xl md:2xl text-center mt-2'>House Villa Booking</h1>
            </div>
            <div className='ml-4 mr-4 mt-2'>
                <img src={Ecommerce} alt="" className='rounded-lg hover:animate-bounce' />
                <h1 className='text-xl md:2xl text-center mt-2'>Ecommerce</h1>
            </div>
        </div>
    </div>
    </>
  );
}

export default Projects;
