import React from 'react';
import ProfilePicture from '../../assets/images/profile_picture.png';
import Line from '../../assets/icons/picture_line.png';
import Instagram from '../../assets/icons/instagram.png';
import Behance from '../../assets/icons/behance.png';

const Home = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 mt-20 mb-20'>
            <div className='bg-white rounded-3xl flex flex-col shadow-2xl'>
                <div className='bg-accent rounded-t-3xl p-24 flex flex-col items-center '>
                    <div className='mb-5'>
                        <img src={ProfilePicture} alt="" />
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-4xl font-bold text-primary text-center'>Mohammad Masudull Haque</h1>
                    </div>
                    <div className='mb-10'>
                        <img src={Line} alt="" />
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold text-primary'>GRAPHIC DESIGNER</h1>
                    </div>
                </div>
                <div className='flex mt-16 items-center justify-evenly mb-14 lg:mb-0'>
                    <div>
                        <p className='text-3xl font-medium'>Follow On</p>
                    </div>
                    <div className='flex gap-5'>
                        <a href=""><img className='h-10 w-10' src={Instagram} alt="" /></a>
                        <a href=""><img className='h-10 w-10' src={Behance} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className='p-20'>
                <h1 className='text-6xl font-bold text-primary mb-10'>Hello <br /> Everyone</h1>
                <h2 className='text-3xl font-normal mb-6'>Here's Who I am & What I do</h2>
                <div className='flex gap-5 mb-9'>
                    <button className="btn btn-sm bg-primary border-0 text-white font-bold hover:bg-accent hover:text-black">RESUME</button>
                    <button className="btn btn-sm btn-outline text-black font-bold hover:bg-primary hover:text-white">PROJECTS</button>
                </div>
                <p className='font-normal text-black text-xl'>I'm a professional graphic designer and free hand sketch artist. I am able to do any kind of design.
                    If you are seeking someone who can provide creative designs for various uses and work directly with clients on multiple projects,
                    and that is exactly what I am prepared for. As Graphic Designer, I collaborate directly with clients to develop and manage projects and
                    I conduct my design expertise for T-Shirt and Mascot Illustration design. In addition, I am highly creative,
                    have a strong sense of overall design layouts, and can help clients to articulate their desires clearly.
                    I always effort my best design to my honorable customer until their satisfied.</p>
            </div>
        </div>
    );
};

export default Home;