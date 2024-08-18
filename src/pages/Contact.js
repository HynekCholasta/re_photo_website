import React, { useEffect } from 'react';
import Navbar2 from '../components/Navbar2.js';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'; // Importing icons from react-icons
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importing icons from react-icons
import Footer from '../components/Footer.js';

const Contact = () => {
    useEffect(() => {
        const handleScroll = () => {
            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el) => {
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
        <div className="relative font-sans text-neutralDGrey">
            {/* Navbar */}
            <div className="fixed top-0 left-0 w-full z-20 shadow-lg bg-white">
                <Navbar2 />
            </div>

            <div className="relative z-10 pt-20">
                {/* Hero Section */}
                <div className="min-h-[400px] flex items-center justify-center bg-neutral-100">
                    <h1 className="text-5xl font-semibold text-neutralDGrey opacity-0 animate-on-scroll">
                        Get in Touch
                    </h1>
                </div>

                <div className="bg-white">
                    <div className="px-4 lg:px-16 max-w-screen-2xl mx-auto py-20">
                        {/* Introduction Section */}
                        <section className="mb-16 text-center opacity-0 animate-on-scroll">
                            <p className="text-xl text-neutralDGrey max-w-screen-md mx-auto animate-fade-in">
                                We're here to help you with all your real estate photography and videography needs. Reach out to us via phone, email, or visit our office for a consultation.
                            </p>
                        </section>

                        {/* Contact Information Section with Cards */}
                        <section className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center opacity-0 animate-on-scroll">
                            <div className="animate-fade-in bg-neutral-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                                <div className="flex justify-center items-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                                    <FiPhone className="text-4xl text-blue-600" />
                                </div>
                                <h3 className="text-3xl font-semibold mb-2 text-center">Phone</h3>
                                <p className="text-lg text-neutralDGrey text-center">
                                    (Your Phone Number)
                                </p>
                                <p className="text-sm text-neutralGrey mt-2 text-center">
                                    Call us for immediate assistance or to discuss your project details over the phone.
                                </p>
                            </div>
                            <div className="animate-fade-in bg-neutral-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                                <div className="flex justify-center items-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                                    <FiMail className="text-4xl text-blue-600" />
                                </div>
                                <h3 className="text-3xl font-semibold mb-2 text-center">Email</h3>
                                <p className="text-lg text-neutralDGrey text-center">
                                    contact@[youragencydomain].com
                                </p>
                                <p className="text-sm text-neutralGrey mt-2 text-center">
                                    Send us an email with your project requirements or any queries you may have, and we'll get back to you promptly.
                                </p>
                            </div>
                            <div className="animate-fade-in bg-neutral-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                                <div className="flex justify-center items-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                                    <FiMapPin className="text-4xl text-blue-600" />
                                </div>
                                <h3 className="text-3xl font-semibold mb-2 text-center">Office</h3>
                                <p className="text-lg text-neutralDGrey text-center">
                                    [Your Office Address, Luxembourg]
                                </p>
                                <p className="text-sm text-neutralGrey mt-2 text-center">
                                    Visit our office for a personal consultation. We're open from 9 AM to 5 PM, Monday through Friday.
                                </p>
                            </div>
                        </section>

                        {/* Consultation Form Section with Modern Design */}
                        <section className="mb-24 opacity-0 animate-on-scroll">
                            <h2 className="text-3xl text-center font-semibold text-neutralDGrey mb-12 animate-fade-in">Schedule a Consultation</h2>
                            <p className="text-lg text-neutralDGrey max-w-screen-md mx-auto text-center mb-12 animate-fade-in">
                                Ready to take your property listings to the next level? Use the form below to book a session or inquire more about our services.
                            </p>
                            <form className="max-w-screen-md mx-auto bg-neutral-50 shadow-md p-8 rounded-xl animate-fade-in">
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-lg font-semibold text-neutralDGrey mb-2">Name</label>
                                    <input type="text" id="name" className="w-full p-4 border border-neutral-300 rounded-lg focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="contact" className="block text-lg font-semibold text-neutralDGrey mb-2">Contact Information</label>
                                    <input type="text" id="contact" className="w-full p-4 border border-neutral-300 rounded-lg focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="date" className="block text-lg font-semibold text-neutralDGrey mb-2">Preferred Date and Time</label>
                                    <input type="text" id="date" className="w-full p-4 border border-neutral-300 rounded-lg focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="description" className="block text-lg font-semibold text-neutralDGrey mb-2">Project Description</label>
                                    <textarea id="description" rows="5" className="w-full p-4 border border-neutral-300 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
                                </div>
                                <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300">Submit</button>
                            </form>
                        </section>

                        {/* Map and Directions Section */}
                        <section className="mb-24 opacity-0 animate-on-scroll">
                            <h2 className="text-3xl text-center font-semibold text-neutralDGrey mb-12 animate-fade-in">Find Us</h2>
                            <div className="w-full h-96 rounded-xl overflow-hidden shadow-md animate-fade-in">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.671209654933!2d6.126944215569047!3d49.611276379366335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795414d8a4c9b55%3A0xaba2ec65c59a5a8c!2sLuxembourg!5e0!3m2!1sen!2slu!4v1692596062627!5m2!1sen!2slu"
                                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </section>

                        {/* Follow Us Section with Icons */}
                        <section className="text-center mb-24 opacity-0 animate-on-scroll">
                            <h2 className="text-3xl font-semibold text-neutralDGrey mb-12 opacity-0 animate-fade-in">Follow Us</h2>
                            <p className="text-lg text-neutralGrey max-w-screen-md mx-auto mb-12 opacity-0 animate-fade-in">
                                Stay connected and get the latest updates on our projects and services:
                            </p>
                            <div className="flex justify-center gap-8 text-3xl opacity-0 animate-fade-in">
                                <a href="[Facebook Page]" className="transition duration-300" aria-label="Facebook">
                                    <FaFacebookF />
                                </a>
                                <a href="[Instagram Profile]" className=" transition duration-300" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                                <a href="[LinkedIn Profile]" className=" transition duration-300" aria-label="LinkedIn">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
