import React from 'react';
import { Element } from 'react-scroll';
import { ContactInfoCard } from './contactInfoCard';

export const Contact = () => {
  return (
    <Element name="contact">
      <div className="max-w-6xl w-full mx-auto p-6  shadow-md rounded-lg border-solid border-2 border-blue-300 mb-16 mt-16">
        <h2 className="text-3xl text-center text-black font-bold mb-6">Contact Me</h2>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Contact Info Section */}
          <div className="flex-1">
            <ContactInfoCard text="https://www.linkedin.com/in/yuran-nhassengo/" />
            <ContactInfoCard text="+258849102433" />
          </div>

          {/* Form Section */}
          <form action="" className="flex-1">
            <div className="mb-4">
              <label className="block text-gray-700 text-2xl font-semibold mb-2"
               htmlFor="fullName">Full Name:</label>
              <input
                id="fullName"
                placeholder="Yuran Oscar Nhassengo"
                className="w-full px-3 py-2 border rounded-lg bg-white focus:border-blue-300 focus:ring focus:ring-blue-200"
                required
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700
               text-2xl font-semibold mb-2" htmlFor="email">Email:</label>
              <input
                id="email"
                placeholder="yurannhassengo@gmail.com"
                className="w-full px-3 py-2 border rounded-lg bg-white focus:border-blue-300 focus:ring focus:ring-blue-200"
                required
                type="email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-2xl 
              font-semibold mb-2" htmlFor="subject">Subject:</label>
              <textarea
                id="subject"
                rows="4"
                placeholder="Escreva a sua Mensagem...."
                className="w-full px-3 py-2 border rounded-lg bg-white focus:border-blue-300 focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className=" btn btn-md border-solid border-2  font-semibold px-4 py-2 rounded-lg bg-blue-300 border-blue-300
                hover:bg-transparent hover:text-black transition-all"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Element>
  );
};
