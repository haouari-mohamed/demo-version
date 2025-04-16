import React from 'react';
import { Target, History } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            BRELA Research in Economics and Legal Analytics is a research and consulting company that specializes in the empirical analysis of technology standards, patents, litigation, and regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-blue-900 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our core mission is to produce objective and reliable evidence on complex issues at the interface of economics, technology, law, and policy. BRELA is a research-based and data-driven company. We have created and are using large-scale databases on technology standards, standardization activities, patents, regulations, court cases, and more.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Most of our team members are researchers with academic degrees in quantitative fields including economics, engineering, data science, and physics. We also fully understand the multifaceted legal, institutional, and policy implications of our research, and have experience with communicating complex findings to lay audiences.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <History className="h-8 w-8 text-blue-900 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">Our History</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Dr. Justus Baron is a recognized empirical economist, academic researcher, and expert on technology standards and Standard-Essential Patents (SEP). He is a Research Director at Northwestern University's Center on Law, Business, and Economics (CLBE) in Chicago. He created BRELA Bureau d'Etudes SARL AU in December 2022.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;