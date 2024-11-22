import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact Page',
};

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#014E56] to-[#012D3A] w-full px-5 py-10">
      <div className="max-w-[1250px] mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-[45px] md:text-[50px] font-bold text-[#014E56] leading-tight">
              Contact Us
            </h2>
            <p className="text-gray-600 text-[18px] font-medium mt-4">
              We’re here to help you connect, communicate, and collaborate effortlessly. 
              Reach out to us with any inquiries, and our team will be delighted to assist you.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="bg-[#79C8C7] text-white py-3 px-6 rounded-lg hover:bg-[#5BA7A5] transition">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
