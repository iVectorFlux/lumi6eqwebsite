import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, BookOpen, Award, TrendingUp, Heart } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-rebuttl-lightBg">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-rebuttl-blue/10 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent">
                Emotional Intelligence for Education
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                Build emotionally intelligent learning environments where students thrive, teachers excel, and institutions lead.
              </p>
            </div>
          </div>
        </section>

        {/* K12 Schools Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rebuttl-blue/10 rounded-full mb-4">
                <GraduationCap className="w-8 h-8 text-rebuttl-blue" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent">
                K12 Schools
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transform your school culture with data-driven emotional intelligence insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-rebuttl-purple/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-rebuttl-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Student Well-being</h3>
                  <p className="text-gray-600">
                    Identify students who need emotional support early. Track social-emotional development and create targeted intervention programs.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-rebuttl-orange/10 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-rebuttl-orange" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Bullying Prevention</h3>
                  <p className="text-gray-600">
                    Build empathy and emotional awareness to reduce bullying incidents. Create a culture of respect and understanding.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-rebuttl-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-rebuttl-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Academic Performance</h3>
                  <p className="text-gray-600">
                    Students with higher EQ show improved focus, better relationships, and stronger academic outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-rebuttl-green/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-rebuttl-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Parent Engagement</h3>
                  <p className="text-gray-600">
                    Share EQ insights with parents to support emotional development at home. Strengthen school-family partnerships.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-rebuttl-purple/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-rebuttl-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">School Climate</h3>
                  <p className="text-gray-600">
                    Measure and improve overall school emotional climate. Create environments where everyone feels safe and valued.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-rebuttl-orange/10 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-rebuttl-orange" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">SEL Integration</h3>
                  <p className="text-gray-600">
                    Seamlessly integrate Social-Emotional Learning into your curriculum with data-driven insights and progress tracking.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Teachers Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-rebuttl-lightBg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rebuttl-purple/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-rebuttl-purple" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rebuttl-purple to-rebuttl-orange bg-clip-text text-transparent">
                Teachers
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Empower educators with emotional intelligence tools to create transformative learning experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-rebuttl-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-rebuttl-blue" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Classroom Management</h3>
                  <p className="text-gray-600 mb-4">
                    Understand student emotions and respond with empathy. Create classrooms where students feel heard, understood, and motivated to learn.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Recognize emotional cues and triggers</li>
                    <li>• De-escalate conflicts with emotional awareness</li>
                    <li>• Build stronger teacher-student relationships</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-rebuttl-orange/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-rebuttl-orange" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Professional Development</h3>
                  <p className="text-gray-600 mb-4">
                    Enhance your own emotional intelligence to become a more effective educator and leader in your school community.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Self-awareness and emotional regulation</li>
                    <li>• Empathetic communication skills</li>
                    <li>• Stress management and resilience</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-rebuttl-purple/10 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-rebuttl-purple" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Student Assessment</h3>
                  <p className="text-gray-600 mb-4">
                    Assess and track student emotional development alongside academic progress. Identify needs and celebrate growth.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Individual EQ profiles for each student</li>
                    <li>• Progress tracking over time</li>
                    <li>• Actionable insights for support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-rebuttl-green/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-rebuttl-green" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Collaborative Teams</h3>
                  <p className="text-gray-600 mb-4">
                    Work better with colleagues, administrators, and parents through improved emotional intelligence and communication.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Better collaboration with peers</li>
                    <li>• Effective parent-teacher communication</li>
                    <li>• Leadership and influence skills</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Universities Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rebuttl-orange/10 rounded-full mb-4">
                <GraduationCap className="w-8 h-8 text-rebuttl-orange" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rebuttl-orange to-rebuttl-red bg-clip-text text-transparent">
                Universities
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Prepare students for career success with emotional intelligence that employers value
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-rebuttl-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-rebuttl-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Career Readiness</h3>
                  <p className="text-gray-600">
                    Develop the emotional intelligence skills that top employers seek. Prepare students for leadership roles and team collaboration.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-rebuttl-purple/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-rebuttl-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Student Retention</h3>
                  <p className="text-gray-600">
                    Support student mental health and well-being to improve retention rates. Help students navigate university life successfully.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-rebuttl-orange/10 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-rebuttl-orange" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mental Health Support</h3>
                  <p className="text-gray-600">
                    Early identification of students struggling with stress, anxiety, or emotional challenges. Connect them with appropriate resources.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-rebuttl-green/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-rebuttl-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Leadership Development</h3>
                  <p className="text-gray-600">
                    Build future leaders with strong emotional intelligence. Essential skills for student government, clubs, and organizations.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-rebuttl-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-rebuttl-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Research & Assessment</h3>
                  <p className="text-gray-600">
                    Use Lumi6 data for academic research on emotional intelligence in higher education. Track program effectiveness.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-rebuttl-purple/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-rebuttl-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Faculty Development</h3>
                  <p className="text-gray-600">
                    Support faculty and staff with emotional intelligence training. Improve teaching effectiveness and workplace satisfaction.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-rebuttl-lightBg to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-rebuttl-blue/10 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Coming Soon
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-6">
                  We're building specialized features for educational institutions. Join our waitlist to be notified when these tools become available.
                </p>
                <button
                  onClick={() => window.open('https://tally.so/r/wM0JlY', '_blank')}
                  className="bg-rebuttl-blue hover:bg-rebuttl-blue/90 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Education;

