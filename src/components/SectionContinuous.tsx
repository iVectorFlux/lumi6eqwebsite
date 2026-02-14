import React from 'react';

const SectionContinuous: React.FC = () => {
  return (
    <section id="continuous" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent">
            From assessments to action
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            See progress with a live dashboard and a feed of helpful nudges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Assess to Action Infographic */}
          <div className="relative p-4 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 rounded-2xl border border-gray-100 shadow-lg">
            <div className="mx-auto w-full">
              <img 
                src="https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/Assess+to+action.png" 
                alt="From Assessments to Action - EQ Development Process"
                className="w-full h-auto rounded-xl shadow-md object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Nudges feed mock */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Upcoming 1:1</div>
              <div className="text-gray-800">Before your 1:1, remember: your teammate thrives on structure — frame your feedback with clear next steps.</div>
            </div>
            <div className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Team Standup</div>
              <div className="text-gray-800">Try a quick check-in question to surface blockers proactively.</div>
            </div>
            <div className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Performance Review</div>
              <div className="text-gray-800">Balance constructive points with specific appreciation to reinforce strengths.</div>
            </div>
            <div className="pt-2">
              <a 
                href="https://app.lumi6.com/signup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-rebuttl-blue text-white px-6 py-3 rounded-md hover:bg-rebuttl-blue/90 transition-colors"
              >
                See Sample Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContinuous;


