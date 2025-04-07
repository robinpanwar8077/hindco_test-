import React from "react";
import { AppleIcon, CheckCircle, MonitorSmartphone } from "lucide-react";

function JobringerDownloadPage() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-pink-800 to-red-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-auto relative z-10">
                <img
                  src="https://i.ytimg.com/vi/bDOUD0FgxyM/hqdefault.jpg"
                  alt="JobRinger App Screenshot"
                  className="rounded-3xl shadow-2xl border-8 border-gray-800"
                />
              </div>

              <div className="absolute top-1/4 -left-12 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute bottom-1/4 -right-8 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get The JobRinger App
            </h2>
            <h3 className="text-xl sm:text-2xl font-medium text-pink-200 mb-6">
              Your Career Journey In Your Pocket
            </h3>

            <div className="mb-8">
              <ul className="space-y-3">
                {[
                  "Real-time job notifications",
                  "Apply to jobs with just one tap",
                  "Track your application status",
                  "Chat directly with employers",
                  "Resume builder and profile optimization",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle
                      size={20}
                      className="text-yellow-300 mr-2 flex-shrink-0"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#ios-download"
                className="flex items-center bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors duration-300 w-full sm:w-auto justify-center"
              >
                <AppleIcon size={24} className="mr-3" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">Download on the</span>
                  <span className="text-lg font-semibold">App Store</span>
                </div>
              </a>

              <a
                href="#android-download"
                className="flex items-center bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors duration-300 w-full sm:w-auto justify-center"
              >
                <MonitorSmartphone size={24} className="mr-3" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">GET IT ON</span>
                  <span className="text-lg font-semibold">Google Play</span>
                </div>
              </a>
            </div>

            <div className="mt-10 flex flex-col items-center lg:items-start"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobringerDownloadPage;
