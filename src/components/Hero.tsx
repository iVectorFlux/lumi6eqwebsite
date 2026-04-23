
import React, { memo } from 'react';

const Hero: React.FC = memo(() => {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
      {/* Distinct hero background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(99,102,241,0.08),transparent)] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Left side - Heading and content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="relative">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.35] max-w-4xl">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-rebuttl-purple to-rebuttl-blue animate-color-pulse bg-clip-text text-transparent">The Future of Work Runs on </span>
                  <span className="bg-gradient-to-r from-rebuttl-orange to-rebuttl-red animate-color-pulse bg-clip-text text-transparent whitespace-nowrap">Emotional Intelligence</span>
                  <svg className="absolute -bottom-6 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 4C50 1 150 1 200 4" stroke="url(#paint0_linear)" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="paint0_linear" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4263EB" />
                        <stop offset="0.5" stopColor="#6366F1" />
                        <stop offset="1" stopColor="#F97316" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
            </div>
            
            <p className="mt-8 text-xl md:text-2xl text-gray-600 max-w-3xl">
              Lumi6 transforms emotional intelligence into measurable insight, helping teams hire better, lead smarter, and grow faster.
            </p>
            
            <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://tally.so/r/wM0JlY"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass-primary h-12 px-8 text-lg min-w-[180px]"
              >
                Try Lumi6 Free
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <img 
              src="https://yadvhvt9zjohl7ms.public.blob.vercel-storage.com/eq4.svg"
              alt="Emotional Intelligence"
              className="w-full max-w-md lg:max-w-lg h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Enhanced abstract decorative elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-rebuttl-purple/20 rounded-full blur-3xl -z-10 animate-pulse-soft"></div>
      <div className="absolute top-1/4 -right-24 w-80 h-80 bg-rebuttl-blue/20 rounded-full blur-3xl -z-10 animate-pulse-soft animation-delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-60 h-60 bg-rebuttl-orange/20 rounded-full blur-3xl -z-10 animate-pulse-soft animation-delay-2000"></div>
      
      {/* Futuristic grid lines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDYwaDYwVjBoLTYweiIvPjxwYXRoIGQ9Ik0zNiAzNmgyNHYtMTJIMzZ2MTJ6TTAgMzZoMjR2LTEySDB2MTJ6IiBmaWxsPSIjZWFlYWVhIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10 -z-10"></div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
