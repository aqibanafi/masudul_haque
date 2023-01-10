import React from 'react';
import one from '../assets/images/illustrations/01.jpg'
import two from '../assets/images/illustrations/02.jpg'
import three from '../assets/images/illustrations/03.jpg'
import four from '../assets/images/illustrations/04.jpg'
import five from '../assets/images/illustrations/05.jpg'
import six from '../assets/images/illustrations/06.jpg'

const Illustration = () => {
    return (
        <div className='mt-20 mb-20'>
            <h1 className='text-center text-5xl font-bold text-primary mb-20'>All Illustrators</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <img className='border-primary border-8 rounded-md' src={one} alt="" />
                <img className='border-primary border-8 rounded-md' src={two} alt="" />
                <img className='border-primary border-8 rounded-md' src={three} alt="" />
                <img className='border-primary border-8 rounded-md' src={four} alt="" />
                <img className='border-primary border-8 rounded-md' src={five} alt="" />
                <img className='border-primary border-8 rounded-md' src={six} alt="" />
            </div>
        </div>
    );
};

export default Illustration;