"use client";
import React from 'react';
import banner1 from '../images/man holding drone.png';

const Home = () => {
  // You can add state and other logic here

  return (
    <div className="ng-neutralSilver">
  <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto pb-0">
    <div className="mt-28 md:mt-20 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
      <div className="md:ml-auto flex justify-end w-full md:w-1/2">
        <img src={banner1} alt="Banner" className="w-full md:w-3/4 h-auto rounded-3xl" />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
        Capture the Essence of<span className='text-brandPrimary'> Every Property</span>
        </h1>
        <p className='text-neutralGrey text-base mb-8'>
        Professional Real Estate Photography That Sells!
        </p>
        <button className="btn-primary">
          <a href='/re_photo_website/#/contact' key='/re_photo_website/#/contact'>contact</a>
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default Home;
