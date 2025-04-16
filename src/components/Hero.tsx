import React from 'react';
import { LineChart, Search, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-white pt-20">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
          alt="Background"
        />
        <div className="absolute inset-0 bg-blue-900/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Empowering Innovation Through Research
          </h1>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            BRELA specializes in empirical analysis of technology standards, patents, litigation, and regulations to drive informed decision-making.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </a>
            <a href="#services" className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </a>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
            <LineChart className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
            <p>Comprehensive analysis of technology trends and market dynamics</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
            <Search className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Research Excellence</h3>
            <p>In-depth research methodologies and expert insights</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
            <Shield className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Patent Analysis</h3>
            <p>Strategic patent portfolio analysis and litigation support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;