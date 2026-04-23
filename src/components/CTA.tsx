
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-rebuttl-navy"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDYwaDYwVjBoLTYweiIvPjxwYXRoIGQ9Ik0zNiAzNmgyNHYtMTJIMzZ2MTJ6TTAgMzZoMjR2LTEySDB2MTJ6IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      {/* Decorative blurred elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-rebuttl-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rebuttl-purple/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Ready to
        </h2>
        <p className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-sm">
          Build the EQ Advantage?
        </p>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
          Start measuring, building, and reinforcing emotional intelligence, exactly where work happens.
        </p>
        
        <div className="flex justify-center">
          <a
            href="https://tally.so/r/wM0JlY"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass h-12 px-8 text-lg text-rebuttl-navy font-semibold min-w-[160px]"
          >
            Talk to sales
          </a>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center relative group">
            <div className="absolute inset-0 bg-white/10 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">50K+</p>
            <p className="text-gray-300 text-sm md:text-base">Leaders Enabled</p>
          </div>
          <div className="text-center relative group">
            <div className="absolute inset-0 bg-white/10 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">10K+</p>
            <p className="text-gray-300 text-sm md:text-base">Lessons Completed</p>
          </div>
          <div className="text-center relative group">
            <div className="absolute inset-0 bg-white/10 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">85%</p>
            <p className="text-gray-300 text-sm md:text-base">Teams Report Growth</p>
          </div>
          <div className="text-center relative group">
            <div className="absolute inset-0 bg-white/10 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">70%</p>
            <p className="text-gray-300 text-sm md:text-base">Faster Conflict Resolution</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
