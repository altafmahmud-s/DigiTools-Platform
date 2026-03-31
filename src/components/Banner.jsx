import React from 'react';

const Banner = () => {
  return (
    <div className="hero min-h-[60vh] bg-gradient-to-br from-white to-primary/5 px-4 md:px-12 py-12">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <img
          src="/banner.png"
          className="max-w-xs md:max-w-lg rounded-2xl shadow-2xl animate-pulse-slow" 
          alt="Digital Tools Banner"
        />
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Unlock Your <span className="text-primary italic">Digital</span> Potential Today!
          </h1>
          <p className="py-6 text-lg text-gray-600 font-medium">
            Explore thousands of digital tools, from AI writing assistants to SEO suites. Everything you need to scale your online presence in one place.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button className="btn btn-primary text-white btn-lg px-8">Browse Tools</button>
            <button className="btn btn-outline btn-primary btn-lg px-8">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
