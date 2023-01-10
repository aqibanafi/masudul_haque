import React from 'react';
import Illustration from '../../assets/icons/illustration.png';
import KidsShirt from '../../assets/icons/tshirt.png';
import Logo from '../../assets/icons//logo.png';
import MenShirt from '../../assets/icons//men_tshirt.png';
import WomenShirt from '../../assets/icons//women_tshirt.png';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='mt-20 mb-20'>
            <h1 className='text-5xl text-center font-bold mb-20'>My Projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <Link to='/illustration'>
                    <div className='illustrator-div relative shadow-xl border h-80 hover:bg-gray-600 duration-300'>
                        <img className='absolute illustrator-icon inset-0 object-cover w-full h-full lg:left-[5%]' src={Illustration} alt="" />
                        <p className='illustrator-paragraph font-bold text-4xl text-white mt-5 absolute left-[20%] md:left-[20%] xl:left-[30%] hidden'>Illustration</p>
                    </div>
                </Link>
                <Link to='/kidstshirt'>
                    <div className='kids-div relative shadow-xl border h-80 hover:bg-gray-600 duration-300'>
                        <img className='absolute kids-icon inset-0 object-cover w-72 h-72 left-[5%] top-[5%] lg:left-[5%] lg:top-[5%] xl:left-[20%] xl:top-[5%]' src={KidsShirt} alt="" />
                        <p className='kids-paragraph font-bold text-4xl text-white mt-5 absolute left-[20%] md:left-[20%] xl:left-[30%] hidden'>Kids T-Shirt</p>
                    </div>
                </Link>
                <Link to='/mascotlogo'>
                    <div className='kids-div relative shadow-xl border h-80 hover:bg-gray-600 duration-300'>
                        <img className='absolute kids-icon inset-0 object-cover w-72 h-72 left-[5%] top-[5%] lg:left-[5%] lg:top-[5%] xl:left-[20%] xl:top-[5%]' src={Logo} alt="" />
                        <p className='kids-paragraph font-bold text-4xl text-white mt-5 absolute left-[20%] md:left-[20%] xl:left-[30%] hidden'>Mascot Logo</p>
                    </div>
                </Link>
                <Link to='/mentshirt'>
                    <div className='kids-div relative shadow-xl border h-80 hover:bg-gray-600 duration-300'>
                        <img className='absolute kids-icon inset-0 object-cover w-72 h-72 left-[5%] top-[5%] lg:left-[5%] lg:top-[5%] xl:left-[20%] xl:top-[5%]' src={MenShirt} alt="" />
                        <p className='kids-paragraph font-bold text-4xl text-white mt-5 absolute left-[20%] md:left-[20%] xl:left-[30%] hidden'>Men T-Shirt</p>
                    </div>
                </Link>
                <Link to='/womentshirt'>
                    <div className='kids-div relative shadow-xl border h-80 hover:bg-gray-600 duration-300'>
                        <img className='absolute kids-icon inset-0 object-cover w-80 h-80 xl:left-[15%]' src={WomenShirt} alt="" />
                        <p className='kids-paragraph font-bold text-4xl text-white mt-5 absolute left-[10%] lg:left-[25%] hidden'>Women T-Shirt</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Projects;