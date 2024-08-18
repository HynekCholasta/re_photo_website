import React from 'react';
import banner3 from '../images/showing video.png';

const Products = () => {
    return (
        <div>
            <div className="px-4 lg:px-16 max-w-screen-2xl mx-auto py-20">
            <section className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 mb-20 opacity-0 animate-on-scroll">
                            <div className="md:w-1/2">
                                <img src={banner3} alt="New Project" className="w-full md:w-3/4 h-auto rounded-3xl" />
                            </div>
                            <div className="md:w-1/2">
                                <h2 className="text-4xl font-semibold mb-4 text-neutralDGrey leading-snug">
                                Our Expert Editing Approach
                                </h2>
                                <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>At our real estate photography agency, we believe that exceptional editing is as crucial as the initial shot. Every image and video we produce goes through a meticulous editing process to ensure the highest quality. Whether it’s enhancing natural light in a cozy living room or emphasizing the grandeur of a commercial space, our skilled editors know exactly how to bring out the best in every frame. We handle both photography and videography with an expert touch, crafting visuals that not only showcase properties but also tell their unique stories. This commitment to excellence in editing sets our work apart, helping you attract more buyers and close sales faster
                                </p>
                            </div>
                        </section>
            </div>       
        </div>
    );
};

export default Products;