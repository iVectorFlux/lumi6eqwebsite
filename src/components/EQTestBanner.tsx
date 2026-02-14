import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

interface EQTestBannerProps {
  variant?: 'sticky' | 'inline';
}

const EQTestBanner: React.FC<EQTestBannerProps> = ({ variant = 'sticky' }) => {
  if (variant === 'sticky') {
    return (
      <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-rebuttl-blue via-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <Link 
            to="/eq-test"
            className="flex items-center justify-center gap-2 py-2.5 text-sm md:text-base hover:opacity-90 transition-opacity"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="font-semibold">Take Your Free EQ Assessment</span>
            <span className="hidden sm:inline text-white/80">— Discover your emotional intelligence score in 5 minutes</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    );
  }

  // Inline variant for use within pages
  return (
    <div className="bg-gradient-to-r from-rebuttl-blue via-blue-600 to-indigo-600 rounded-xl p-6 md:p-8 text-white shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white/20 rounded-full">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Free EQ Assessment</h3>
            <p className="text-white/80">Discover your emotional intelligence score in just 5 minutes</p>
          </div>
        </div>
        <Link 
          to="/eq-test"
          className="inline-flex items-center gap-2 bg-white text-rebuttl-blue px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
        >
          Take Free Test
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default EQTestBanner;
