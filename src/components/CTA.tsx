
import React from 'react';
import { Button } from '@/components/ui/button';

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
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          Ready to <span className="bg-gradient-to-r from-rebuttl-blue to-rebuttl-orange bg-clip-text text-transparent">Build the EQ Advantage?</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          Start measuring, building, and reinforcing emotional intelligence — exactly where work happens.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button 
            className="bg-white text-rebuttl-navy hover:bg-gray-100 h-12 px-8 text-lg group relative overflow-hidden"
            onClick={() => window.open('https://tally.so/r/wM0JlY', '_blank')}
          >
            <span className="relative z-10">Talk to sales</span>
            <span className="absolute inset-0 w-0 bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple opacity-10 group-hover:w-full transition-all duration-300"></span>
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-rebuttl-blue hover:bg-white hover:text-rebuttl-navy h-12 px-8 text-lg transition-colors"
            onClick={() => window.open('https://tally.so/r/wM0JlY', '_blank')}
          >
            <span>Learn More</span>
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center relative group">
            <div className="absolute inset-0 bg-white/5 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="text-4xl font-bold bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent mb-2">50K+</p>
            <p className="text-gray-300">Leaders Enabled</p>
          </div>
          <div className="text-center relative group">
            <div className="absolute inset-0 bg-white/5 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="text-4xl font-bold bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent mb-2">10K+</p>
            <p className="text-gray-300">Lessons Completed</p>
          </div>
          <div className="text-center relative group">
            <div className="absolute inset-0 bg-white/5 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="text-4xl font-bold bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent mb-2">85%</p>
            <p className="text-gray-300">Teams Report Growth</p>
          </div>
          <div className="text-center relative group">
            <div className="absolute inset-0 bg-white/5 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="text-4xl font-bold bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent mb-2">70%</p>
            <p className="text-gray-300">Faster Conflict Resolution</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
