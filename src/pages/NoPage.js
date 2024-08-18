import React from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from '../components/Navbar2.js';
import Footer from '../components/Footer.js';

const NotFound = () => {
  return (
    <div className="relative font-sans text-neutralDGrey min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-20 shadow-lg bg-white">
        <Navbar2 />
      </div>

      <div className="flex-grow flex flex-col justify-center items-center text-center pt-20 px-4">
        <div className="mb-8 text-brandPrimary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2v6m0-6V4m0 0L8.5 6.5M12 4L15.5 6.5" />
          </svg>
        </div>
        <h1 className="text-6xl font-semibold mb-4 text-neutralDGrey leading-snug">
          404
        </h1>
        <p className="text-xl text-neutralGrey mb-8 max-w-lg">
          Oops! The page you’re looking for doesn’t exist. It might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex justify-center items-center mb-8">
          <div className="dot-animation">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <Link to="/" className="btn-primary px-6 py-3">
          Go Home
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NotFound;
