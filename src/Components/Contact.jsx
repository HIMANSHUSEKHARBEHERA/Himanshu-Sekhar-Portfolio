import React from 'react';

function Contact () {
  return (
    <>
    <div className='md:ml-24 md:mr-24 ml-4 mr-4 '>
    <div className='md:ml-10 mt-5'>
    <div className='flex border-2 md:w-[650px] md:ml-80 md:mt-10 pb-10 '>
      <div>
        <img src="https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-1/512/user_login_man-1024.png" className='md:h-[200px] md:mt-24 md:ml-5 h-40 mt-10' alt="" />
      </div>
    <div className='md:pt-5'>
      <h1 className='text-black md:text-2xl text-center font-sans font-bold md:pb-5 pb-2 mt-2'>Contact us</h1>
      <div className='text-balance font-sans text-black  border-l-2 border-t-2 mr-2 ml-1'>
        <div className='md:ml-10 md:mt-5 md:w-80 ml-2'>
        <h1>Name</h1>
        <input type='text' placeholder='Enter Your Name' className='bg-transparent' required />
<hr />
        <h1>Email</h1>
        <input type='text' placeholder='Enter Your Email' className='bg-transparent' required/>
        <hr />
<h1>Message</h1>
<input type='text' placeholder='Enter Your Message' className='cursor-text bg-transparent' required/>
<hr />
<button className="btn border-2 mt-2 hover:bg-black hover:text-white" onClick={()=>document.getElementById('my_modal_1').showModal()}>Sumbit</button>
<dialog id="my_modal_1" className="modal rounded-lg">
  <div className="modal-box">
    <h3 className="font-bold text-lg ml-4 mr-4 mt-4">Thank You! for Reached me.</h3>
    <p className="py-4 ml-4 mr-4">Welcome to Trollypranker World </p>
    <div className="modal-action">
      <form method="dialog -mt-40">
        <button className="btn border-2 rounded-full ml-5 mb-5 hover:bg-black hover:text-white relative">Close</button>
      </form>
    </div>
  </div>
</dialog>
</div>
      </div>
    </div>
   </div>
   </div>
    </div>
    </>
  );
}

export default Contact;
