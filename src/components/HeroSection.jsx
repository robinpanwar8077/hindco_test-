import React, { useState } from "react";
import { Search, Briefcase, UserPlus } from "lucide-react";

function HeroSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const quickSearchTags = [
    "Fresher",
    "Work From Home",
    "WFH",
    "IT",
    "HR",
    "Back Office",
    "BPO Jobs",
    "ITES",
    "Finance",
    "Accounts",
    "Medical",
    "Pharma",
    "Manager",
    "Developer",
    "Marketing",
    "Engineering",
    "Non Government Jobs",
  ];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-pink-800 to-red-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-1/2 h-1/2">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              fill="#FFFFFF"
              d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90.2,-16.3,88.9,-0.7C87.7,14.9,82.3,29.8,74.1,42.9C65.9,56,54.9,67.4,41.5,75.5C28.2,83.6,14.1,88.5,-0.4,89.2C-14.9,89.9,-29.8,86.4,-43.3,79.1C-56.8,71.8,-68.9,60.6,-77.4,46.9C-85.9,33.1,-90.9,16.6,-89.9,0.6C-88.8,-15.4,-81.8,-30.7,-72.5,-44.2C-63.3,-57.7,-51.8,-69.2,-38.4,-76.9C-25,-84.6,-12.5,-88.3,1.4,-90.7C15.3,-93,30.5,-83.5,44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 space-y-6">
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Bringing you the{" "}
              <span className="text-yellow-300">Perfect Job!</span>
            </h3>
            <span className="text-xl md:text-2xl font-medium text-pink-200">
              <span className="text-yellow-300 font-bold">11,000+</span> JOBS to
              Apply
            </span>
          </div>

          <div className="w-full md:w-1/2 flex flex-col space-y-6">
            <div className="flex w-full rounded-lg overflow-hidden shadow-lg">
              <input
                className="w-full bg-white  py-4 px-6 text-gray-700 focus:outline-none"
                placeholder="Search for jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="bg-gradient-to-r from-yellow-500 to-green-400 text-black px-6 py-3 font-bold hover:from-yellow-400 hover:to-green-500 transition-colors duration-300">
                <Search size={20} />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-bold flex items-center justify-center hover:opacity-90 transition-opacity duration-300 shadow-md">
                <Briefcase size={20} className="mr-2" />
                View Jobs
              </button>
              <button className="flex-1 bg-transparent border-2 border-yellow-400 text-yellow-200 py-3 px-6 rounded-lg font-bold flex items-center justify-center hover:bg-yellow-900 hover:text-yellow-100 transition-colors duration-300">
                <UserPlus size={20} className="mr-2" />
                Register for Free
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-pink-700">
          <p className="text-xl font-bold text-yellow-300 mb-4">
            Quick Job Search
          </p>
          <div className="flex flex-wrap gap-2">
            {quickSearchTags.map((tag, index) => (
              <a
                key={index}
                href={`#${tag.toLowerCase().replace(/\s+/g, "-")}`}
                className="inline-block bg-purple-800 bg-opacity-50 hover:bg-pink-800 text-pink-200 hover:text-white px-3 py-1 rounded-full text-sm transition-colors duration-200"
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
