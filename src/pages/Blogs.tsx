import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Blogs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Leadership', 'Team Building', 'Learning', 'Technology', 'Analytics', 'Remote Work'];
  
  // Static blog posts data
  const blogPosts = [
    {
      id: 'future-of-work-eq',
      title: 'The Future of Work: Why Emotional Intelligence is the #1 Skill',
      excerpt: 'Explore how EQ is becoming the most critical skill in the AI-driven workplace and what it means for your team.',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Leadership',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      featured: true
    },
    {
      id: 'building-high-performing-teams',
      title: 'Building High-Performing Teams Through EQ Assessment',
      excerpt: 'Learn how to identify and develop emotional intelligence gaps in your team for better collaboration.',
      author: 'Marcus Johnson',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Team Building',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      featured: false
    },
    {
      id: 'micro-learning-eq',
      title: 'Micro-Learning: The Secret to Sustainable EQ Development',
      excerpt: 'Discover why bite-sized learning is more effective than traditional training for emotional intelligence.',
      author: 'Dr. Emily Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Learning',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      featured: false
    },
    {
      id: 'real-time-eq-nudges',
      title: 'Real-Time EQ Nudges: Changing Behavior Where It Matters',
      excerpt: 'How contextual guidance can help teams apply emotional intelligence in their daily interactions.',
      author: 'Alex Thompson',
      date: '2024-01-08',
      readTime: '4 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      featured: false
    },
    {
      id: 'measuring-roi-eq',
      title: 'Measuring ROI: The Business Case for Emotional Intelligence',
      excerpt: 'Quantify the impact of EQ development on team performance, retention, and business outcomes.',
      author: 'Jennifer Lee',
      date: '2024-01-05',
      readTime: '8 min read',
      category: 'Analytics',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      featured: false
    },
    {
      id: 'remote-work-eq-connection',
      title: 'Remote Work and EQ: Maintaining Connection Across Distance',
      excerpt: 'Strategies for building emotional intelligence in distributed teams and virtual environments.',
      author: 'David Park',
      date: '2024-01-03',
      readTime: '6 min read',
      category: 'Remote Work',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      featured: false
    }
  ];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
  
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-rebuttl-blue to-rebuttl-purple bg-clip-text text-transparent mb-6">
              Insights & Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the latest insights on emotional intelligence, team dynamics, and the future of work.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === selectedCategory
                    ? 'bg-rebuttl-blue text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="md:flex">
                  <Link to={`/blogs/${post.id}`} className="md:w-1/2 block">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </Link>
                  <CardContent className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-rebuttl-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-sm text-gray-500">{post.category}</span>
                    </div>
                    <Link to={`/blogs/${post.id}`}>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-rebuttl-blue transition-colors cursor-pointer">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 mb-6 text-lg">{post.excerpt}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <Link 
                      to={`/blogs/${post.id}`}
                      className="inline-flex items-center gap-2 text-rebuttl-blue font-semibold hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <Link to={`/blogs/${post.id}`} className="block relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </Link>
                <CardContent className="p-6">
                  <Link to={`/blogs/${post.id}`}>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-rebuttl-blue transition-colors line-clamp-2 cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <Link 
                    to={`/blogs/${post.id}`}
                    className="inline-flex items-center gap-2 text-rebuttl-blue font-semibold hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-6">
                Get the latest insights on emotional intelligence and team development delivered to your inbox.
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rebuttl-blue"
                />
                <button className="bg-rebuttl-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-rebuttl-blue/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
