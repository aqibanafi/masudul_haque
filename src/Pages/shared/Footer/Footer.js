import React from 'react';
import Logo from '../../../assets/images/footer_logo.png';

const Footer = () => {
    return (
        <footer className="footer flex items-center justify-between p-10 bg-primary text-white">
            <div>
                <img src={Logo} alt="" />
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 gap-y-5 font-semibold">
                    <div className='flex flex-col items-center text-base gap-2'>
                        <p>CALL</p>
                        <p>+88 01712515272</p>
                    </div>
                    <div className='flex flex-col items-center text-base gap-2'>
                        <p>E-MAIL</p>
                        <p>haque.masudull77@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;