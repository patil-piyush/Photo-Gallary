import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 800,      // animation duration in ms
            easing: 'ease-in-out', // easing style
            once: false,         // whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <div className='flex bg-primary-500 font-mono items-center px-5 py-3 justify-between'>

            {/* Logo and Title */}
            <div className='flex items-center text-3xl' data-aos="fade-down">
                <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M37.116 23.423H27.16a2.583 2.583 0 0 1-2.582-2.583v-9.955a2.583 2.583 0 0 1 2.582-2.583h9.956a2.583 2.583 0 0 1 2.583 2.583v9.955a2.583 2.583 0 0 1-2.583 2.583m-13.781 3.066a2.56 2.56 0 0 0-1.824-1.82a2.5 2.5 0 0 0-.672-.093h-9.955a2.583 2.583 0 0 0-2.58 2.585v9.955a2.58 2.58 0 0 0 2.58 2.58h8.907" strokeWidth="1" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M22.183 22.183a2.59 2.59 0 0 0 2.487-.672m-12.165-9.006l4.456-7.713a2.583 2.583 0 0 1 3.53-.945l7.718 4.456m-2.392 17.514a2.58 2.58 0 0 0-2.482.672q-.239.233-.414.536l-4.977 8.625a2.58 2.58 0 0 0 .945 3.525l.902.522l7.718 4.455a2.583 2.583 0 0 0 3.53-.944l4.456-7.714" strokeWidth="1" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m8.303 28.21l-4.456-7.72a2.583 2.583 0 0 1 .945-3.53l7.713-4.456l.908-.521a2.59 2.59 0 0 1 3.53.944l4.977 8.626c.118.202.202.413.263.63a2.59 2.59 0 0 1-.672 2.486m4.978-1.334a2.58 2.58 0 0 0-.672 2.482q.088.325.263.63l4.978 8.625a2.583 2.583 0 0 0 3.53.944l.907-.521l7.713-4.456a2.583 2.583 0 0 0 .945-3.53l-4.456-7.718m-7.559-6.867c-2.077 0-3.889 1.18-4.876 2.934c.987 1.754 2.799 2.934 4.876 2.934s3.889-1.18 4.876-2.934c-.987-1.755-2.798-2.934-4.876-2.934" strokeWidth="1" />
                    <circle cx="32.138" cy="15.858" r="1.658" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                    <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m33.31 14.685l-2.344 2.345" strokeWidth="1" />
                </svg>
                <Link to={"/"} className='ml-1'><h1>Evervue</h1></Link>
            </div>

            {/* Navigation links */}
            <div data-aos="fade-up" data-aos-delay="100">
                <ul className='flex gap-10 items-center'>
                    <li className='hover:bg-gray-400 rounded-full p-2'><a href='#about'>About</a></li>
                    <li className='hover:bg-gray-400 rounded-full p-2'><a href='#testimonials'>Testimonials</a></li>
                    <li className='hover:bg-gray-400 rounded-full p-2'><a href='#contact'>Contact</a></li>
                    <li className='hover:bg-gray-400 rounded-full p-2'><a href='#features'>Features</a></li>
                </ul>
            </div>

            {/* User profile or login/register */}
            {token ? (
                <div className='flex items-center gap-2 cursor-pointer group relative' data-aos="zoom-in" data-aos-delay="200">
                    <img className='w-10 h-10 rounded-full ' src="/src/assets/profile.jpg" alt="Profile" />
                    <img className='w-2.5' src="/src/assets/dropdown_icon.svg" alt="Dropdown" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                            <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Account</p>
                            <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>
            ) :
                <div className='flex gap-5 pr-10'>
                    <button
                        className='cursor-pointer border-0 rounded-full shadow shadow-gray-500 py-1 px-5 bg-white hover:-translate-y-1'
                        onClick={() => navigate("/login")}
                    >
                        Log in
                    </button>
                    <button
                        className='cursor-pointer border-0 rounded-full shadow shadow-gray-500 py-1 px-5 bg-white hover:-translate-y-1'
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </button>
                </div>
            }
        </div>
    );

}

export default Navbar