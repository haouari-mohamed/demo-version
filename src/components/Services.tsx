import React from 'react';
import { LineChart, Users, Briefcase, Presentation as PresentationScreen, FileText } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive research and consulting services in technology standards, patents, and regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <LineChart className="h-12 w-12 text-blue-900 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Research Activities</h3>
            <p className="text-gray-600">
              Our main activity is empirical research on issues at the intersection of technology standards, intellectual property, regulation, and innovation.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <FileText className="h-12 w-12 text-blue-900 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data-Driven Studies</h3>
            <p className="text-gray-600">
              We produce data-driven analyses, which may result in publications in scholarly journals, policy briefs, and/or presentations to relevant decision makers.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <Briefcase className="h-12 w-12 text-blue-900 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Consultancy</h3>
            <p className="text-gray-600">
              We offer research and data-driven consultancy services. We can assist you with advice on standardization strategy, patent policy, and SEP licensing.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <Users className="h-12 w-12 text-blue-900 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Testimony</h3>
            <p className="text-gray-600">
              We are available to offer expert testimony on SEP Licensing and FRAND determinations.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <PresentationScreen className="h-12 w-12 text-blue-900 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Presentations</h3>
            <p className="text-gray-600">
              We analyze standards development, SEP licensing, and timely policy questions for our clients; including multinational corporations, law firms, and universities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;