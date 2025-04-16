import React from 'react';
import { Calendar, Users, MapPin, Video } from 'lucide-react';

const Videos = () => {
  const events = [
    {
      title: "Geopolitics of ICT Standardisation Focus on the USA",
      date: "December 2nd, 2024",
      organizer: "The Standards Training Academy",
      videoUrl: "https://www.youtube.com/embed/XCp8Mgq1nAU?si=z8KhjribgyLbqY-M", 
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
      videoUrl: "https://www.youtube.com/embed/AdUVYcd7jKo?si=rkAwp8xBOEjzpiK8", 
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
    },
    {
      title: "Global Standards Leadership Conference 2024",
      date: "June 13th, 2024",
      location: "Berkeley",
      organizer: "BRELA Research and Partners",
      videoUrl: "https://www.youtube.com/embed/RYz71QN2nV4?si=YjUz56_6-SONYyW2", 
      speakers: [
        "Prakash Sangam, Tantra Analyst",
        "Bowman Heiden, Haas School of Business Berkeley",
        "Siddhi Shah, Micron Technology",
        "Alan Fan, Huawei Technologies"
      ],
      topics: [
        "Status of open standards for AI",
        "Leadership in AI development",
        "Government policies for AI standards",
        "Patenting of AI innovations",
        "The role for SEPs in future AI standards"
      ]
    },
    {
      title: "European Technology Leadership Under Threat",
      date: "November 30th, 2023",
      location: "Brussels",
      organizer: "Euractiv/Nokia",
      videoUrl: "https://www.youtube.com/embed/4t_-0ADYX0s?si=9uUcbIO706o9tnHP", 
      moderator: "Jennifer Baker, Euractiv",
      speakers: [
        "Justus Baron, BRELA Research",
        "Chris Hannon, USPTO",
        "Sonja London, Tactotek",
        "Collette Rawnsley, Nokia",
        "Folkert Teernstra, TNO"
      ],
      topics: [
        "EU SEP Regulation",
        "Impact Assessment"
      ],
      links: [
        "Empirical Assessment of Potential Challenges in SEP Licensing",
        "Essentiality Checks for Potential SEPs"
      ]
    },
    {
      title: "C-IP2 Annual Fall Conference",
      date: "October 12th & 13th, 2023",
      location: "Washington D.C.",
      organizer: "C-IP2",
      videoUrl: "https://www.youtube.com/embed/A3ZnCvmAaWs?si=sS6CRFTYFGPS2zPh", 
      moderator: "Andrei Iancu, Sullivan & Cromwell",
      speakers: [
        "Ken Adamo, Law Office of KRAdamo",
        "Justus Baron, BRELA Research",
        "Claudia Tapia, 4iP Council & Ericsson",
        "John Kolakowski, Nokia Technologies"
      ],
      topics: [
        "German caselaw",
        "SEPs",
        "Injunctions"
      ]
    },
    {
      title: "4iP Council Webinar: SEP Regulation",
      date: "September 20th, 2023",
      organizer: "4iP Council",
      videoUrl: "https://www.youtube.com/embed/6UaozKj1vZw?si=V783GipaEmg24k4h", 
      moderator: "Axel Ferrazzini, 4iP Council",
      speakers: ["Justus Baron, BRELA Research"],
      topics: [
        "EU SEP Regulation",
        "Impact Assessment",
        "Aggregate Royalty determination"
      ]
    },
   
    {
      title: "Emerging issues in licensing and enforcement of Standard Essential Patents",
      date: "September 7th and 8th, 2023",
      location: "Warsaw",
      organizer: "Institute of Legal Science – Polish Academy of Science",
      videoUrl: "https://www.youtube.com/embed/48gmT8WzDkc?si=bLjlSQtd122F6cqk",
      moderator: "Toby Sears (CMS)",
      speakers: [
        "Justus Baron, BRELA Research & Northwestern University",
        "Benno Buehler, CRA International",
        "David Herrington, Cleary Gottlieb",
        "Fabian Hoffmann, Federal Court of Justice (Germany)",
        "Jorge Padilla, Compass Lexecon"
      ],
      topics: [
        "FRAND determination",
        "EU SEP Regulation",
        "Aggregate royalty determination"
      ]
    },
    {
      title: "The Economic Impact Of Patent Holdout",
      date: "June 30th, 2023",
      organizer: "4iP Council",
      videoUrl: "https://www.youtube.com/embed/rpJ4iMMG7wY?si=8byjGboBltdfaJMA",
      moderator: "Axel Ferrazzini, 4iP Council",
      speakers: [
        "Justus Baron, BRELA Research & Northwestern University",
        "Bo Heiden, Center for Intellectual Property (CIP) University of Gothenburg & UC Berkeley"
      ],
      topics: [
        "Patent infringement remedies",
        "Patent hold-out"
      ],
      links: [
        "The Economic Impact of Patent Holdout, Working Paper SSRN 4505268, July 2023"
      ]
    },
    {
      title: "Annual Conference on Global Standards Leadership",
      date: "June 22nd, 2023",
      location: "San Diego",
      organizer: "BRELA Research & Partners",
      videoUrl: "https://www.youtube.com/embed/VKTZBUNMnh8?si=PIKSJYzYiCkvLV-j",
      moderator: "Justus Baron, BRELA Research & Northwestern University",
      speakers: [
        "Sukla Chandra, General Electric",
        "Nigel Cory, ITIF",
        "Giulia Neaher, Atlantic Council"
      ],
      topics: [
        "Geopolitics of standards",
        "Standardization of critical and emerging technologies",
        "Standardization strategies"
      ]
    },
    {
      title: "Presentation of Two Empirical Studies on SEPs",
      date: "May 4th, 2023",
      location: "Brussels",
      organizer: "LexisNexis Iplytics",
      videoUrl: "https://www.youtube.com/embed/dvyVWD-qWXo?si=Dho2GQO_VJtm0-Jk",
      speakers: [
        "Pere Arque-Castells, University of Groningen",
        "Justus Baron, BRELA Research & Northwestern University",
        "Tim Pohlmann, LexisNexis iplytics",
        "Eric Sergheraert, Clarivate Darts-IP and University of Lille"
      ],
      panelists: [
        "Benno Buehler, CRA International",
        "Taraneh Maghame, Maghame Consulting",
        "Jorge Padilla, Compass Lexecon",
        "Eric Stasik, Avvika"
      ],
      topics: [
        "EU SEP Regulation",
        "Impact Assessment"
      ],
      links: [
        "Empirical Assessment of Potential Challenges in SEP Licensing",
        "Essentiality Checks for Potential SEPs"
      ]
    },
    {
      title: "The European Standardisation System at Crossroads",
      date: "May 4th, 2023",
      location: "Brussels",
      organizer: "CERRE – Centre on European Regulation",
      videoUrl: "https://www.youtube.com/embed/0dFOShZjJe0?si=UShzHOfKYFAHmW4N",
      moderator: "Alexandre de Streel, CERRE",
      speakers: [
        "Justus Baron, BRELA Research and Northwestern University",
        "MEP Adam Bielan, Member of the European Parliament",
        "Michael Eslamian, Huawei",
        "Pierre Larouche, University of Montreal",
        "Gerry McQuaid, Ofcom",
        "Sophie Mueller, European Commission",
        "Urska Petrovcic, Qualcomm",
        "Elena Santiago Cid, CEN & CENELEC"
      ],
      topics: [
        "EU Standardisation Strategy",
        "Governance of European Standards Organisations",
        "Geopolitics of Standardisation"
      ],
      links: [
        "The European Standardisation System at a Crossroads, CERRE Report, May 2023"
      ]
    },
    {
      title: "Global FRAND & SEP Symposium",
      date: "October 21st, 2022",
      location: "Mountain View",
      organizer: "Bauz IP Law",
      videoUrl: "https://www.youtube.com/embed/ZgwyPQh94uE?si=3uImvRm9NyPhkA4x",
      moderator: "Warren Lipschitz, McKool Smith",
      speakers: [
        "Justus Baron, BRELA Research & Northwestern University",
        "Kurt Kjelland, Qualcomm",
        "Joseph Matal, Haynes Boone",
        "Tim Syrett, WilmerHale"
      ],
      topics: [
        "SEP litigation",
        "Geopolitics of standardization"
      ]
    },
    {
      title: "Global Standards Leadership Conference 2022",
      date: "June 15th, 2022",
      location: "Chicago",
      organizer: "BRELA Research & Partners",
      videoUrl: "https://www.youtube.com/embed/pK39eH8ltt4?si=LCQB6h_w3t9eWDxW",
      moderator: "Justus Baron, BRELA Research and Northwestern University",
      speakers: [
        "Jorge Contreras, University of Utah",
        "Gordon Gillerman, NIST",
        "Bo Heiden, Center for Intellectual Property (CIP) University of Gothenburg & UC Berkeley",
        "Alexandra Seymour, Center for New American Security"
      ],
      topics: [
        "Standardization policy",
        "Geopolitics of standardization",
        "Standards and national security"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {event.videoUrl ? (
                <div className="aspect-w-16 aspect-h-11">
                  <iframe
                    src={event.videoUrl}
                    title={event.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full"
                  ></iframe>
                </div>
              ) : (
                <div className="bg-gray-100 aspect-w-16 aspect-h-9 flex items-center justify-center">
                  <Video className="h-12 w-12 text-gray-400" />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-blue-900 mr-2" />
                  <span className="text-blue-900 font-medium">{event.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{event.title}</h3>
                {event.location && (
                  <div className="flex items-center mb-4">
                    <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-600">{event.location}</span>
                  </div>
                )}
                <div className="flex items-start mb-4">
                  <Users className="h-5 w-5 text-gray-500 mr-2 mt-1" />
                  <div>
                    {event.moderator && (
                      <div className="mb-2">
                        <p className="font-medium text-gray-700">Moderator:</p>
                        <p className="text-gray-600 text-sm">{event.moderator}</p>
                      </div>
                    )}
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
                {event.links && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="font-medium text-gray-700 mb-2">Related Resources:</p>
                    <ul className="text-blue-600 text-sm space-y-1">
                      {event.links.map((link, idx) => (
                        <li key={idx}>
                          <a href="#" className="hover:underline">{link}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <p className="text-sm text-gray-600">
                  Organized by: {event.organizer}
                </p>
                {!event.videoUrl && (
                  <div className="mt-2 flex items-center text-blue-600 text-sm">
                    <Video className="h-4 w-4 mr-2" />
                    <span>Video coming soon</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;