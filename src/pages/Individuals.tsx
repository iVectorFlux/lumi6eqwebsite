import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { User, TrendingUp, Heart, Target, Users, Award, Briefcase, Lightbulb } from 'lucide-react';

const Individuals: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-rebuttl-lightBg">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-rebuttl-purple/10 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-rebuttl-purple/10 rounded-full mb-6">
                <User className="w-10 h-10 text-rebuttl-purple" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rebuttl-purple to-rebuttl-orange bg-clip-text text-transparent">
                Emotional Intelligence for Individuals
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                Discover your emotional intelligence profile and unlock your potential for personal growth, better relationships, and career success.
              </p>
            </div>
          </div>
        </section>

        {/* Self-Discovery Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent">
                Discover Your EQ Profile
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Understand your emotional strengths and growth areas with our comprehensive assessment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-rebuttl-blue/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Heart className="w-6 h-6 text-rebuttl-blue" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Self-Awareness</h3>
                  <p className="text-sm text-gray-600">
                    Understand your emotions, triggers, and how they impact your decisions and behavior.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-rebuttl-purple/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Target className="w-6 h-6 text-rebuttl-purple" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Self-Management</h3>
                  <p className="text-sm text-gray-600">
                    Learn to regulate emotions, manage stress, and maintain emotional balance in challenging situations.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-rebuttl-orange/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-6 h-6 text-rebuttl-orange" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Social Awareness</h3>
                  <p className="text-sm text-gray-600">
                    Develop empathy and understand others' emotions, perspectives, and social dynamics.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-rebuttl-green/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Award className="w-6 h-6 text-rebuttl-green" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Relationship Management</h3>
                  <p className="text-sm text-gray-600">
                    Build stronger connections, communicate effectively, and influence others positively.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-rebuttl-lightBg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rebuttl-orange to-rebuttl-red bg-clip-text text-transparent">
                Transform Your Life
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Apply emotional intelligence to improve every area of your life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-rebuttl-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-rebuttl-blue" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Career Advancement</h3>
                  <p className="text-gray-600 mb-4">
                    Stand out in your career with emotional intelligence skills that employers value. Improve leadership, teamwork, and communication.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Better workplace relationships</li>
                    <li>• Enhanced leadership capabilities</li>
                    <li>• Improved conflict resolution</li>
                    <li>• Increased influence and impact</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-rebuttl-purple/10 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-rebuttl-purple" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Personal Relationships</h3>
                  <p className="text-gray-600 mb-4">
                    Build deeper, more meaningful connections with family, friends, and partners through emotional awareness and empathy.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Stronger communication skills</li>
                    <li>• Better conflict resolution</li>
                    <li>• Increased empathy and understanding</li>
                    <li>• Deeper emotional intimacy</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-rebuttl-orange/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-rebuttl-orange" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Personal Growth</h3>
                  <p className="text-gray-600 mb-4">
                    Understand yourself better and develop the emotional skills needed for resilience, self-confidence, and personal fulfillment.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Enhanced self-awareness</li>
                    <li>• Better stress management</li>
                    <li>• Increased emotional resilience</li>
                    <li>• Greater life satisfaction</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-rebuttl-green/10 rounded-lg flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-rebuttl-green" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Decision Making</h3>
                  <p className="text-gray-600 mb-4">
                    Make better decisions by understanding how emotions influence your choices and learning to balance logic with emotional wisdom.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Emotionally intelligent choices</li>
                    <li>• Reduced impulsive decisions</li>
                    <li>• Better risk assessment</li>
                    <li>• Aligned with your values</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent">
                What You Get
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-rebuttl-blue/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Target className="w-6 h-6 text-rebuttl-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Personalized Assessment</h3>
                  <p className="text-gray-600 text-sm">
                    Complete a comprehensive EQ assessment tailored to your individual profile and goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-rebuttl-purple/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <TrendingUp className="w-6 h-6 text-rebuttl-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Growth Plan</h3>
                  <p className="text-gray-600 text-sm">
                    Receive a customized development plan with actionable steps to improve your emotional intelligence.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-rebuttl-orange/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Heart className="w-6 h-6 text-rebuttl-orange" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                  <p className="text-gray-600 text-sm">
                    Access resources, exercises, and insights to continue your emotional intelligence journey.
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
              <div className="bg-rebuttl-purple/10 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Coming Soon
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-6">
                  Individual EQ assessments and personal development tools are launching soon. Be the first to know when they're available.
                </p>
                <button
                  onClick={() => window.open('https://app.lumi6.com/signup', '_blank')}
                  className="bg-rebuttl-purple hover:bg-rebuttl-purple/90 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  Get Notified
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

export default Individuals;

