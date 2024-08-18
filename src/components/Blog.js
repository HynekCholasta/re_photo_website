import React from 'react';

const Blog = () => {
    const Blogs = [
        {id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen", image: '../image 18.png'},
        {id: 2, title: "What are your safeguarding responsibilities and how can you manage them?", image: '../image 19.png'},
        {id: 3, title: "Revamping the Membership Model with Triathlon Australia", image: '../image 20.png'},
    ]
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
            <div className='text-center md:w-1/2 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Elevate Your Listings with Expert Care</h2>
                        <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto'>
                        Explore how [Your Agency Name] transforms real estate marketing through expert photography and videography. Discover the difference that professional visuals can make and see how we help clients stand out in the competitive Luxembourg market. Join our community and elevate your property's appeal today.
                        </p>
            </div>
            <div>
                {
                    Blogs.map(blog => <div key={blog.id}>
                        <img src={blog.image} alt ='' />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blog;