import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiUsers, FiTrendingUp, FiSettings, FiCheckCircle, FiArrowRight, FiClock, FiDollarSign } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiTarget,
      title: 'Agile Audit',
      description: 'Comprehensive assessment of your current Agile practices with actionable recommendations.',
      features: [
        'Current state analysis',
        'Gap identification',
        'Roadmap development',
        'ROI projections'
      ],
      targetAudience: 'Organizations beginning their Agile journey or looking to optimize existing practices',
      duration: '2-4 weeks',
      price: 'Starting at $5,000'
    },
    {
      icon: FiUsers,
      title: 'Team Training',
      description: 'Expert training in Scrum, Kanban, and SAFe methodologies for high-performing teams.',
      features: [
        'Scrum Master certification prep',
        'Product Owner training',
        'SAFe framework implementation',
        'Kanban system setup'
      ],
      targetAudience: 'Development teams, product managers, and Agile practitioners',
      duration: '1-5 days per course',
      price: 'Starting at $2,500'
    },
    {
      icon: FiTrendingUp,
      title: 'Agile Coaching',
      description: 'Ongoing guidance and support to embed Agile principles throughout your organization.',
      features: [
        'One-on-one coaching sessions',
        'Team facilitation',
        'Process optimization',
        'Culture transformation'
      ],
      targetAudience: 'Teams and organizations implementing or scaling Agile practices',
      duration: '3-12 months',
      price: 'Starting at $8,000/month'
    },
    {
      icon: FiSettings,
      title: 'Fractional Agile Leadership',
      description: 'Part-time executive leadership to drive your Agile transformation strategy.',
      features: [
        'Strategic planning',
        'Executive coaching',
        'Change management',
        'Metrics and reporting'
      ],
      targetAudience: 'Mid-sized companies needing senior Agile leadership without full-time commitment',
      duration: '6-18 months',
      price: 'Starting at $12,000/month'
    }
  ];

  const benefits = [
    'Faster time to market',
    'Improved team collaboration',
    'Higher quality deliverables',
    'Increased customer satisfaction',
    'Better risk management',
    'Enhanced adaptability'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Agile <span className="text-teal-600">Transformation Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From initial assessment to full implementation, I provide end-to-end Agile solutions
              tailored to your organization's unique needs and goals.
            </p>
            <Link
              to="/contact"
              className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-all duration-200 font-semibold text-lg inline-flex items-center group"
            >
              Discuss Your Needs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={service.icon} className="h-8 w-8 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <SafeIcon
                            icon={FiCheckCircle}
                            className="h-4 w-4 text-teal-600 flex-shrink-0"
                          />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Target Audience:</h4>
                    <p className="text-gray-600 text-sm">{service.targetAudience}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiClock} className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiDollarSign} className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{service.price}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Expected Outcomes
            </h2>
            <p className="text-xl text-gray-600">
              The measurable benefits you can expect from our Agile transformation
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-3"
              >
                <SafeIcon icon={FiCheckCircle} className="h-6 w-6 text-teal-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">My Process</h2>
            <p className="text-xl text-gray-600">A proven methodology for successful Agile transformation</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Evaluate current state and identify opportunities'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop customized transformation roadmap'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Execute changes with ongoing support'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuous improvement and scaling'
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Agile Journey?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Let's discuss which service is the perfect fit for your organization's needs.
            </p>
            <Link
              to="/contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg inline-flex items-center group"
            >
              Schedule Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;