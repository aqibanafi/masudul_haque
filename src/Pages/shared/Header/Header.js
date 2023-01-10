import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../assets/images/logo_header.png';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to='/aboutme' className={({ isActive }) =>
                            isActive ? "bg-accent py-3 px-3 rounded text-white font-medium" : "text-black mr-3 p-3 hover:text-primary hover:bg-accent hover:rounded font-medium"
                        }><li>ABOUT ME</li></NavLink>
                        <NavLink to='/resume' className={({ isActive }) =>
                            isActive ? "bg-accent py-3 px-3 rounded text-white font-medium" : "text-black mr-3 p-3 hover:text-primary hover:bg-accent hover:rounded font-medium"
                        }><li>RESUME</li></NavLink>
                        <NavLink to='/projects' className={({ isActive }) =>
                            isActive ? "bg-accent py-3 px-3 rounded text-white font-medium" : "text-black mr-3 p-3 hover:text-primary hover:bg-accent hover:rounded font-medium"
                        }><li>PROJECTS</li></NavLink>
                        <NavLink to='/contact' className={({ isActive }) =>
                            isActive ? "bg-accent py-3 px-3 rounded text-white font-medium" : "text-black mr-3 p-3 hover:text-primary hover:bg-accent hover:rounded font-medium"
                        }><li>CONTACT</li></NavLink>
                    </ul>
                </div>
                <Link to='/'><img src={Logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to='/aboutme' className={({ isActive }) =>
                        isActive ? "bg-accent py-3 px-3 mr-3 rounded text-white font-medium" : "text-black mr-3 p-3 hover:text-primary hover:bg-accent hover:rounded font-medium"
                    }><li>ABOUT ME</li></NavLink>
                    <NavLink to='/resume' className={({ isActive }) =>
                        isActive ? "bg-accent py-3 px-3 mr-3 rounded text-white font-medium" : "text-black mr-3 p-3 hover:text-primary hover:bg-accent hover:rounded font-medium"
                    }><li>RESUME</li></NavLink>
                    <NavLink to='/projects' className={({ isActive }) =>
                        isActive ? "bg-accent py-3 px-3 mr-3 rounded text-white font-medium" : "text-black mr-3 p-3 hover:text-primary hover:bg-accent hover:rounded font-medium"
                    }><li>PROJECTS</li></NavLink>
                    <NavLink to='/contact' className={({ isActive }) =>
                        isActive ? "bg-accent py-3 px-3 rounded text-white font-medium" : "text-black mr-3 p-3 hover:text-primary hover:bg-accent hover:rounded font-medium"
                    }><li>CONTACT</li></NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className="btn bg-primary border-0 text-white hover:bg-accent">Login</Link>
            </div>
        </div>
    );
};

export default Header;