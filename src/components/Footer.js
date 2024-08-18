import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../images/2.png';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 mt-16">
            <div className="container mx-auto px-4 lg:px-14 max-w-screen-2xl">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo and Description */}
                    <div className="md:w-1/3 text-center md:text-left mb-8 md:mb-0">
                        <a href="/home" className="text-2xl font-semibold flex items-center space-x-3 justify-center md:justify-start">
                            <img src={logo} alt="Logo" className="w-12 inline-block" />
                            <span className="text-white">HJ Media</span>
                        </a>
                        <p className="text-neutralGrey mt-4">
                            Offering professional real estate photography and videography services that capture the true essence of properties.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:w-1/3 mb-8 md:mb-0 text-center">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/services" className="text-neutralGrey hover:text-white">Services</a></li>
                            <li><a href="/about" className="text-neutralGrey hover:text-white">About Us</a></li>
                            <li><a href="/portfolio" className="text-neutralGrey hover:text-white">Portfolio</a></li>
                            <li><a href="/contact" className="text-neutralGrey hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="md:w-1/3 text-center md:text-right">
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex justify-center md:justify-end space-x-6 text-xl">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutralGrey hover:text-white">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutralGrey hover:text-white">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutralGrey hover:text-white">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-12 text-center text-neutralGrey text-sm">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
