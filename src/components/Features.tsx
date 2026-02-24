
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Play, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-rebuttl-lightBg to-white">
      <div className="container mx-auto px-4">
        <div id="explainer" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent pb-1 leading-[1.4]">
            The complete emotional intelligence platform for modern teams
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* A. Lumi6 Discover */}
          <div className="group">
            <Card className="feature-card bg-gradient-to-b from-white to-gray-50 border-rebuttl-purple/30 hover:border-rebuttl-purple transition-all duration-300 h-full">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-rebuttl-purple/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-rebuttl-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Discover</h3>
                      <p className="text-gray-600 text-sm">Assess strengths and gaps.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto bg-rebuttl-purple/5 p-2 rounded-b-2xl">
                  <div className="w-full aspect-[3/2] mx-auto bg-white relative overflow-hidden rounded-lg shadow-md">
                    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                      <div className="text-center text-gray-500 text-sm">EQ Assessment</div>
                    </div>
                    <img
                      src="/images/optimized/lumi6-discover.webp"
                      alt="Lumi6 Discover"
                      loading="lazy"
                      sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none'
                      }}
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1.5 rounded-lg text-center">
                      Lumi6 Discover
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* B. Lumi6 Insights */}
          <div className="group">
            <Card className="feature-card bg-gradient-to-b from-white to-gray-50 border-rebuttl-blue/30 hover:border-rebuttl-blue transition-all duration-300 h-full">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-rebuttl-blue/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Play className="w-6 h-6 text-rebuttl-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Insights</h3>
                      <p className="text-gray-600 text-sm">Data into growth paths.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto bg-rebuttl-blue/5 p-2 rounded-b-2xl">
                  <div className="w-full aspect-[3/2] mx-auto bg-white relative overflow-hidden rounded-lg shadow-md">
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                      <div className="text-center text-gray-500 text-sm">EQ Reports</div>
                    </div>
                    <img
                      src="/images/optimized/lumi6-insights.webp"
                      alt="Lumi6 Insights"
                      loading="lazy"
                      sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none'
                      }}
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1.5 rounded-lg text-center">
                      Lumi6 Insights
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* C. Lumi6 Grow */}
          <div className="group">
            <Card className="feature-card bg-gradient-to-b from-white to-gray-50 border-rebuttl-orange/30 hover:border-rebuttl-orange transition-all duration-300 h-full">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-rebuttl-orange/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-rebuttl-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Grow</h3>
                      <p className="text-gray-600 text-sm">Personalized learning plans.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto bg-rebuttl-orange/5 p-2 rounded-b-2xl">
                  <div className="w-full aspect-[3/2] mx-auto bg-white relative overflow-hidden rounded-lg shadow-md">
                    <div className="w-full h-full bg-gradient-to-br from-orange-100 to-purple-100 flex items-center justify-center">
                      <div className="text-center text-gray-500 text-sm">Learning Plan</div>
                    </div>
                    <img
                      src="/images/optimized/lumi6-grow.webp"
                      alt="Lumi6 Grow"
                      loading="lazy"
                      sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none'
                      }}
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1.5 rounded-lg text-center">
                      Lumi6 Grow
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* D. Lumi6 Flow */}
          <div className="group">
            <Card className="feature-card bg-gradient-to-b from-white to-gray-50 border-green-300 hover:border-green-400 transition-all duration-300 h-full">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Flow</h3>
                      <p className="text-gray-600 text-sm">Real-time EQ nudges at work.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto bg-green-50 p-2 rounded-b-2xl">
                  <div className="w-full aspect-[3/2] mx-auto bg-white relative overflow-hidden rounded-lg shadow-md">
                    <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                      <div className="text-center text-gray-500 text-sm">Workplace Nudges</div>
                    </div>
                    <img
                      src="/images/optimized/lumi6-flow.webp"
                      alt="Lumi6 Flow"
                      loading="lazy"
                      sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none'
                      }}
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1.5 rounded-lg text-center">
                      Lumi6 Flow
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-14">
          <p className="text-xl font-semibold text-stone-800 mb-4">Get your EQ snapshot in minutes</p>
          <a 
            href="https://tally.so/r/wM0JlY" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-glass-primary inline-flex px-8 py-3.5 text-lg"
          >
            Start Your Free EQ Report
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;


