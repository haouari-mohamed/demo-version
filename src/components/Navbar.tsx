import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-900">BRELA</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-900">About Us</a>
            <a href="#services" className="text-gray-700 hover:text-blue-900">Services</a>
            <a href="#videos" className="text-gray-700 hover:text-blue-900">Videos</a>
            
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('publications')}
                className="flex items-center text-gray-700 hover:text-blue-900"
              >
                Publications <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ${activeDropdown === 'publications' ? 'block' : 'hidden'}`}>
                <a href="#featured" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Featured</a>
                <a href="#whitepaper" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">White Papers</a>
                <a href="#others" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Others</a>
              </div>
            </div>

            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('events')}
                className="flex items-center text-gray-700 hover:text-blue-900"
              >
                Events <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ${activeDropdown === 'events' ? 'block' : 'hidden'}`}>
                <a href="#upcoming" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Upcoming</a>
                <a href="#webinars" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Webinars</a>
                <a href="#past" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Past Events</a>
              </div>
            </div>

            <a href="#resources" className="text-gray-700 hover:text-blue-900">Resources</a>
            <a href="#team" className="text-gray-700 hover:text-blue-900">Team</a>
            <a href="#contact" className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">About Us</a>
          <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Services</a>
          <a href="#videos" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Videos</a>
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('publications-mobile')}
              className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 flex items-center justify-between"
            >
              Publications <ChevronDown className="h-4 w-4" />
            </button>
            <div className={`${activeDropdown === 'publications-mobile' ? 'block' : 'hidden'} pl-4`}>
              <a href="#featured" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Featured</a>
              <a href="#whitepaper" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">White Papers</a>
              <a href="#others" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Others</a>
            </div>
          </div>
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('events-mobile')}
              className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 flex items-center justify-between"
            >
              Events <ChevronDown className="h-4 w-4" />
            </button>
            <div className={`${activeDropdown === 'events-mobile' ? 'block' : 'hidden'} pl-4`}>
              <a href="#upcoming" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Upcoming</a>
              <a href="#webinars" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Webinars</a>
              <a href="#past" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Past Events</a>
            </div>
          </div>
          <a href="#resources" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Resources</a>
          <a href="#team" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Team</a>
          <a href="#contact" className="block px-3 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;