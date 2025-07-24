import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import StripeCheckout from '../components/StripeCheckout';
import * as FiIcons from 'react-icons/fi';

const { FiDownload, FiFileText, FiCheckCircle, FiStar, FiUsers, FiTrendingUp, FiX } = FiIcons;

const Resources = () => {
  const [selectedWhitepaper, setSelectedWhitepaper] = useState(null);
  const [showStripeModal, setShowStripeModal] = useState(false);

  const leadMagnets = [
    {
      title: 'Agile Readiness Assessment Checklist',
      description: 'A comprehensive 25-point checklist to evaluate your organization\'s readiness for Agile transformation.',
      type: 'PDF Guide',
      pages: '12 pages',
      downloads: '2,500+',
      featured: true,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Scrum Master\'s Quick Reference Guide',
      description: 'Essential ceremonies, artifacts, and best practices every Scrum Master needs at their fingertips.',
      type: 'PDF Reference',
      pages: '8 pages',
      downloads: '1,800+',
      featured: false,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'ROI Calculator for Agile Transformation',
      description: 'Excel template to calculate and track the return on investment of your Agile initiatives.',
      type: 'Excel Template',
      pages: 'Interactive',
      downloads: '1,200+',
      featured: false,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const whitepapers = [
    {
      title: 'The Complete Guide to Scaling Agile in Enterprise Organizations',
      description: 'A comprehensive whitepaper covering frameworks, challenges, and best practices for large-scale Agile adoption.',
      type: 'Whitepaper',
      pages: '28 pages',
      price: 19.99,
      topics: ['SAFe Implementation', 'Change Management', 'Metrics & KPIs', 'Case Studies'],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Remote Agile: Best Practices for Distributed Teams',
      description: 'Strategies and tools for maintaining Agile effectiveness in remote and hybrid work environments.',
      type: 'Research Report',
      pages: '20 pages',
      price: 14.99,
      topics: ['Virtual Ceremonies', 'Digital Tools', 'Team Dynamics', 'Performance Metrics'],
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const tools = [
    {
      title: 'Sprint Planning Template',
      description: 'Ready-to-use template for effective sprint planning sessions.',
      type: 'Template'
    },
    {
      title: 'Retrospective Formats Collection',
      description: '15 different retrospective formats to keep your team engaged.',
      type: 'Collection'
    },
    {
      title: 'User Story Template & Examples',
      description: 'Perfect user story structure with real-world examples.',
      type: 'Template'
    },
    {
      title: 'Agile Metrics Dashboard',
      description: 'Track key Agile metrics with this comprehensive dashboard.',
      type: 'Dashboard'
    }
  ];

  const handleWhitepaperClick = (whitepaper) => {
    setSelectedWhitepaper(whitepaper);
    setShowStripeModal(true);
  };

  const closeStripeModal = () => {
    setShowStripeModal(false);
    setSelectedWhitepaper(null);
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
              Free Agile <span className="text-teal-600">Resources & Tools</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Download proven templates, guides, and tools to accelerate your Agile transformation journey. All resources are based on real-world experience and best practices.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiUsers} className="h-5 w-5 text-teal-600" />
                <span>5,000+ Downloads</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiStar} className="h-5 w-5 text-teal-600" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiTrendingUp} className="h-5 w-5 text-teal-600" />
                <span>Proven Results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Lead Magnets */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Popular Downloads
            </h2>
            <p className="text-xl text-gray-600">
              Our most downloaded resources to jumpstart your Agile journey
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadMagnets.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  resource.featured ? 'ring-2 ring-teal-600' : ''
                }`}
              >
                {resource.featured && (
                  <div className="bg-teal-600 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="relative">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {resource.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <span>{resource.pages}</span>
                    <span>{resource.downloads} downloads</span>
                  </div>
                  <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 font-medium flex items-center justify-center space-x-2">
                    <SafeIcon icon={FiDownload} className="h-4 w-4" />
                    <span>Download Free</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              In-Depth Whitepapers
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive research and analysis on advanced Agile topics
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {whitepapers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={paper.image}
                      alt={paper.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <SafeIcon icon={FiFileText} className="h-5 w-5 text-teal-600" />
                      <span className="text-sm font-medium text-teal-600">{paper.type}</span>
                      <span className="text-sm text-gray-500">• {paper.pages}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{paper.title}</h3>
                    <p className="text-gray-600 mb-4">{paper.description}</p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Topics Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {paper.topics.map((topic) => (
                          <span
                            key={topic}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button 
                      onClick={() => handleWhitepaperClick(paper)}
                      className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
                    >
                      <span>${paper.price}</span>
                      <span>•</span>
                      <span>Purchase Whitepaper</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Templates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Practical Tools & Templates
            </h2>
            <p className="text-xl text-gray-600">
              Ready-to-use resources for immediate implementation
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <SafeIcon icon={FiFileText} className="h-5 w-5 text-teal-600" />
                      <span className="text-sm font-medium text-teal-600">{tool.type}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.title}</h3>
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                  </div>
                  <button className="bg-teal-600 text-white p-2 rounded-lg hover:bg-teal-700 transition-colors duration-200 ml-4">
                    <SafeIcon icon={FiDownload} className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Get New Resources First
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Join our community and be the first to access new tools, templates, and insights.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button className="bg-white text-teal-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stripe Modal */}
      {showStripeModal && selectedWhitepaper && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-6 max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">Purchase Whitepaper</h3>
              <button onClick={closeStripeModal} className="text-gray-500 hover:text-gray-700">
                <SafeIcon icon={FiX} className="h-5 w-5" />
              </button>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">{selectedWhitepaper.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{selectedWhitepaper.description}</p>
              <div className="flex justify-between items-center border-t border-b border-gray-200 py-3 my-3">
                <span className="text-gray-700">Price:</span>
                <span className="font-semibold text-gray-900">${selectedWhitepaper.price}</span>
              </div>
            </div>
            <StripeCheckout 
              price={selectedWhitepaper.price} 
              productName={selectedWhitepaper.title} 
              onClose={closeStripeModal} 
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Resources;