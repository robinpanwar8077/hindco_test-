import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Sparkles } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-pink-800 to-red-900 text-white py-12 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="rounded-lg bg-black bg-opacity-10 backdrop-filter backdrop-blur-md p-6">
            <h6 className="font-semibold text-lg text-yellow-300 mb-3 flex items-center">
              <Sparkles className="mr-2" size={20} /> JOBS IN INDIA
            </h6>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <ul className="space-y-1">
                <li>#Mumbai</li>
                <li>#Delhi</li>
                <li>#Ajmer</li>
                <li>#Pune</li>
                <li>#Hyderabad</li>
                <li>#Agra</li>
              </ul>
              <ul className="space-y-1">
                <li>#Chennai</li>
                <li>#Kolkata</li>
                <li>#Indore</li>
                <li>#Gurugram</li>
                <li>#Jaipur</li>
                <li>#Ahmedabad</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-black bg-opacity-10 backdrop-filter backdrop-blur-md p-6">
            <h6 className="font-semibold text-lg text-pink-300 mb-3 flex items-center">
              <Sparkles className="mr-2" size={20} /> INTERNATIONAL JOBS
            </h6>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <ul className="space-y-1">
                <li>#Africa</li>
                <li>#USA</li>
                <li>#UK</li>
                <li>#Australia</li>
                <li>#Canada</li>
                <li>#Singapore</li>
              </ul>
              <ul className="space-y-1">
                <li>#Dubai</li>
                <li>#SaudiArabia</li>
                <li>#NewZealand</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-black bg-opacity-10 backdrop-filter backdrop-blur-md p-6 text-center md:text-left">
            <h6 className="font-semibold text-lg text-teal-300 mb-3">
              QUICK STATS
            </h6>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-300">Jobs Posted</p>
                <p className="text-xl font-bold text-white">
                  {new Intl.NumberFormat("en-IN").format(38223)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-300">Jobs Filled</p>
                <p className="text-xl font-bold text-white">
                  {new Intl.NumberFormat("en-IN").format(15153)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-300">Employers</p>
                <p className="text-xl font-bold text-white">
                  {new Intl.NumberFormat("en-IN").format(24058)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-300">Active Users</p>
                <p className="text-xl font-bold text-white">
                  {new Intl.NumberFormat("en-IN").format(1475492)}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-black bg-opacity-10 backdrop-filter backdrop-blur-md p-6">
            <p className="text-xs text-gray-400 mb-4">
              <strong className="text-white">Disclaimer:</strong> All Trademarks
              and Logos are the property of their respective owners, depicted
              here purely for representation purpose. Jobbringer.com has taken
              all reasonable steps to ensure that information on this site is
              genuine. Job Applicants are advised to evaluate independently.
              Jobbringer.com shall not have any responsibility in this regard.
              All Jobseeker services are strictly designed & meant only for job
              search assistance and to maximize the chances for the jobseekers
              to get their dream job. All Job Seeker Credentials and Employment
              Opportunities are subject to individual merit & evaluation. We do
              not guarantee any job to any jobseeker.
            </p>
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-sm text-gray-300 mr-2">Recognized by</span>
              <div className="w-32 rounded-md overflow-hidden shadow-md">
                <img
                  src="data:image/png;base64,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"
                  alt="Recognized by Startup India"
                  className="block w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-opacity-30 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h6 className="font-semibold text-sm text-gray-300 mb-2">
              Connect With Us
            </h6>
            <ul className="flex items-center justify-center md:justify-start space-x-4">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FaFacebook size={20} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FaTwitter size={20} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FaInstagram size={20} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FaYoutube size={20} />
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm text-center md:text-right">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4 mb-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Terms and conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Refund & Cancellation Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Blogs
                </a>
              </li>
            </ul>
            <p className="text-gray-400 text-xs">
              &copy; All Rights Reserved @ 2025 Jobtech Ventures Private
              Limited.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
