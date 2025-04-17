import React from 'react';
import { FileText, BookOpen, Download, ChevronRight } from 'lucide-react';

const Publications = () => {
  const featuredPublications = [
    {
      title: "Empirical analysis of the German caselaw on SEP injunctions after Huawei v ZTE",
      description: "This paper presents the results of a comprehensive empirical analysis of the German caselaw on SEP injunctions. We coded 80 Regional Court and 20 Higher Regional Court decisions in which a court adjudicated a FRAND defense to answer the following questions: How successful are accused infringers' FRAND defenses in German courts; and how prevalent are different reasons for SEP holders or implementers to prevail? How do the duration of negotiations and the nature of the proposed licensing offer (pool or bilateral license, worldwide or national license) correlate with the outcome of litigation? How often do injunction awards in SEP litigation conflict with parallel validity proceedings? Our data analysis reveals that defendants often prevailed on the merits of their FRAND defense. Nevertheless, most of the recent disputes resulted in the grant of an injunction. We also corroborate concerns regarding bifurcation between infringement and validity proceedings; and highlight the relative scarcity of court reviews of the substantive FRAND compliance of a SEP owner's licensing offer.",
      links: [
        { text: "READ WHITE PAPER", url: "#" },
        { text: "READ REPORT", url: "#" }
      ]
    },
    {
      title: "MEASURING COMPANIES' IMPACT IN 3GPP STANDARDS DEVELOPMENT – USES AND ABUSES OF CONTRIBUTION \"APPROVAL\" RATES",
      description: "The development of some technology standards, such as the mobile telecommunication technology standards developed at 3GPP, costs billions of dollars and produces very significant value. It is therefore important to be able to measure different companies' impact on the development of different 3GPP standards, and to identify factors that determine the success of different standardization strategies. In this context, it is increasingly common to analyze the rate at which different companies' contributions to 3GPP are approved. Unfortunately, this use of contribution approval rates is erroneous – at least with respect to the most relevant 3GPP working groups. Using a comprehensive database of contributions to 3GPP, and an in-depth case study, this paper demonstrates that the approval of a company's contributions does not indicate that this company has been successful at incorporating its technology into a 3GPP standard. I suggest other interpretations of the 'status' of companies' contributions to 3GPP; and explore alternative methodologies for measuring companies' impact in 3GPP.",
      links: [
        { text: "READ WHITE PAPER", url: "#" },
        { text: "READ REPORT", url: "#" }
      ]
    }
  ];

  const otherCategories = [
    {
      title: "Standard-Essential Patents [SEP]",
      papers: [
        { title: "Example Paper 1", url: "#" },
        { title: "Example Paper 2", url: "#" },
        { title: "Example Paper 3", url: "#" }
      ]
    },
    {
      title: "Standards Organizations",
      papers: [
        { title: "Example Paper 1", url: "#" },
        { title: "Example Paper 2", url: "#" },
        { title: "Example Paper 3", url: "#" }
      ]
    },
    {
      title: "Standards and Regulations",
      papers: [
        { title: "Example Paper 1", url: "#" },
        { title: "Example Paper 2", url: "#" },
        { title: "Example Paper 3", url: "#" }
      ]
    },
    {
      title: "Standards and Innovation",
      papers: [
        { title: "Example Paper 1", url: "#" },
        { title: "Example Paper 2", url: "#" },
        { title: "Example Paper 3", url: "#" }
      ]
    },
    {
      title: "Patent Policy",
      papers: [
        { title: "Example Paper 1", url: "#" },
        { title: "Example Paper 2", url: "#" },
        { title: "Example Paper 3", url: "#" }
      ]
    }
  ];

  return (
    <section id="publications" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Publications</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Subscribe to read the full PDF reports FOR FREE. Or read the White Papers right away!
          </p>
        </div>

        {/* Featured Publications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured</h3>
          <div className="space-y-8">
            {featuredPublications.map((pub, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-8 w-8 text-blue-900 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">{pub.title}</h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">{pub.description}</p>
                    <div className="flex flex-wrap gap-4">
                      {pub.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          className="inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                        >
                          <FileText className="h-5 w-5 mr-2" />
                          {link.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Publications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Publications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="h-5 w-5 text-blue-900 mr-2" />
                  {category.title}
                </h4>
                <ul className="space-y-3">
                  {category.papers.map((paper, paperIndex) => (
                    <li key={paperIndex}>
                      <a
                        href={paper.url}
                        className="flex items-center text-gray-600 hover:text-blue-900 transition-colors"
                      >
                        <ChevronRight className="h-4 w-4 mr-2" />
                        {paper.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;