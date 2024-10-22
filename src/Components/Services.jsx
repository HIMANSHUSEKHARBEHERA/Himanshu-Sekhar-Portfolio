import React from 'react';

const Services = () => {
  return (
   <>
   <div className='ml-2 mr-2 md:ml-24 md:mr-24 text-white mt-5 pb-5'>
    <h1 className='md:text-4xl text-2xl font-bold '>SERVICES</h1>
    <div className='grid grid-cols-2 md:grid md:grid-cols-4'>
<div>
    <img src="https://gurzu.com/img/gurzu/mern-stack-01.webp"  className='h-20 md:h-40 hover:animate-bounce' alt="" />
</div>
<div>
 <img src="http://upload.wikimedia.org/wikipedia/commons/8/80/Adobe_Photoshop_CS5_icon.png" className='h-20 md:h-40 hover:animate-bounce' alt="" />
</div>
<div>
<img src="https://www.concur.com/sites/default/files/2000px-sap_2011_logo.svg_.png " className='h-20 md:h-40 hover:animate-bounce' alt="" />
</div>
<div>
    <img src="https://logolook.net/wp-content/uploads/2022/11/Java-Logo-1996.png"  className='h-20 md:h-40 hover:animate-bounce' alt="" />
</div>
    </div>
   </div>
   </>
  );
}

export default Services;
