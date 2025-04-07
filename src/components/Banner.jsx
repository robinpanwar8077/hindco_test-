import React from "react";
import { Phone } from "lucide-react";

function Banner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-pink-800 to-red-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
        <div className="relative inline-block">
          <h2 className="text-4xl font-bold tracking-wide mb-2">Employers</h2>
          <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-green-400"></div>
        </div>

        <p className="text-xl font-medium text-pink-200 max-w-2xl">
          WELCOME OFFER -{" "}
          <span className="text-yellow-300 font-bold">FREE JOB</span> Postings
          and Much More.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
          <button className="bg-transparent border-2 cursor-pointer border-yellow-400 text-yellow-200 px-6 py-3 rounded-lg font-bold hover:bg-yellow-900 hover:text-yellow-100 transition-colors duration-300">
            Register for Free
          </button>
          <button className="bg-gradient-to-r  cursor-pointer  from-yellow-500 to-green-400 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-400 hover:to-green-500 transition-all duration-300 shadow-lg">
            Post A Job
          </button>
          <a
            href="#sales"
            className="flex items-center justify-center text-pink-200 hover:text-yellow-200 px-6 py-3 transition-colors duration-300 font-medium border-b border-pink-500 hover:border-yellow-400"
          >
            <Phone size={18} className="mr-2" />
            Sales Enquiry
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
