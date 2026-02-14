
import React, { Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LazyImage from '@/components/LazyImage';
import EQTestBanner from '@/components/EQTestBanner';

// Lazy load non-critical components
const HowItWorks = lazy(() => import('@/components/HowItWorks'));
const SectionContinuous = lazy(() => import('@/components/SectionContinuous'));
const SectionInsights = lazy(() => import('@/components/SectionInsights'));
const SectionProof = lazy(() => import('@/components/SectionProof'));
const CTA = lazy(() => import('@/components/CTA'));

// Loading component for Suspense fallback
const SectionLoader = () => (
  <div className="w-full h-32 bg-gray-100 animate-pulse rounded-lg"></div>
);

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-rebuttl-lightBg">
      {/* EQ Test Banner at the very top */}
      <EQTestBanner variant="sticky" />
      {/* Spacer for sticky banner */}
      <div className="h-10" />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <SectionContinuous />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <SectionInsights />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <SectionProof />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CTA />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
