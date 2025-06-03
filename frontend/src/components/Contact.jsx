import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section id="contact" className="bg-primary-100 py-16 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between overflow-hidden">
        {/* Image */}
        <div
          className="w-full md:w-1/2 flex items-center justify-center p-6"
          data-aos="fade-right"
        >
          <img
            src="/src/assets/contact.svg"
            alt="Contact illustration"
            className="w-full max-w-md bg-primary-200 rounded-full p-10"
          />
        </div>

        {/* Form */}
        <div
          className="w-full md:w-1/2 p-8 md:px-20"
          data-aos="fade-left"
        >
          <form
            action="#"
            method="POST"
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#4169E1] mb-4">
              Get in Touch
            </h2>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                placeholder="you@example.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                placeholder="Your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#4169E1] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
