
import React from 'react';

const HowItWorks: React.FC = () => {

  const steps = [
    {
      number: '01',
      title: 'Assess Teams',
      description: 'Run EI assessments to baseline self-awareness, empathy, and communication across your organization.'
    },
    {
      number: '02',
      title: 'Personalize Learning',
      description: 'Deliver targeted micro-learnings and practices tailored to each person’s growth areas.'
    },
    {
      number: '03',
      title: 'Enable in the Flow',
      description: 'Provide tips and nudges inside daily workflows to reinforce better conversations and decisions.'
    },
    {
      number: '04',
      title: 'Measure Progress',
      description: 'Track team sentiment and collaboration metrics to see tangible improvement over time.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 bg-gradient-to-r from-rebuttl-purple to-rebuttl-blue bg-clip-text text-transparent">
            How Lumi6 Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A simple path from awareness to action, helping teams build everyday emotional intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative p-4 md:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
            >
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {/* Connection line between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-rebuttl-blue/60 to-rebuttl-purple/60 z-10"></div>
              )}
            </div>
          ))}
          
          {/* Background decorative grid */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDYwaDYwVjBoLTYweiIvPjxwYXRoIGQ9Ik0zNiAzNmgyNHYtMTJIMzZ2MTJ6TTAgMzZoMjR2LTEySDB2MTJ6IiBmaWxsPSIjZWFlYWVhIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10 -z-10"></div>
        </div>
        
        <div className="mt-16 p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple opacity-90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDYwaDYwVjBoLTYweiIvPjxwYXRoIGQ9Ik0zNiAzNmgyNHYtMTJIMzZ2MTJ6TTAgMzZoMjR2LTEySDB2MTJ6IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
          <div className="relative z-10 text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">Why Emotional Intelligence is the #1 Future Skill</h3>
            <div className="max-w-3xl mx-auto space-y-2">
              <div className="flex items-center justify-center gap-2">
                <span className="text-white">✔</span>
                <span>90% of top performers score high in EQ</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-white">✔</span>
                <span>EQ drives collaboration, adaptability, and resilience</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-white">✔</span>
                <span>AI automates tasks — EQ is the human edge</span>
              </div>
            </div>
            
          </div>
        </div>

        {/* Why EQ Matters two-column section */}
        <section id="why-eq" className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Why Emotional Intelligence is the #1 Future Skill</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-rebuttl-blue mt-1">✔</span> 90% of top performers excel in EQ — it's the hidden driver behind leadership and team success.</li>
              <li className="flex items-start gap-3"><span className="text-rebuttl-blue mt-1">✔</span> EQ fuels collaboration, adaptability & resilience — the skills every workplace needs to thrive in uncertainty.</li>
              <li className="flex items-start gap-3"><span className="text-rebuttl-blue mt-1">✔</span> AI can automate tasks — but it can't replace empathy, trust, or human connection.</li>
              <li className="flex items-start gap-3"><span className="text-rebuttl-blue mt-1">✔</span> High-EQ teams innovate faster — psychological safety unlocks bold ideas and better decisions.</li>
              <li className="flex items-start gap-3"><span className="text-rebuttl-blue mt-1">✔</span> EQ powers retention & engagement — employees stay where they feel valued, understood, and inspired.</li>
              <li className="flex items-start gap-3"><span className="text-rebuttl-blue mt-1">✔</span> Future-ready leaders lead with EQ — influence, empathy, and resilience now matter more than strategy alone.</li>
            </ul>
          </div>
          <div className="relative">
            {/* EQ Domains Infographic */}
            <div className="mx-auto w-full">
              <img 
                src="https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/EI+domains.png" 
                alt="Emotional Intelligence Domains - Self-Awareness, Self-Management, Social Awareness, and Relationship Management"
                className="w-full h-auto rounded-xl object-cover"
                loading="lazy"
              />
            </div>
            
          </div>
        </section>
      </div>
    </section>
  );
};

export default HowItWorks;
