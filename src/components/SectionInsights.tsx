import React, { useState, useEffect } from 'react';

const INSIGHTS_IMAGES = {
  hiring: 'https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/hiring+managers.svg',
  ld: 'https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/for+trainers.svg',
  individuals: 'https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/for+individuals.svg',
} as const;

const personas = [
  {
    key: 'hiring',
    title: 'For Hiring & Talent Teams',
    desc: 'Hire beyond the resume.',
  },
  {
    key: 'ld',
    title: 'For Learning & Development teams',
    desc: 'Build the skills that matter most.',
  },
  {
    key: 'individuals',
    title: 'For Individuals',
    desc: 'Unlock your emotional superpower.',
  },
];

const SectionInsights: React.FC = () => {
  const [active, setActive] = useState('hiring');

  // Preload all persona images on mount so they're cached when user switches tabs
  useEffect(() => {
    Object.values(INSIGHTS_IMAGES).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section id="insights" className="py-16 md:py-24 bg-rebuttl-lightBg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent pb-1 leading-[1.4]">
            For Hiring, Development & Everyday Work
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {personas.map(p => (
            <button
              key={p.key}
              onClick={() => setActive(p.key)}
              className={`text-left p-5 rounded-2xl border transition-all ${
                active === p.key 
                  ? p.key === 'hiring' 
                    ? 'border-green-300 bg-gradient-to-br from-green-50 to-emerald-100 shadow-sm' 
                    : p.key === 'ld'
                    ? 'border-orange-300 bg-gradient-to-br from-orange-50 to-coral-100 shadow-sm'
                    : 'border-blue-300 bg-gradient-to-br from-blue-50 to-sky-100 shadow-sm'
                  : 'border-gray-200 bg-white/60 hover:bg-white'
              }`}
            >
              <div className="font-semibold">{p.title}</div>
              <div className="text-gray-600 text-sm mt-1">{p.desc}</div>
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          {active === 'hiring' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">Identify how candidates collaborate, adapt, and lead under pressure with EQ-powered situational assessments.</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Use cases:</h4>
                    <ul className="space-y-2 text-sm leading-relaxed text-gray-700">
                      <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">👥</span>Talent Acquisition: benchmark beyond technical skills with role-aware EQ data.</li>
                      <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">🎯</span>Hiring Managers: compare candidates on collaboration, empathy, and adaptability.</li>
                      <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">🤝</span>Mergers & Acquisitions (M&A): culture compatibility checks for smoother integrations.</li>
                      <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✨</span>Culture Fit Evaluations: ensure new hires align with organizational values.</li>
                      <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">🚀</span>Project Readiness: assess adaptability and resilience for high-stakes roles.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Suitable for:</h4>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-200 text-green-800 text-sm font-medium rounded-full">CHRO</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-200 text-green-800 text-sm font-medium rounded-full">Head of Talent Acquisition</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-200 text-green-800 text-sm font-medium rounded-full">Hiring Manager</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-200 text-green-800 text-sm font-medium rounded-full">HR Business Partner</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-200 text-green-800 text-sm font-medium rounded-full">People Ops Lead</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 rounded-xl p-4 flex items-center justify-center min-h-[200px]">
                <img 
                  src={INSIGHTS_IMAGES.hiring} 
                  alt="Hiring and Talent teams: EQ-powered assessments"
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>
            </div>
          )}
          {active === 'ld' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">Equip employees with practical micro trainings in empathy, resilience, and influence: the human edge AI cannot replicate.</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Use cases:</h4>
                    <ul className="space-y-2 text-sm leading-relaxed text-gray-700">
                      <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">📚</span>Learning & Development (L&D): auto-curated micro learning mapped to competency gaps.</li>
                      <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">🌱</span>Talent Development: personalized growth journeys for employees at every level.</li>
                      <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">👑</span>Leadership Development: influence, coaching, and conflict management skills.</li>
                      <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">🌈</span>Diversity, Equity & Inclusion (DE&I): build empathy and inclusive team dynamics.</li>
                      <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">🔄</span>Succession Planning: prepare future leaders with core EQ competencies.</li>
                      <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">⚡</span>Organizational Effectiveness: drive culture, collaboration, and resilience at scale.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Suitable for:</h4>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-200 text-orange-800 text-sm font-medium rounded-full">CPO</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-200 text-orange-800 text-sm font-medium rounded-full">CLO</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-200 text-orange-800 text-sm font-medium rounded-full">L&D Manager</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-200 text-orange-800 text-sm font-medium rounded-full">Talent Development Director</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-200 text-orange-800 text-sm font-medium rounded-full">Head of Leadership Development</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-200 text-orange-800 text-sm font-medium rounded-full">DE&I Leader</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-200 text-orange-800 text-sm font-medium rounded-full">Org Effectiveness Consultant</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 rounded-xl p-4 flex items-center justify-center min-h-[200px]">
                <img 
                  src={INSIGHTS_IMAGES.ld} 
                  alt="Learning and Development teams: EQ micro training"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          )}
          {active === 'individuals' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">Discover your strengths and blind spots, then build everyday EQ habits that fuel better relationships and lasting career success.</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Use cases:</h4>
                    <ul className="space-y-2 text-sm leading-relaxed text-gray-700">
                      <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">🔍</span>Self-Discovery: understand your EQ profile across 12 competencies.</li>
                      <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">📈</span>Career Growth: strengthen influence, adaptability, and resilience.</li>
                      <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">💪</span>Personal Development: build habits for better communication and stress management.</li>
                      <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">🎓</span>Job Seekers & Graduates: stand out with EQ insights beyond test scores.</li>
                      <li className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">🌟</span>Aspiring Leaders: prepare for leadership roles with stronger people skills.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Suitable for:</h4>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-200 text-blue-800 text-sm font-medium rounded-full">Students</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-200 text-blue-800 text-sm font-medium rounded-full">Young Professionals</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-200 text-blue-800 text-sm font-medium rounded-full">Mid-career Employees</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-200 text-blue-800 text-sm font-medium rounded-full">Job Seekers</span>
                      <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-200 text-blue-800 text-sm font-medium rounded-full">Coaches/Mentors</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 rounded-xl p-4 flex items-center justify-center min-h-[200px]">
                <img 
                  src={INSIGHTS_IMAGES.individuals} 
                  alt="For individuals: unlock your emotional superpower"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionInsights;


