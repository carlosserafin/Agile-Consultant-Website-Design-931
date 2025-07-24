import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiUsers, FiTrendingUp, FiCheckCircle, FiArrowRight, FiStar } = FiIcons;

const Home = () => {
  const services = [
    {
      icon: FiTarget,
      title: 'Agile Audit',
      description: 'Comprehensive assessment of your current Agile practices and roadmap for improvement.'
    },
    {
      icon: FiUsers,
      title: 'Team Training',
      description: 'Expert training in Scrum, Kanban, and SAFe methodologies for high-performing teams.'
    },
    {
      icon: FiTrendingUp,
      title: 'Agile Coaching',
      description: 'Ongoing guidance and support to embed Agile principles throughout your organization.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'VP of Engineering',
      company: 'TechCorp',
      content: 'Vero transformed our development process. Our delivery speed increased by 40% while maintaining quality.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'InnovateCo',
      content: 'The Agile transformation was seamless. Vero\'s expertise made all the difference in our success.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Scrum Master',
      company: 'DataFlow Inc',
      content: 'Outstanding coaching that elevated our entire team\'s performance and collaboration.',
      rating: 5
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Organization with{' '}
                <span className="text-teal-600">Agile Excellence</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Expert Agile & SCRUM consulting to accelerate delivery, improve team performance, and drive sustainable organizational change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-all duration-200 font-semibold text-lg flex items-center justify-center group"
                >
                  Book Free Discovery Call
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg hover:bg-teal-600 hover:text-white transition-all duration-200 font-semibold text-lg text-center"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Agile team collaboration"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiCheckCircle} className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">40% Faster Delivery</p>
                    <p className="text-sm text-gray-600">Average improvement</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Agile Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From assessment to implementation, I provide end-to-end Agile transformation services
              tailored to your organization's unique needs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                  <SafeIcon
                    icon={service.icon}
                    className="h-8 w-8 text-teal-600 group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold text-lg group"
            >
              View All Services
              <SafeIcon
                icon={FiArrowRight}
                className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Vero Medina - Agile Consultant"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Meet Vero Medina
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 10 years of experience in Agile transformation, I help organizations unlock
                their potential through proven methodologies and personalized coaching.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">Certified Scrum Master (CSM)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">SAFe Program Consultant (SPC)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-700">100+ Successful Transformations</span>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold text-lg group"
              >
                Learn More About My Approach
                <SafeIcon
                  icon={FiArrowRight}
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how organizations have transformed with Agile expertise
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-teal-600">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Let's discuss how Agile methodologies can accelerate your team's success.
            </p>
            <Link
              to="/contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg inline-flex items-center group"
            >
              Schedule Your Free Discovery Call
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;