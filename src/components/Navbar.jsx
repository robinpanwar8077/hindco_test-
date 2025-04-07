import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-purple-900 via-pink-800 to-red-900 text-white shadow-lg w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            className="h-14 w-auto"
                            src="https://www.jobringer.com/images/logonew.svg"
                            alt="JobRinger Logo"
                        />
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <ul className="flex space-x-6">
                            <li className="text-pink-200 hover:text-yellow-200 font-medium cursor-pointer transition-colors duration-200">
                                Jobs
                            </li>
                            <li className="text-pink-200 hover:text-yellow-200 font-medium cursor-pointer transition-colors duration-200">
                                Active Employers
                            </li>
                            <li className="text-pink-200 hover:text-yellow-200 font-medium cursor-pointer transition-colors duration-200">
                                Blogs
                            </li>
                            <li className="text-pink-200 hover:text-yellow-200 font-medium cursor-pointer transition-colors duration-200">
                                Pricing
                            </li>
                        </ul>
                        <div className="flex space-x-3 ml-6">
                            <button className="bg-transparent border-2 border-yellow-400  cursor-pointer   text-yellow-200 px-4 py-2 rounded-md font-medium hover:bg-yellow-900 hover:text-yellow-100 transition-colors duration-300">
                                Register for FREE
                            </button>
                            <button className="bg-gradient-to-r from-yellow-500 to-green-400  cursor-pointer      text-black font-bold px-4 py-2 rounded-md hover:from-yellow-400 hover:to-green-500 transition-all duration-300 shadow-md">
                                Post A Job
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-pink-200 hover:text-yellow-200 focus:outline-none"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-gradient-to-b from-purple-900 to-red-900">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <ul className="flex flex-col space-y-2">
                            <li className="text-pink-200 hover:text-yellow-200 font-medium p-2 rounded hover:bg-purple-800 transition-colors duration-200 cursor-pointer">
                                Jobs
                            </li>
                            <li className="text-pink-200 hover:text-yellow-200 font-medium p-2 rounded hover:bg-purple-800 transition-colors duration-200 cursor-pointer">
                                Active Employers
                            </li>
                            <li className="text-pink-200 hover:text-yellow-200 font-medium p-2 rounded hover:bg-purple-800 transition-colors duration-200 cursor-pointer">
                                Blogs
                            </li>
                            <li className="text-pink-200 hover:text-yellow-200 font-medium p-2 rounded hover:bg-purple-800 transition-colors duration-200 cursor-pointer">
                                Pricing
                            </li>
                        </ul>
                        <div className="flex flex-col space-y-3 pt-4 pb-2">
                            <button className="bg-transparent border-2    cursor-pointer  border-yellow-400 text-yellow-200 px-4 py-2 rounded-md font-medium hover:bg-yellow-900 hover:text-yellow-100 transition-colors duration-300">
                                Register for FREE
                            </button>
                            <button className="bg-gradient-to-r from-yellow-500 to-green-400  cursor-pointer      text-black font-bold px-4 py-2 rounded-md hover:from-yellow-400 hover:to-green-500 transition-all duration-300 shadow-md">
                                Post A Job
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
