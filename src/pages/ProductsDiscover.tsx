import React from 'react';
import Navbar from '@/components/Navbar';

const discoverIcon = 'https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/discovery-and-assess.svg';
const insightsIcon = 'https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/report-and-insights.svg';

const ProductsDiscover: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4">
          {/* Lumi6 Discover: text left, mockup right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-28">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <img src={discoverIcon} alt="" className="w-7 h-7 object-contain" />
                </div>
                <span className="text-sm font-medium text-purple-600">Assessment Platform</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-4">
                Lumi6 Discover
              </h1>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Comprehensive EQ assessments that reveal team strengths and growth areas with precision. Lumi6 Discover places people into realistic, job-specific scenarios that mirror the pressures and decisions of everyday work, so you see how they act in context, not just what they say.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                  Industry- and role-specific scenarios
                </li>
                <li className="flex items-center gap-2 text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                  12 EQ competencies mapped to 4 domains
                </li>
                <li className="flex items-center gap-2 text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                  Real-time insights for individuals and teams
                </li>
                <li className="flex items-center gap-2 text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                  Benchmarking across teams, roles, or candidates
                </li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-xl">
                <p className="text-purple-900 text-sm"><strong>Why it matters:</strong> You don't just learn what someone says about themselves. You see how they respond at work.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-lg bg-gradient-to-br from-purple-50 to-blue-50">
                <div className="w-full relative flex items-center justify-center min-h-[280px] md:min-h-[320px]">
                  <img
                    src="/images/optimized/lumi6-discover.webp"
                    alt="Lumi6 Discover: assessment platform"
                    className="w-full h-auto max-w-full object-contain"
                    loading="eager"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Lumi6 Insights: text left, card right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-28">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <img src={insightsIcon} alt="" className="w-7 h-7 object-contain" />
                </div>
                <span className="text-sm font-medium text-blue-600">Reports & Analytics</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-stone-900 mb-4">
                Lumi6 Insights
              </h2>
              <p className="text-stone-600 mb-4 leading-relaxed">
                Turn assessment data into direction. Lumi6 Insights transforms raw responses into actionable dashboards and reports that show exactly where growth is possible.
              </p>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Individuals get personalized EQ profiles; teams see collective dashboards. Leaders can track how competencies shift over time and measure ROI as teams build stronger relationships.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  Personalized reports with practical takeaways
                </li>
                <li className="flex items-center gap-2 text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  Team dashboards and progress across 12 competencies
                </li>
                <li className="flex items-center gap-2 text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  ROI measurement linked to engagement and performance
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-6 md:p-8">
              <h3 className="font-semibold text-stone-900 mb-2">Key capabilities</h3>
              <p className="text-sm text-stone-600 mb-4">Insights connect the dots between behavior, performance, and growth.</p>
              <ul className="space-y-2 text-sm text-stone-700">
                <li>• EQ profiles & strength mapping</li>
                <li>• Team dynamics dashboards</li>
                <li>• Competency tracking over time</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple rounded-2xl p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your team's EQ?</h2>
              <p className="text-lg mb-6 opacity-90">Start with a free assessment and see the difference emotional intelligence can make.</p>
              <button
                className="bg-white text-rebuttl-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => window.open('https://tally.so/r/wM0JlY', '_blank')}
              >
                Get started free
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsDiscover;
