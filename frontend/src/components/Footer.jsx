import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='px-6 py-10'>
      <hr />

      {/* Footer Main Section */}
      <div className='flex flex-col md:flex-row justify-around mt-5'>

        {/* Left: Logo and Slogan */}
        <div className='mb-6 md:mb-0'>
          {/* Logo and Evervue */}
          <div className='flex items-center gap-3'>
            <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
              <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M37.116 23.423H27.16a2.583 2.583 0 0 1-2.582-2.583v-9.955a2.583 2.583 0 0 1 2.582-2.583h9.956a2.583 2.583 0 0 1 2.583 2.583v9.955a2.583 2.583 0 0 1-2.583 2.583m-13.781 3.066a2.56 2.56 0 0 0-1.824-1.82a2.5 2.5 0 0 0-.672-.093h-9.955a2.583 2.583 0 0 0-2.58 2.585v9.955a2.58 2.58 0 0 0 2.58 2.58h8.907" strokeWidth="1" />
              <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="M22.183 22.183a2.59 2.59 0 0 0 2.487-.672m-12.165-9.006l4.456-7.713a2.583 2.583 0 0 1 3.53-.945l7.718 4.456m-2.392 17.514a2.58 2.58 0 0 0-2.482.672q-.239.233-.414.536l-4.977 8.625a2.58 2.58 0 0 0 .945 3.525l.902.522l7.718 4.455a2.583 2.583 0 0 0 3.53-.944l4.456-7.714" strokeWidth="1" />
              <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m8.303 28.21l-4.456-7.72a2.583 2.583 0 0 1 .945-3.53l7.713-4.456l.908-.521a2.59 2.59 0 0 1 3.53.944l4.977 8.626c.118.202.202.413.263.63a2.59 2.59 0 0 1-.672 2.486m4.978-1.334a2.58 2.58 0 0 0-.672 2.482q.088.325.263.63l4.978 8.625a2.583 2.583 0 0 0 3.53.944l.907-.521l7.713-4.456a2.583 2.583 0 0 0 .945-3.53l-4.456-7.718m-7.559-6.867c-2.077 0-3.889 1.18-4.876 2.934c.987 1.754 2.799 2.934 4.876 2.934s3.889-1.18 4.876-2.934c-.987-1.755-2.798-2.934-4.876-2.934" strokeWidth="1" />
              <circle cx="32.138" cy="15.858" r="1.658" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
              <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m33.31 14.685l-2.344 2.345" strokeWidth="1" />
            </svg>
            <Link to="/" className='text-3xl font-bold'><h1>Evervue</h1></Link>
          </div>

          {/* Tagline */}
          <p className='mt-3 text-gray-600'>"Secure your memories in one place."</p>
        </div>

        {/* Right: Columns */}
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 text-center md:text-left'>
          <div>
            <h2 className='font-semibold mb-2'>Quick Links</h2>
            <p>Features</p>
            <p>About</p>
            <p>Privacy</p>
          </div>

          <div>
            <h2 className='font-semibold mb-2'>Follow Us</h2>
            <p>GitHub</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
            <p>Facebook</p>
          </div>

          <div>
            <h2 className='font-semibold mb-2'>Newsletter</h2>
            <p>Email</p>
            <p>Subscribe</p>
          </div>

          <div>
            <h2 className='font-semibold mb-2'>Resources</h2>
            <p>Help Center</p>
            <p>Developer API</p>
            <p>Community</p>
            <p>Terms of Use</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='text-center mt-10 text-sm text-gray-600'>
        © 2025 Evervue. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
