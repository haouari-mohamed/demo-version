import React from 'react';

const Team = () => {
  const team = [
    {
      name: 'Santiago Bergallo',
      role: 'Project Manager and Data Scientist at BRELA',
      image: 'https://i0.wp.com/brela-research.com/wp-content/uploads/2024/10/DSF4242-2-1.jpg?resize=643%2C1024&ssl=1',
      bio: 'Santiago is the Project Manager and Data Scientist at BRELA Research in Economics and Legal Analytics. He is responsible for effective communication within the team and for organizing the team through the agile approach to BRELA projects',
    },
    {
      name: 'Justus Baron',
      role: 'Director and founder of BRELA',
      image: 'https://i0.wp.com/brela-research.com/wp-content/uploads/2023/10/dsf4798.jpg?resize=1024%2C1536&ssl=1',
      bio: 'Justus is the director and founder of BRELA, and the lead researcher for BRELA’s research publications and reports. He is also an academic researcher',
    },
  ];

  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our expert team of researchers and consultants who drive innovation through empirical analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-w-3 aspect-h-2">
              <img
                  className="w-full h-30 object-cover object-top"
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-900 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;