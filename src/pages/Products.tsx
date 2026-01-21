import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';

const Products: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  const products = [
    {
      id: 'discover',
      name: 'Lumi6 Discover',
      category: 'Assessment Platform',
      description: 'Comprehensive EQ assessments that reveal team strengths and growth areas with precision.',
      focus: 'measuring EQ in context',
      features: [
        'Industry-specific scenarios',
        '12-competency EQ model',
        'Real-time insights',
        'Team benchmarking'
      ],
      icon: 'https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/discovery-and-assess.svg',
      color: 'purple'
    },
    {
      id: 'insights',
      name: 'Lumi6 Insights',
      category: 'Analytics & Reports',
      description: 'Transform assessment data into actionable growth paths with detailed analytics.',
      focus: 'making sense of EQ data',
      features: [
        'Personalized reports',
        'Team dashboards',
        'Progress tracking',
        'ROI measurement'
      ],
      icon: 'https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/report-and-insights.svg',
      color: 'blue'
    },
    {
      id: 'grow',
      name: 'Lumi6 Grow',
      category: 'Learning Platform',
      description: 'Personalized learning plans that build emotional intelligence habits over time.',
      focus: 'building EQ skills daily',
      features: [
        'Micro-learning modules',
        'Adaptive curriculum',
        'Progress milestones',
        'Multi-format content'
      ],
      icon: 'https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/learn-.svg',
      color: 'orange'
    },
    {
      id: 'flow',
      name: 'Lumi6 Flow',
      category: 'Workplace Integration',
      description: 'Real-time EQ nudges and guidance integrated into your daily workflow.',
      focus: 'applying EQ in the moment',
      features: [
        'Context-aware nudges',
        'Meeting preparation',
        'Conflict resolution',
        'Team dynamics'
      ],
      icon: 'https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/nudges-activate.svg',
      color: 'green'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Floating Navigation Indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-3">
          {['discover', 'insights', 'grow', 'flow'].map((section, index) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                visibleSections.has(section)
                  ? 'bg-purple-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              title={`Scroll to ${section.charAt(0).toUpperCase() + section.slice(1)}`}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Complete emotional intelligence platform designed for modern teams. 
              Measure, learn, and grow together.
            </p>
            
            {/* Navigation Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button 
                onClick={() => scrollToSection('discover')}
                className="px-6 py-3 bg-purple-100 text-purple-700 rounded-lg font-medium hover:bg-purple-200 hover:shadow-md transition-all duration-300 border border-purple-200"
              >
                Discover
              </button>
              <button 
                onClick={() => scrollToSection('insights')}
                className="px-6 py-3 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 hover:shadow-md transition-all duration-300 border border-blue-200"
              >
                Insights
              </button>
              <button 
                onClick={() => scrollToSection('grow')}
                className="px-6 py-3 bg-orange-100 text-orange-700 rounded-lg font-medium hover:bg-orange-200 hover:shadow-md transition-all duration-300 border border-orange-200"
              >
                Grow
              </button>
              <button 
                onClick={() => scrollToSection('flow')}
                className="px-6 py-3 bg-green-100 text-green-700 rounded-lg font-medium hover:bg-green-200 hover:shadow-md transition-all duration-300 border border-green-200"
              >
                Flow
              </button>
            </div>

            {/* Product Tags */}
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {/* Discover Tags */}
              <div className="bg-rebuttl-purple/10 text-rebuttl-purple px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                <span className="mr-2">🏭</span>Industry-Specific
              </div>
              <div className="bg-rebuttl-purple/10 text-rebuttl-purple px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <span className="mr-2">💼</span>Role-Relevant
              </div>
              <div className="bg-rebuttl-purple/10 text-rebuttl-purple px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                <span className="mr-2">🔍</span>Contextual Precision
              </div>
              
              {/* Insights Tags */}
              <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <span className="mr-2">🌟</span>Strengths Uncovered
              </div>
              <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                <span className="mr-2">📈</span>Growth Pathways
              </div>
              <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                <span className="mr-2">💡</span>Actionable Intelligence
              </div>
              
              {/* Grow Tags */}
              <div className="bg-rebuttl-orange/10 text-rebuttl-orange px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                <span className="mr-2">🤝</span>EI in Action
              </div>
              <div className="bg-rebuttl-orange/10 text-rebuttl-orange px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                <span className="mr-2">🕊️</span>Resilience Habits
              </div>
              <div className="bg-rebuttl-orange/10 text-rebuttl-orange px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                <span className="mr-2">🔄</span>Continuous Growth
              </div>
              
              {/* Flow Tags */}
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
                <span className="mr-2">👥</span>Teamwork Amplified
              </div>
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
                <span className="mr-2">⚡</span>In-the-Moment Nudges
              </div>
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium opacity-0 transform -translate-y-8 animate-drop-bounce" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                <span className="mr-2">🗣️</span>Better Conversations
              </div>
            </div>
          </div>

          {/* Products Detailed Sections */}
          <div className="space-y-32">
            {/* Lumi6 Discover - Card Left, Info Right */}
            <div 
              id="discover"
              ref={(el) => (sectionRefs.current['discover'] = el)}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-transparent rounded-3xl -z-10"></div>
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10"></div>
              <div className="order-1 lg:order-1 opacity-0 transform -translate-x-12 animate-drop-bounce" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-gray-200 relative overflow-hidden bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0 shadow-lg">
                        <img 
                          src={products[0].icon} 
                          alt={`${products[0].name} icon`}
                          className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-purple-600 mb-2">{products[0].category}</div>
                        <h3 className="text-2xl font-semibold mb-2">{products[0].name}</h3>
                        <div className="text-sm font-medium text-gray-700 mb-4 italic">
                          Focus: {products[0].focus}
                        </div>
                        <p className="text-gray-600 mb-6">{products[0].description}</p>
                        
                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-900">Key Features:</h4>
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                              Industry- and role-specific scenarios
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                              Assessment across 12 EQ competencies, mapped to 4 domains
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                              Real-time insights for individuals and teams
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                              Benchmarking across teams, roles, or candidates
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="order-2 lg:order-2 flex flex-col justify-center h-full opacity-0 transform translate-x-12 animate-drop-bounce" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Reveal how people really respond at work.</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Lumi6 Discover goes beyond personality tests and surveys. It places people into realistic, job-specific scenarios that mirror the pressures, conflicts, and decisions of everyday work. By analyzing how they respond, Lumi6 measures emotional intelligence across four domains — Self-Awareness, Self-Management, Social Awareness, and Relationship Management — and drills into 12 key competencies that define workplace performance.
                </p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  From emotional balance to adaptability, empathy to influence, Lumi6 Discover highlights both individual strengths and team growth areas with scientific precision. Leaders gain a data-driven view of how candidates, employees, and teams collaborate, adapt, and thrive under pressure.
                </p>
                <div className="bg-purple-50 p-3 rounded-lg mb-4">
                  <p className="text-purple-800 font-medium text-sm">
                    <strong>Why it matters:</strong> You don't just learn what someone says about themselves — you see how they act in context.
                  </p>
                </div>
              </div>
            </div>

            {/* Lumi6 Insights - Card Right, Info Left */}
            <div 
              id="insights"
              ref={(el) => (sectionRefs.current['insights'] = el)}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-transparent rounded-3xl -z-10"></div>
              <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
              
              <div className="order-2 lg:order-1 flex flex-col justify-center h-full opacity-0 transform -translate-x-12 animate-drop-bounce" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Turn data into direction.</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Assessments only matter if they create clarity. Lumi6 Insights transforms raw responses into actionable dashboards and reports that show exactly where growth is possible.
                </p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Individuals receive personalized EQ profiles — highlighting strengths like empathy or achievement orientation, while pinpointing growth areas like conflict management or influence. Teams see collective dashboards that reveal dynamics: Do we adapt well to change? Do we balance resilience with collaboration? Leaders can track how competencies shift over time, measuring ROI as teams build stronger relationships and outcomes improve.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <p className="text-blue-800 font-medium text-sm">
                    <strong>Why it matters:</strong> Insights connect the dots between behavior, performance, and growth.
                  </p>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 opacity-0 transform translate-x-12 animate-drop-bounce" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-gray-200 relative overflow-hidden bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="bg-gradient-to-br from-blue-100 to-cyan-200 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0 shadow-lg">
                        <img 
                          src={products[1].icon} 
                          alt={`${products[1].name} icon`}
                          className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-blue-600 mb-2">{products[1].category}</div>
                        <h3 className="text-2xl font-semibold mb-2">{products[1].name}</h3>
                        <div className="text-sm font-medium text-gray-700 mb-4 italic">
                          Focus: {products[1].focus}
                        </div>
                        <p className="text-gray-600 mb-6">{products[1].description}</p>
                        
                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-900">Key Features:</h4>
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                              Personalized reports with practical takeaways
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                              Team dashboards to visualize group dynamics
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                              Progress tracking across all 12 competencies
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                              ROI measurement linked to engagement and performance
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Lumi6 Grow - Card Left, Info Right */}
            <div 
              id="grow"
              ref={(el) => (sectionRefs.current['grow'] = el)}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-transparent rounded-3xl -z-10"></div>
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -z-10"></div>
              
              <div className="order-1 lg:order-1 opacity-0 transform -translate-x-12 animate-drop-bounce" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-gray-200 relative overflow-hidden bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="bg-gradient-to-br from-orange-100 to-amber-200 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0 shadow-lg">
                        <img 
                          src={products[2].icon} 
                          alt={`${products[2].name} icon`}
                          className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-orange-600 mb-2">{products[2].category}</div>
                        <h3 className="text-2xl font-semibold mb-2">{products[2].name}</h3>
                        <div className="text-sm font-medium text-gray-700 mb-4 italic">
                          Focus: {products[2].focus}
                        </div>
                        <p className="text-gray-600 mb-6">{products[2].description}</p>
                        
                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-900">Key Features:</h4>
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                              Personalized learning journeys mapped to EQ domains
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                              Micro-learning in multiple formats (audio, video, interactive)
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                              Weekly and monthly milestones to measure growth
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                              Adaptive curriculum that evolves as skills improve
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="order-2 lg:order-2 flex flex-col justify-center h-full opacity-0 transform translate-x-12 animate-drop-bounce" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Build EQ like a muscle — one habit at a time.</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Assessment reveals where you are. Growth happens when people practice new behaviors daily. Lumi6 Grow provides adaptive learning pathways that transform feedback into action, helping employees strengthen all 12 EQ competencies over time.
                </p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Micro-learning modules fit seamlessly into the flow of work: short audio lessons for reflection, interactive exercises for conflict resolution, or weekly challenges to improve empathy and adaptability. Each plan is personalized to the individual, reinforced with milestones, and supported by nudges that encourage progress long after the module ends.
                </p>
                <div className="bg-orange-50 p-3 rounded-lg mb-4">
                  <p className="text-orange-800 font-medium text-sm">
                    <strong>Why it matters:</strong> EQ doesn't change in a workshop — it grows with practice, reflection, and reinforcement.
                  </p>
                </div>
              </div>
            </div>

            {/* Lumi6 Flow - Card Right, Info Left */}
            <div 
              id="flow"
              ref={(el) => (sectionRefs.current['flow'] = el)}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-transparent rounded-3xl -z-10"></div>
              <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-green-200/20 rounded-full blur-3xl -z-10"></div>
              
              <div className="order-2 lg:order-1 flex flex-col justify-center h-full opacity-0 transform -translate-x-12 animate-drop-bounce" style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">EQ that shows up when it's needed most.</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Knowledge matters, but action in the moment changes everything. Lumi6 Flow integrates directly into the daily rhythm of work with real-time nudges, reminders, and insights.
                </p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Before a client meeting, it might highlight that the stakeholder values influence and achievement — nudging you to frame updates around impact. Ahead of a 1:1, it could suggest balancing clarity with empathy. In moments of conflict, Flow surfaces quick guidance to de-escalate and re-center.
                </p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  By embedding emotional intelligence directly into meetings, collaboration tools, and everyday interactions, Lumi6 Flow makes EQ practical and actionable.
                </p>
                <div className="bg-green-50 p-3 rounded-lg mb-4">
                  <p className="text-green-800 font-medium text-sm">
                    <strong>Why it matters:</strong> The right EQ skill, at the right moment, can transform a conversation, a decision, or a relationship.
                  </p>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 opacity-0 transform translate-x-12 animate-drop-bounce" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
                <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-gray-200 relative overflow-hidden bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="bg-gradient-to-br from-green-100 to-emerald-200 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0 shadow-lg">
                        <img 
                          src={products[3].icon} 
                          alt={`${products[3].name} icon`}
                          className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-green-600 mb-2">{products[3].category}</div>
                        <h3 className="text-2xl font-semibold mb-2">{products[3].name}</h3>
                        <div className="text-sm font-medium text-gray-700 mb-4 italic">
                          Focus: {products[3].focus}
                        </div>
                        <p className="text-gray-600 mb-6">{products[3].description}</p>
                        
                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-900">Key Features:</h4>
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                              Context-aware nudges tailored to real workplace situations
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                              Smart meeting preparation with tips based on team dynamics
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                              On-the-spot conflict resolution support
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                              Insights that reinforce empathy, adaptability, and collaboration
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple rounded-2xl p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Team's EQ?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Start with a free assessment and see the difference emotional intelligence can make.
              </p>
              <button 
                className="bg-white text-rebuttl-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => window.open('https://app.lumi6.com/signup', '_blank')}
              >
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 z-50 group"
        title="Back to top"
      >
        <svg 
          className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default Products;
