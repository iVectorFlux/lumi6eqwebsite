
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
        
        {/* Why EQ Matters two-column section */}
        <section id="why-eq" className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2">
              Why Emotional Intelligence is the #1 Future Skill
            </h3>
            <p className="text-stone-600 mb-8 text-lg">
              The workplace skill that separates top performers and builds teams that last.
            </p>
            <ul className="space-y-5">
              {[
                '90% of top performers excel in EQ — it\'s the hidden driver behind leadership and team success.',
                'EQ fuels collaboration, adaptability & resilience — the skills every workplace needs to thrive in uncertainty.',
                'AI can automate tasks — but it can\'t replace empathy, trust, or human connection.',
                'High-EQ teams innovate faster — psychological safety unlocks bold ideas and better decisions.',
                'EQ powers retention & engagement — employees stay where they feel valued, understood, and inspired.',
                'Future-ready leaders lead with EQ — influence, empathy, and resilience now matter more than strategy alone.',
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rebuttl-blue/10 flex items-center justify-center mt-0.5" aria-hidden>
                    <svg className="w-3.5 h-3.5 text-rebuttl-blue" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  <span className="text-stone-700 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <figure className="rounded-2xl overflow-hidden bg-stone-50 border border-stone-100">
              <img
                src="https://yadvhvt9zjohl7ms.public.blob.vercel-storage.com/philosophy/L%26D2.svg"
                alt="Learning and development — collaboration and growth"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </figure>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HowItWorks;
