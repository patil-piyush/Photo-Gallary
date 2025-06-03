import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);


  return (
    <section id="testimonials" className="py-24 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#4169E1] mb-12" data-aos="fade-up">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div
            className="bg-gray-100 p-8 rounded-lg shadow-md"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <p className="italic text-lg text-gray-700">
              “Evervue makes reliving memories a treat. It’s beautiful, secure,
              and smartly built.”
            </p>
            <h4 className="mt-4 font-semibold text-[#4169E1]">
              – Ayesha R., Photographer
            </h4>
          </div>
          <div
            className="bg-gray-100 p-8 rounded-lg shadow-md"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <p className="italic text-lg text-gray-700">
              “Perfect for someone like me who travels often. Photos get
              organized instantly. Love it!”
            </p>
            <h4 className="mt-4 font-semibold text-[#4169E1]">
              – Karan M., Travel Blogger
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials