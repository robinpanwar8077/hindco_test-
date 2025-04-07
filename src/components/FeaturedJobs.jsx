import React, { useState, useEffect } from "react";
import {
  MapPin,
  Briefcase,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function FeaturedJobs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const cardsPerPage = 3;

  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechNova Solutions",
      location: "New York, NY",
      type: "Full-time",
      postedTime: "2 days ago",
      salary: "$120K - $150K",
      logo: "https://imgs.search.brave.com/L3NsCWcqIsa85M6J1MvqKsxLuOFXumrHwl5Z_jEhQgY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jYW50/by13cC1tZWRpYS5z/My5hbWF6b25hd3Mu/Y29tL2FwcC91cGxv/YWRzLzIwMTkvMDcv/MTkxOTQ0MTcvaW5z/ZXJ0LWltYWdlLWh0/bWwuanBn",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Creative Minds Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      postedTime: "1 week ago",
      salary: "$90K - $110K",
      logo: "https://imgs.search.brave.com/L3NsCWcqIsa85M6J1MvqKsxLuOFXumrHwl5Z_jEhQgY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jYW50/by13cC1tZWRpYS5z/My5hbWF6b25hd3Mu/Y29tL2FwcC91cGxv/YWRzLzIwMTkvMDcv/MTkxOTQ0MTcvaW5z/ZXJ0LWltYWdlLWh0/bWwuanBn",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "Cloud Systems",
      location: "Remote",
      type: "Contract",
      postedTime: "3 days ago",
      salary: "$100K - $130K",
      logo: "https://imgs.search.brave.com/L3NsCWcqIsa85M6J1MvqKsxLuOFXumrHwl5Z_jEhQgY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jYW50/by13cC1tZWRpYS5z/My5hbWF6b25hd3Mu/Y29tL2FwcC91cGxv/YWRzLzIwMTkvMDcv/MTkxOTQ0MTcvaW5z/ZXJ0LWltYWdlLWh0/bWwuanBn",
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "DataSmart Analytics",
      location: "Boston, MA",
      type: "Full-time",
      postedTime: "Just now",
      salary: "$110K - $140K",
      logo: "https://imgs.search.brave.com/L3NsCWcqIsa85M6J1MvqKsxLuOFXumrHwl5Z_jEhQgY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jYW50/by13cC1tZWRpYS5z/My5hbWF6b25hd3Mu/Y29tL2FwcC91cGxv/YWRzLzIwMTkvMDcv/MTkxOTQ0MTcvaW5z/ZXJ0LWltYWdlLWh0/bWwuanBn",
    },
    {
      id: 5,
      title: "Frontend Developer",
      company: "WebWizards",
      location: "Austin, TX",
      type: "Part-time",
      postedTime: "5 days ago",
      salary: "$70K - $90K",
      logo: "https://imgs.search.brave.com/L3NsCWcqIsa85M6J1MvqKsxLuOFXumrHwl5Z_jEhQgY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jYW50/by13cC1tZWRpYS5z/My5hbWF6b25hd3Mu/Y29tL2FwcC91cGxv/YWRzLzIwMTkvMDcv/MTkxOTQ0MTcvaW5z/ZXJ0LWltYWdlLWh0/bWwuanBn",
    },
    {
      id: 6,
      title: "Product Manager",
      company: "Innovate Inc.",
      location: "Seattle, WA",
      type: "Full-time",
      postedTime: "1 day ago",
      salary: "$130K - $160K",
      logo: "https://imgs.search.brave.com/L3NsCWcqIsa85M6J1MvqKsxLuOFXumrHwl5Z_jEhQgY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jYW50/by13cC1tZWRpYS5z/My5hbWF6b25hd3Mu/Y29tL2FwcC91cGxv/YWRzLzIwMTkvMDcv/MTkxOTQ0MTcvaW5z/ZXJ0LWltYWdlLWh0/bWwuanBn",
    },
    {
      id: 7,
      title: "Software Engineer",
      company: "CodeCraft",
      location: "Chicago, IL",
      type: "Full-time",
      postedTime: "4 days ago",
      salary: "$95K - $125K",
      logo: "https://imgs.search.brave.com/L3NsCWcqIsa85M6J1MvqKsxLuOFXumrHwl5Z_jEhQgY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jYW50/by13cC1tZWRpYS5z/My5hbWF6b25hd3Mu/Y29tL2FwcC91cGxv/YWRzLzIwMTkvMDcv/MTkxOTQ0MTcvaW5z/ZXJ0LWltYWdlLWh0/bWwuanBn",
    },
    {
      id: 8,
      title: "Mobile App Developer",
      company: "AppVision",
      location: "Los Angeles, CA",
      type: "Full-time",
      postedTime: "2 weeks ago",
      salary: "$90K - $115K",
      logo: "https://imgs.search.brave.com/L3NsCWcqIsa85M6J1MvqKsxLuOFXumrHwl5Z_jEhQgY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jYW50/by13cC1tZWRpYS5z/My5hbWF6b25hd3Mu/Y29tL2FwcC91cGxv/YWRzLzIwMTkvMDcv/MTkxOTQ0MTcvaW5z/ZXJ0LWltYWdlLWh0/bWwuanBn",
    },
    {
      id: 9,
      title: "Network Administrator",
      company: "SecureNet",
      location: "Denver, CO",
      type: "Full-time",
      postedTime: "3 days ago",
      salary: "$85K - $105K",
      logo: "https://imgs.search.brave.com/L3NsCWcqIsa85M6J1MvqKsxLuOFXumrHwl5Z_jEhQgY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jYW50/by13cC1tZWRpYS5z/My5hbWF6b25hd3Mu/Y29tL2FwcC91cGxv/YWRzLzIwMTkvMDcv/MTkxOTQ0MTcvaW5z/ZXJ0LWltYWdlLWh0/bWwuanBn",
    },
    {
      id: 10,
      title: "AI Research Scientist",
      company: "Future Tech Labs",
      location: "Remote",
      type: "Full-time",
      postedTime: "1 week ago",
      salary: "$140K - $180K",
      logo: "https://imgs.search.brave.com/L3NsCWcqIsa85M6J1MvqKsxLuOFXumrHwl5Z_jEhQgY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jYW50/by13cC1tZWRpYS5z/My5hbWF6b25hd3Mu/Y29tL2FwcC91cGxv/YWRzLzIwMTkvMDcv/MTkxOTQ0MTcvaW5z/ZXJ0LWltYWdlLWh0/bWwuanBn",
    },
  ];

  const totalPages = Math.ceil(jobs.length / cardsPerPage);

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === totalPages - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, totalPages]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8    bg-gradient-to-r from-purple-900 via-pink-800 to-red-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Featured Jobs</h2>
          <p className="mt-2 text-lg text-gray-600">
            Discover your next career opportunity
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full border-t-4 border-purple-600 hover:shadow-xl transition-shadow duration-300">
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {job.title}
                          </h3>
                          <p className="text-purple-800 font-medium">
                            {job.company}
                          </p>
                        </div>
                        <div className="w-12 h-12 flex-shrink-0">
                          <img
                            src={job.logo}
                            alt={`${job.company} logo`}
                            className="w-full h-full object-contain rounded"
                          />
                        </div>
                      </div>

                      <div className="mb-4 flex flex-wrap">
                        <div className="flex items-center text-gray-600 mr-4 mb-2">
                          <MapPin size={16} className="mr-1 text-pink-600" />
                          <span className="text-sm">{job.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600 mr-4 mb-2">
                          <Briefcase size={16} className="mr-1 text-pink-600" />
                          <span className="text-sm">{job.type}</span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Clock size={16} className="mr-1 text-pink-600" />
                          <span className="text-sm">{job.postedTime}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                          {job.salary}
                        </span>
                        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-colors duration-300">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoplay(false);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-purple-600" : "bg-gray-300"
              } transition-colors duration-300`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedJobs;
