import React from 'react';
import { FileText, Download, Database } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      title: "Standards Count Time Series",
      description: "Data from 'Technological Standardization, Endogenous Productivity and Transitory Dynamics' by Julia Schmidt and Justus Baron",
      files: [
        {
          name: "Standard_series_33_35_US",
          type: "XLS",
          url: "#"
        },
        {
          name: "READ ME",
          type: "PDF",
          url: "#"
        },
        {
          name: "Code_package",
          type: "ZIP",
          url: "#"
        },
        {
          name: "R_files",
          type: "ZIP",
          url: "#"
        },
        {
          name: "Output_data",
          type: "ZIP",
          url: "#"
        }
      ]
    }
  ];

  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We have created various databases that are available for free to academic researchers. For full information regarding the data and the conditions for access, please visit the website of the Center on Law, Business, and Economics at Northwestern University.
          </p>
        </div>

        <div className="space-y-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-start mb-6">
                <Database className="h-8 w-8 text-blue-900 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600">{resource.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resource.files.map((file, fileIndex) => (
                  <div
                    key={fileIndex}
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <FileText className="h-6 w-6 text-blue-900 mr-3" />
                    <div className="flex-grow">
                      <p className="text-sm font-medium text-gray-900">{file.name}</p>
                      <p className="text-xs text-gray-500">{file.type} file</p>
                    </div>
                    <a
                      href={file.url}
                      className="ml-4 p-2 text-blue-900 hover:bg-blue-50 rounded-full transition-colors"
                      title={`Download ${file.name}`}
                    >
                      <Download className="h-5 w-5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <div className="flex items-start">
            <Database className="h-8 w-8 text-blue-900 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Additional Research Databases</h3>
              <p className="text-gray-600 mb-4">
                Access our comprehensive research databases through the Center on Law, Business, and Economics at Northwestern University.
              </p>
              <a
                href="https://www.law.northwestern.edu/research-faculty/clbe/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-900 hover:text-blue-700"
              >
                Visit CLBE Website
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;