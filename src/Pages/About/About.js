import React from 'react';
import picture from '../../assets/images/about_picture.jpg';

const About = () => {
    return (
        <div className='mt-20 mb-20'>
            <h1 className='text-5xl text-center font-bold mb-20'>About me</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
                <div>
                    <img src={picture} alt="" />
                </div>
                <div>
                    <p className='font-normal text-lg'><span className='font-bold text-3xl'>HELLO EVERYONE!</span> <br /> <br />
                        Here's who I am and what I do.

                        I'm a professional graphic designer and free hand sketch artist. I am able to do any kind of design. <br /> <br />
                        If you are seeking someone who can provide creative designs for various uses and work directly with clients on multiple projects,
                        and that is exactly what I am prepared for. As Graphic Designer, I collaborate directly with clients to develop and manage projects and
                        I conduct my design expertise for T-Shirt and Mascot Illustration design. In addition, I am highly creative,
                        have a strong sense of overall design layouts, and can help clients to articulate their desires clearly.
                        I always effort my best design to my honorable customer until their satisfied.
                        <br /> <br />
                        Best regards <br />
                        Mohammad Masudull Haque</p>
                </div>
            </div>
        </div>
    );
};

export default About;