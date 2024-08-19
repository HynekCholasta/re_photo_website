import React, { useState, useEffect } from 'react';
import logo from '../images/2.png';
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from 'react-icons/fa6';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { link: "Home", path: "/home" },
        { link: "Service", path: "/services" },
        { link: "About", path: "/about" },
        { link: "Contact", path: "/contact" },
        { link: "Portfolio", path: "/portfolio" },
    ];

    return (
        <header className={`w-full bg-white md:bg-transparent fixed top-0 left-0 right-0`}>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 right-0 border-b bg-white duration-300" : ""}`}>
                <div className="flex justify-between items-center text-base gap-8">
                    <a className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src={logo} alt="" className='w-12 inline-block image-xl' href='/home' />
                        <span className='text-gray-900'></span>
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
                        <button onClick={toggleMenu} className="focus:outline-none focus:text-gray-500">
                            {isMenuOpen ? (<FaXmark className='h-6 w-6' />) : (<FaBars className='h-6 w-6' />)}
                        </button>
                    </div>
                </div>
                <div className={`space-y-4 px-4 mt-16 py-7 bg-white ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItems.map(({ link, path }) => (
                        <Link
                            spy={true}
                            smooth={true}
                            offset={-100}
                            to={path}
                            key={path}
                            href={path}
                            className='block text-center text-gray-900 hover:text-brandPrimary cursor-pointer'
                        >
                            {link}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
