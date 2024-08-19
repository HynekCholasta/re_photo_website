import React, { useState } from 'react';
import logo from '../images/2.png';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar2 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { link: "Home", path: "/re_photo_website/#/home" },
        { link: "Service", path: "/re_photo_website/#/services" },
        { link: "About", path: "/re_photo_website/#/about" },
        { link: "Contact", path: "/re_photo_website/#/contact" },
        { link: "Portfolio", path: "/re_photo_website/#/portfolio" },
    ];

    return (
        <header className="w-full bg-white fixed top-0 left-0 right-0 z-20">
            <nav className="py-4 lg:px-14 px-4 border-b border-gray-200 bg-white duration-300">
                <div className="flex justify-between items-center text-base gap-8">
                    <a href="/home" className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src={logo} alt="Logo" className='w-12 inline-block' />
                        <span className='text-[#263238]'></span>
                    </a>
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ link, path }) => (
                            <a
                                href={path}
                                key={path}
                                className='block text-base text-gray-900 hover:text-brandPrimary cursor-pointer'
                            >
                                {link}
                            </a>
                        ))}
                    </ul>

                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className="focus:outline-none focus:text-gray-500" aria-label="Toggle Menu">
                            {isMenuOpen ? (<FaTimes className='h-6 w-6'/>) : (<FaBars className='h-6 w-6'/>)}
                        </button>
                    </div>
                </div>
                <div className={`space-y-4 px-4 mt-16 py-7 bg-white ${isMenuOpen ? "block fixed top-0 right-0 left-0 z-10" : "hidden"}`}>
                    {navItems.map(({ link, path }) => (
                        <a
                            href={path}
                            key={path}
                            className='block text-center text-gray-900 hover:text-brandPrimary cursor-pointer'
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar2;
