import React, { useEffect } from 'react';
import Home from '../components/Home.js';
import Services from '../components/Services.js';
import About from '../components/About.js';
import Products from '../components/Products.js';
import Blog from '../components/Blog.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

function Home_page() {

  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
          el.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check to trigger animations

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar/>
      <div className="animate-on-scroll">
        <Home/>
      </div>
      <div className="animate-on-scroll">
        <Services/>
      </div>
      <div className="animate-on-scroll">
        <About/>
      </div>
      <div className="animate-on-scroll">
        <Products/>
      </div>
      <div className="animate-on-scroll">
        <Blog/>
      </div>
      <Footer/>
    </>
  );
}

export default Home_page;
