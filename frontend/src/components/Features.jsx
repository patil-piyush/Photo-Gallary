import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {


  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section id="features" className="py-24 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#4169E1] mb-12" data-aos="fade-up">
          Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-2xl font-semibold text-[#4169E1] mb-3">
              Secure Cloud
            </h3>
            <p className="text-gray-600">
              Your memories are encrypted and safe with military-grade cloud
              security.
            </p>
          </div>
          <div
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-semibold text-[#4169E1] mb-3">
              Smart Albums
            </h3>
            <p className="text-gray-600">
              Auto-organize photos by tags, people, and locations. Minimal
              effort, maximum joy.
            </p>
          </div>
          <div
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-2xl font-semibold text-[#4169E1] mb-3">
              Instant Access
            </h3>
            <p className="text-gray-600">
              Sync across devices seamlessly and access your memories anytime,
              anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Features