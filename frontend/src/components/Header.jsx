import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="w-full h-screen flex flex-col md:flex-row items-center justify-between px-6 lg:px-24 py-10 bg-white">
      {/* Left Section */}
      <div
        className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6"
        data-aos="fade-right"
      >
        <h1 className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
          Memories are <br />
          <span className="text-[#4169E1]">Everything ...</span>
        </h1>
        <p className="text-gray-600 text-base lg:text-lg pr-6">
          Cherish every moment, capture every frame. Evervue stores your memories safely and beautifully, always at your fingertips.
        </p>
        <button
          onClick={() => navigate('/register')}
          className="bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 hover:translate-y-[-3px] transition-all duration-300"
        >
          Get Started
        </button>
      </div>

      {/* Right Section */}
      <div
        className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
        data-aos="fade-left"
      >
        <img
          src="/src/assets/header.png"
          alt="Evervue Hero"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Header;
