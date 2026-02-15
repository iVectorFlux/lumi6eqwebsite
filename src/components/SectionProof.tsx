import React, { useEffect, useRef, useState } from 'react';

const quotes = [
  {
    name: 'N. Patel',
    title: 'Head of People',
    text: 'Managers finally have actionable guidance in the moments that matter.',
  },
  {
    name: 'T. Kim',
    title: 'Engineering Manager',
    text: 'The nudges are small, timely, and surprisingly effective at reducing friction.',
  },
  {
    name: 'Dr. A. Rivera',
    title: 'Organizational Psychologist',
    text: 'Lumi6 operationalizes EQ development with a rare balance of rigor and usability.',
  },
];

const SectionProof: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="proof" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent pb-1 leading-[1.4]">
            What Leaders Are Saying
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">Built on a 12-competency EQ model.</p>
          
          {/* EQ Competency Tags */}
          <div className={`mt-8 flex flex-wrap justify-center gap-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Top Row - 6 tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-2">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-300 cursor-pointer shadow-md">
                Self Awareness
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 cursor-pointer shadow-md">
                Emotional Balance
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 cursor-pointer shadow-md">
                Positive Outlook
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 cursor-pointer shadow-md">
                Adaptability
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 cursor-pointer shadow-md">
                Achievement Orientation
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 cursor-pointer shadow-md">
                Empathy
              </div>
            </div>
            
            {/* Bottom Row - 6 tags */}
            <div className="flex flex-wrap justify-center gap-2">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 cursor-pointer shadow-md">
                Organizational Awareness
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 cursor-pointer shadow-md">
                Influence
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 cursor-pointer shadow-md">
                Coach & Mentor
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 cursor-pointer shadow-md">
                Conflict Management
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 cursor-pointer shadow-md">
                Teamwork
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 cursor-pointer shadow-md">
                Inspirational Leadership
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-10 rounded-2xl border border-gray-100 bg-white shadow-sm text-center">
            <blockquote className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed">“{quotes[0].text}”</blockquote>
            <footer className="mt-6 text-gray-600">
              <cite className="font-semibold not-italic text-stone-900">{quotes[0].name}</cite>
              <span className="text-gray-500"> — {quotes[0].title}</span>
            </footer>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {quotes.slice(1).map((q, i) => (
              <div key={i} className="p-5 rounded-xl border border-gray-100 bg-gray-50/50">
                <p className="text-gray-700">“{q.text}”</p>
                <p className="mt-3 text-sm text-gray-600">{q.name} — {q.title}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SectionProof;


