import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiClock, FiArrowRight, FiBookOpen } = FiIcons;

const Blog = () => {
  const blogPosts = [
    {
      title: 'The 5 Most Common Agile Transformation Pitfalls and How to Avoid Them',
      excerpt: 'Learn from real-world experiences about the mistakes that can derail your Agile transformation and practical strategies to navigate them successfully.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Agile Transformation',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Building High-Performance Scrum Teams: A Practical Guide',
      excerpt: 'Discover the key principles and practices that separate exceptional Scrum teams from the rest, with actionable insights you can implement immediately.',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'Scrum',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'SAFe vs. Scrum: Choosing the Right Framework for Your Organization',
      excerpt: 'A comprehensive comparison of SAFe and Scrum frameworks to help you make an informed decision based on your organization\'s specific needs.',
      date: '2024-01-01',
      readTime: '10 min read',
      category: 'Frameworks',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'The Psychology of Change: Leading Successful Agile Adoption',
      excerpt: 'Understanding the human side of Agile transformation and how to create lasting cultural change that sticks.',
      date: '2023-12-25',
      readTime: '7 min read',
      category: 'Leadership',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Metrics That Matter: Measuring Agile Success Beyond Velocity',
      excerpt: 'Move beyond traditional metrics to understand what really indicates a successful Agile implementation and continuous improvement.',
      date: '2023-12-18',
      readTime: '9 min read',
      category: 'Metrics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Remote Agile: Adapting Scrum Practices for Distributed Teams',
      excerpt: 'Practical strategies and tools for maintaining Agile effectiveness when your team is working remotely or in a hybrid environment.',
      date: '2023-12-11',
      readTime: '8 min read',
      category: 'Remote Work',
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const categories = ['All', 'Agile Transformation', 'Scrum', 'Frameworks', 'Leadership', 'Metrics', 'Remote Work'];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Agile Insights & 
              <span className="text-teal-600"> Best Practices</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Practical advice, real-world experiences, and actionable insights to help you 
              succeed in your Agile transformation journey.
            </p>
            <div className="flex items-center justify-center space-x-2 text-teal-600">
              <SafeIcon icon={FiBookOpen} className="h-5 w-5" />
              <span className="font-medium">New articles published weekly</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border border-gray-300 hover:border-teal-600 hover:text-teal-600"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiCalendar} className="h-4 w-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiClock} className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-teal-600 font-medium group-hover:text-teal-700">
                    <span>Read More</span>
                    <SafeIcon icon={FiArrowRight} className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest Agile insights and best practices delivered to your inbox weekly.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                />
                <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;