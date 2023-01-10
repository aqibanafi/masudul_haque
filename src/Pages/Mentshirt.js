import React from 'react';
import one from '../assets/images/men_tshirt/01.jpg'
import two from '../assets/images/men_tshirt/02.jpg'
import three from '../assets/images/men_tshirt/03.jpeg'
import four from '../assets/images/men_tshirt/04.jpeg'

const Mentshirt = () => {
    return (
        <div className='mt-20 mb-20'>
            <h1 className='text-center text-5xl font-bold text-primary mb-20'>Men T-Shirts</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <img className='border-primary border-8 rounded-md' src={one} alt="" />
                <img className='border-primary border-8 rounded-md' src={two} alt="" />
                <img className='border-primary border-8 rounded-md' src={three} alt="" />
                <img className='border-primary border-8 rounded-md' src={four} alt="" />
            </div>
        </div>
    );
};

export default Mentshirt;