import React from 'react';
import Navbar from '@/components/Navbar';

const growIcon = 'https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/learn-.svg';
const flowIcon = 'https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/nudges-activate.svg';

const ProductsGrow: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4">
          {/* Lumi6 Grow: text left, mockup right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-28">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <img src={growIcon} alt="" className="w-7 h-7 object-contain" />
                </div>
                <span className="text-sm font-medium text-orange-600">Learning Platform</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold text-stone-900 mb-4">
                Lumi6 Grow
              </h1>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Personalized learning plans that build emotional intelligence habits over time. Lumi6 Grow provides adaptive learning pathways that transform feedback into action, helping people strengthen all 12 EQ competencies with micro-learning that fits into the flow of work.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                  Learning journeys mapped to EQ domains
                </li>
                <li className="flex items-center gap-2 text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                  Micro-learning in audio, video, and interactive formats
                </li>
                <li className="flex items-center gap-2 text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                  Weekly and monthly milestones to measure growth
                </li>
                <li className="flex items-center gap-2 text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                  Adaptive curriculum that evolves as skills improve
                </li>
              </ul>
              <div className="bg-orange-50 p-4 rounded-xl">
                <p className="text-orange-900 text-sm"><strong>Why it matters:</strong> EQ doesn't change in a workshop — it grows with practice, reflection, and reinforcement.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-lg bg-gradient-to-br from-orange-50 to-amber-50">
                <div className="w-full relative flex items-center justify-center min-h-[280px] md:min-h-[320px]">
                  <img
                    src="/images/optimized/lumi6-grow.webp"
                    alt="Lumi6 Grow - Learning platform"
                    className="w-full h-auto max-w-full object-contain"
                    loading="eager"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Lumi6 Flow: text left, card right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-28">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <img src={flowIcon} alt="" className="w-7 h-7 object-contain" />
                </div>
                <span className="text-sm font-medium text-green-600">Workplace integration</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-stone-900 mb-4">
                Lumi6 Flow
              </h2>
              <p className="text-stone-600 mb-4 leading-relaxed">
                EQ that shows up when it's needed most. Lumi6 Flow integrates into the daily rhythm of work with real-time nudges, reminders, and insights — before meetings, ahead of 1:1s, and in moments of conflict.
              </p>
              <p className="text-stone-600 mb-6 leading-relaxed">
                By embedding emotional intelligence into meetings and everyday interactions, Flow makes EQ practical and actionable so the right skill appears at the right moment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                  Context-aware nudges for real workplace situations
                </li>
                <li className="flex items-center gap-2 text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                  Meeting preparation and conflict resolution support
                </li>
                <li className="flex items-center gap-2 text-sm text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                  Insights that reinforce empathy, adaptability, and collaboration
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-6 md:p-8">
              <h3 className="font-semibold text-stone-900 mb-2">Key capabilities</h3>
              <p className="text-sm text-stone-600 mb-4">The right EQ skill at the right moment can transform a conversation or a decision.</p>
              <ul className="space-y-2 text-sm text-stone-700">
                <li>• Real-time nudges & reminders</li>
                <li>• Meeting & 1:1 preparation</li>
                <li>• On-the-spot guidance</li>
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
                onClick={() => window.open('https://app.lumi6.com/signup', '_blank')}
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

export default ProductsGrow;
