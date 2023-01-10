import React from 'react';
import one from '../assets/images/mascot_logo/01.jpg'
import two from '../assets/images/mascot_logo/02.jpg'
import three from '../assets/images/mascot_logo/03.jpg'
import four from '../assets/images/mascot_logo/04.jpg'


const Mascotlogo = () => {
    return (
        <div className='mt-20 mb-20'>
            <h1 className='text-center text-5xl font-bold text-primary mb-20'>Mascot Logos</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <img className='border-primary border-8 rounded-md' src={one} alt="" />
                <img className='border-primary border-8 rounded-md' src={two} alt="" />
                <img className='border-primary border-8 rounded-md' src={three} alt="" />
                <img className='border-primary border-8 rounded-md' src={four} alt="" />
            </div>
        </div>
    );
};

export default Mascotlogo;