import React from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';

const Videos = () => {
  const events = [
    {
      title: "Geopolitics of ICT Standardisation Focus on the USA",
      date: "December 2nd, 2024",
      organizer: "The Standards Training Academy",
      speakers: [
        "Knut Blind, Fraunhofer ISI & TU Berlin",
        "Maria P. Knake, NIST",
        "Jayne Morrow, Montana State University",
        "Mary Saunders, ANSI Senior VP",
        "Justus Baron, BRELA Research"
      ],
      topics: [
        "Introduction into standardisation and geopolitics",
        "United States Government National Standards Strategy",
        "Global Technology Standards",
        "US Participation in International Technology Standards"
      ]
    },
    {
      title: "The German Caselaw on Standard-Essential Patents",
      date: "August 26th, 2024",
      organizer: "BRELA Research & Partners",
      speakers: [
        "Peter Georg Picht, University of Zurich",
        "Tom Cotter, University of Minnesota",
        "Erik Habich, Homburger",
        "Justus Baron, BRELA Research"
      ],
      topics: [
        "SEP litigation",
        "Injunctions",
        "German caselaw",
        "Huawei v ZTE"
      ]
    }
  ];

  return (
    <section id="videos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Events & Webinars</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our latest presentations and discussions on technology standards, patents, and regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-blue-900 mr-2" />
                  <span className="text-blue-900 font-medium">{event.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{event.title}</h3>
                <div className="flex items-start mb-4">
                  <Users className="h-5 w-5 text-gray-500 mr-2 mt-1" />
                  <div>
                    <p className="font-medium text-gray-700 mb-2">Speakers:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {event.speakers.map((speaker, idx) => (
                        <li key={idx}>{speaker}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-1" />
                  <div>
                    <p className="font-medium text-gray-700 mb-2">Topics:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {event.topics.map((topic, idx) => (
                        <li key={idx}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <p className="text-sm text-gray-600">
                  Organized by: {event.organizer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;