import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { ArrowRight } from 'lucide-react';

const IMAGES = {
  discover: '/images/optimized/lumi6-discover.webp',
  insights: '/images/optimized/lumi6-insights.webp',
  grow: '/images/optimized/lumi6-grow.webp',
  flow: '/images/optimized/lumi6-flow.webp',
} as const;

const ProductCard: React.FC<{
  to: string;
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  accent: 'purple' | 'blue' | 'orange' | 'green';
}> = ({ to, image, imageAlt, title, subtitle, accent }) => {
  const bgMap = { purple: 'from-purple-50 to-blue-50', blue: 'from-blue-50 to-cyan-50', orange: 'from-orange-50 to-amber-50', green: 'from-green-50 to-emerald-50' };
  return (
    <Link
      to={to}
      className="group block rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm hover:shadow-lg hover:border-stone-300 transition-all duration-200 text-left"
    >
      <div className={`aspect-[4/3] w-full bg-gradient-to-br ${bgMap[accent]} flex items-center justify-center p-4`}>
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="w-full h-full object-contain"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-stone-900">{title}</h3>
        <p className="text-sm text-stone-500 mt-0.5">{subtitle}</p>
        <span className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-rebuttl-blue group-hover:gap-2 transition-all">
          Learn more <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
};

const Products: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-stone-900 tracking-tight">
              Products
            </h1>
            <p className="mt-4 text-lg md:text-xl text-stone-600">
              Measure, understand, and grow emotional intelligence across your organization.
            </p>
          </div>
        </section>

        {/* Discover: Discover + Insights (2 screenshots) */}
        <section className="pb-16 md:pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-stone-900">Lumi6 Discover</h2>
              <p className="mt-1 text-stone-600">Assessment and insights that reveal how people really respond at work.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <ProductCard
                to="/products/discover"
                image={IMAGES.discover}
                imageAlt="Lumi6 Discover - EQ assessment"
                title="Discover"
                subtitle="Assess EQ in context with role-specific scenarios"
                accent="purple"
              />
              <ProductCard
                to="/products/discover"
                image={IMAGES.insights}
                imageAlt="Lumi6 Insights - Reports & analytics"
                title="Insights"
                subtitle="Dashboards and reports that turn data into direction"
                accent="blue"
              />
            </div>
          </div>
        </section>

        {/* Grow: Grow + Flow (2 screenshots) */}
        <section className="pb-20 md:pb-28 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-stone-900">Lumi6 Grow</h2>
              <p className="mt-1 text-stone-600">Learning and nudges that build EQ habits in the flow of work.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <ProductCard
                to="/products/grow"
                image={IMAGES.grow}
                imageAlt="Lumi6 Grow - Learning platform"
                title="Grow"
                subtitle="Personalized learning paths for all 12 EQ competencies"
                accent="orange"
              />
              <ProductCard
                to="/products/grow"
                image={IMAGES.flow}
                imageAlt="Lumi6 Flow - Nudges in the flow of work"
                title="Flow"
                subtitle="Real-time nudges and guidance when they matter most"
                accent="green"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 px-4 bg-stone-50 border-t border-stone-100">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-stone-900">
              Ready to get started?
            </h2>
            <p className="mt-2 text-stone-600">
              Start with a free EQ assessment and see how Lumi6 can support your team.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://app.lumi6.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-rebuttl-blue text-white px-6 py-3 text-sm font-medium hover:bg-rebuttl-blue/90 transition-colors"
              >
                Get started free
              </a>
              <Link
                to="/eq-test"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white text-stone-700 px-6 py-3 text-sm font-medium hover:bg-stone-50 transition-colors"
              >
                Take free EQ test
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;
