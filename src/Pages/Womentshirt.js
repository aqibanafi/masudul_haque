import React from 'react';
import one from '../assets/images/women_tshirt/01.jpg';
import two from '../assets/images/women_tshirt/02.jpeg';


const Womentshirt = () => {
    return (
        <div className='mt-20 mb-20'>
            <h1 className='text-center text-5xl font-bold text-primary mb-20'>Women T-Shirts</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <img className='border-primary border-8 rounded-md' src={one} alt="" />
                <img className='border-primary border-8 rounded-md' src={two} alt="" />
            </div>
        </div>
    );
};

export default Womentshirt;