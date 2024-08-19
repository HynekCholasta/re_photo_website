import React from 'react';
import banner2 from '../images/video editing.png';
import backgroundImg from '../images/02.jpg'; // Corrected import statement
import { BsSpeedometer, BsEye, BsChatDots } from 'react-icons/bs';


const About = () => {
    return (
        <div>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img className='w-full md:w-3/4 h-auto rounded-3xl' src={banner2} alt='' />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>See the Difference</h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
                            In real estate, images can make or break a sale. Our photography not only captures the physical space but also the emotion and story behind each property. Let us help you turn your listings into must-see properties that buyers can't resist.
                        </p>
                        <button className="btn-primary">
                        <a href='/about' key='/about'>Learn More</a>
        </button>
                    </div>
                </div>
            </div>

            {/* Background Image Section */}
            <div 
                className='relative px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${backgroundImg})` }}
            >
                {/* White Overlay Covering Entire Image */}
                <div className='absolute inset-0 bg-white bg-opacity-80'></div>
                
                <div className='relative z-10 flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='relative z-10 flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='relative z-10 flex flex-col md:flex-row justify-between items-center gap-8'>
            {/* Text Section */}
            <div className='md:w-1/2'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>
                    Our Commitment<br />
                    to <span className='text-brandPrimary'>Excellence</span>
                </h2>
                <p className='md:w-3/4 text-xl text-black mb-8'>
                    We pride ourselves on delivering outstanding results through speed, precision, and personalized service.
                </p>
            </div>

            {/* Soft Skills Section */}
            <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-8'>
                <div className='space-y-8'>
                    <div className='flex items-center gap-4'>
                        <BsSpeedometer size='45' />
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>Quick Turnaround</h4>
                            <p>Delivering high-quality results within tight deadlines.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <BsEye size='45' />
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>Attention to Detail</h4>
                            <p>Every shot is crafted to showcase the property's best features.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <BsChatDots size='45' />
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>Client-Centered Approach</h4>
                            <p>Clear, open communication to meet your specific needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
