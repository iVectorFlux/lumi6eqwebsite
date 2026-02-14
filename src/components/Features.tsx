
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Play, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-rebuttl-lightBg to-white">
      <div className="container mx-auto px-4">
        <div id="explainer" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent">
            The Complete EQ Platform for Modern Teams
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Complete emotional intelligence platform for modern teams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* A. Lumi6 Discover */}
          <div className="group">
            <Card className="feature-card bg-gradient-to-b from-white to-gray-50 border-rebuttl-purple/30 hover:border-rebuttl-purple transition-all duration-300 h-full">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-rebuttl-purple/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-rebuttl-purple/20 transition-all duration-300 flex-shrink-0">
                      <Users className="w-8 h-8 text-rebuttl-purple" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">Discover</h3>
                        <div className="text-sm font-medium text-rebuttl-purple">Assessment</div>
                      </div>
                      <p className="text-gray-600 text-sm">Assessments that reveal strengths and gaps with precision.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto bg-rebuttl-purple/5 p-2 rounded-b-2xl group-hover:bg-rebuttl-purple/10 transition-all duration-300">
                  <div className="w-full aspect-[3/2] mx-auto bg-white relative overflow-hidden rounded-lg shadow-lg">
                    {/* Fallback placeholder (shows if image fails) */}
                    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="text-4xl mb-2">🧠</div>
                        <div className="text-sm font-medium">Assessment Interface</div>
                        <div className="text-xs mt-1">Interactive EQ Scenarios</div>
                      </div>
                    </div>
                    {/* Provided image */}
                    <img
                      src="/images/optimized/lumi6-discover.webp"
                      alt="Lumi6 Discover - Assessment"
                      loading="lazy"
                      sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none'
                      }}
                    />
                    {/* Animated overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-rebuttl-purple/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-2 right-2 bg-rebuttl-purple text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-2 group-hover:translate-y-0">
                      Interactive
                    </div>
                    <div className="absolute bottom-2 left-2 bg-rebuttl-purple/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 transform translate-y-2 group-hover:translate-y-0">
                      EQ Assessment
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
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-rebuttl-blue/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-rebuttl-blue/20 transition-all duration-300 flex-shrink-0">
                      <Play className="w-8 h-8 text-rebuttl-blue" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">Insights</h3>
                        <div className="text-sm font-medium text-rebuttl-blue">Reports & Analysis</div>
                      </div>
                      <p className="text-gray-600 text-sm">Reports that turn data into clear growth paths.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto bg-rebuttl-blue/5 p-2 rounded-b-2xl group-hover:bg-rebuttl-blue/10 transition-all duration-300">
                  <div className="w-full aspect-[3/2] mx-auto bg-white relative overflow-hidden rounded-lg shadow-lg">
                    {/* Fallback placeholder (shows if image fails) */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="text-4xl mb-2">📊</div>
                        <div className="text-sm font-medium">EQ Report Dashboard</div>
                        <div className="text-xs mt-1">Strengths & Growth Areas</div>
                      </div>
                    </div>
                    {/* Provided image */}
                    <img
                      src="/images/optimized/lumi6-insights.webp"
                      alt="Lumi6 Insights - Reports & Analysis"
                      loading="lazy"
                      sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none'
                      }}
                    />
                    {/* Animated overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-rebuttl-blue/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-2 right-2 bg-rebuttl-blue text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-2 group-hover:translate-y-0">
                      Analytics
                    </div>
                    <div className="absolute bottom-2 left-2 bg-rebuttl-blue/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 transform translate-y-2 group-hover:translate-y-0">
                      EQ Report
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
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-rebuttl-orange/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-rebuttl-orange/20 transition-all duration-300 flex-shrink-0">
                      <MessageSquare className="w-8 h-8 text-rebuttl-orange" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">Grow</h3>
                        <div className="text-sm font-medium text-rebuttl-orange">Learning Plan</div>
                      </div>
                      <p className="text-gray-600 text-sm">Personalized learning plans that build habits over time.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto bg-rebuttl-orange/5 p-2 rounded-b-2xl group-hover:bg-rebuttl-orange/10 transition-all duration-300">
                  <div className="w-full aspect-[3/2] mx-auto bg-white relative overflow-hidden rounded-lg shadow-lg">
                    {/* Fallback placeholder (shows if image fails) */}
                    <div className="w-full h-full bg-gradient-to-br from-orange-100 to-purple-100 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="text-4xl mb-2">🎯</div>
                        <div className="text-sm font-medium">Learning Dashboard</div>
                        <div className="text-xs mt-1">Structured Development</div>
                      </div>
                    </div>
                    {/* Provided image */}
                    <img
                      src="/images/optimized/lumi6-grow.webp"
                      alt="Lumi6 Grow - Learning Plan"
                      loading="lazy"
                      sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none'
                      }}
                    />
                    {/* Animated overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-rebuttl-orange/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-2 right-2 bg-rebuttl-orange text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-2 group-hover:translate-y-0">
                      Learning
                    </div>
                    <div className="absolute bottom-2 left-2 bg-rebuttl-orange/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 transform translate-y-2 group-hover:translate-y-0">
                      Development
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
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-green-200 transition-all duration-300 flex-shrink-0">
                      <MessageSquare className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">Flow</h3>
                        <div className="text-sm font-medium text-green-600">Workplace Nudges</div>
                      </div>
                      <p className="text-gray-600 text-sm">Real-time nudges that reinforce EQ where work happens.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto bg-green-50 p-2 rounded-b-2xl group-hover:bg-green-100 transition-all duration-300">
                  <div className="w-full aspect-[3/2] mx-auto bg-white relative overflow-hidden rounded-lg shadow-lg">
                    {/* Fallback placeholder (shows if image fails) */}
                    <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="text-4xl mb-2">💡</div>
                        <div className="text-sm font-medium">Smart Nudges</div>
                        <div className="text-xs mt-1">Context-Aware Guidance</div>
                      </div>
                    </div>
                    {/* Provided image */}
                    <img
                      src="/images/optimized/lumi6-flow.webp"
                      alt="Lumi6 Flow - Workplace Nudges"
                      loading="lazy"
                      sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none'
                      }}
                    />
                    {/* Animated overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-2 group-hover:translate-y-0">
                      Smart
                    </div>
                    <div className="absolute bottom-2 left-2 bg-green-600/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 transform translate-y-2 group-hover:translate-y-0">
                      Nudges
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://app.lumi6.com/signup" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-rebuttl-blue text-white px-6 py-3 rounded-md hover:bg-rebuttl-blue/90 transition-colors"
          >
            Start Your Free EQ Report
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;


