import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import HeroSection from "./HeroSection";
import FeaturedJobs from "./FeaturedJobs";
import JobringerDownloadPage from "./JobringerDownlaodpage";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-pink-800 to-red-900 min-h-screen flex flex-col font-sans antialiased">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </header>
      <div className="relative">
        <Banner />
      </div>
      <main className="flex-grow py-10 md:py-16 lg:py-20">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
          <HeroSection />
        </section>
        <section className="bg-gradient-to-r from-purple-900 via-pink-800 to-red-900  py-10 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FeaturedJobs />
          </div>
        </section>
        <section className="py-10 md:py-16 lg:py-20 bg-gradient-to-r from-purple-900 via-pink-800 to-red-900  from-blue-100 to-indigo-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <JobringerDownloadPage />
          </div>
        </section>
      </main>
      <footer className="bg-gradient-to-r from-purple-900 via-pink-800 to-red-900 text-gray-300 py-8 md:py-12">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
