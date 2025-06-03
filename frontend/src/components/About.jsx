import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);


  return (
    <section id="about" className="py-24 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:flex items-center gap-12">
        <div className="md:w-1/2" data-aos="fade-right">
          <img
            src="/src/assets/about.svg"
            alt="About Evervue"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0" data-aos="fade-left">
          <h2 className="text-4xl font-bold text-[#4169E1] mb-4">
            About Evervue
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Evervue is more than just a gallery — it’s your digital haven to
            preserve, organize, and relive your precious memories. Designed with
            elegance and built for privacy, Evervue keeps your moments secure
            and beautifully presented.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About