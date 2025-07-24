import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAward, FiUsers, FiTrendingUp, FiCheckCircle, FiLinkedin } = FiIcons;

const About = () => {
  const certifications = [
    'Certified Scrum Master (CSM)',
    'SAFe Program Consultant (SPC)',
    'Professional Scrum Master (PSM)',
    'Agile Certified Practitioner (PMI-ACP)',
    'Kanban Management Professional (KMP)'
  ];

  const values = [
    {
      icon: FiUsers,
      title: 'People First',
      description: 'Agile is about people and interactions. I focus on building strong, collaborative teams that deliver exceptional results.'
    },
    {
      icon: FiTrendingUp,
      title: 'Continuous Improvement',
      description: 'Every organization is unique. I believe in iterative approaches that adapt and evolve with your specific needs.'
    },
    {
      icon: FiCheckCircle,
      title: 'Proven Results',
      description: 'My methodologies are backed by real-world success stories and measurable business outcomes.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Transforming Organizations Through 
                <span className="text-teal-600"> Agile Excellence</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                With over a decade of experience in Agile transformation, I help organizations 
                unlock their potential and achieve sustainable growth through proven methodologies.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://linkedin.com/in/veromedina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-semibold"
                >
                  <SafeIcon icon={FiLinkedin} className="h-5 w-5" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Vero Medina - Agile Consultant"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">My Journey</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg mx-auto text-gray-600"
          >
            <p className="text-xl leading-relaxed mb-6">
              My passion for Agile began during my early career as a software developer, where I witnessed 
              firsthand the challenges teams face when working in traditional, rigid environments. The 
              frustration of missed deadlines, poor communication, and low team morale drove me to explore 
              better ways of working.
            </p>
            
            <p className="text-xl leading-relaxed mb-6">
              Over the past 10 years, I've had the privilege of guiding over 100 organizations through 
              their Agile transformation journeys. From startups to Fortune 500 companies, I've seen how 
              the right approach to Agile can completely transform not just processes, but company culture 
              and employee satisfaction.
            </p>

            <p className="text-xl leading-relaxed mb-6">
              What sets my approach apart is the focus on people and sustainable change. While frameworks 
              and methodologies are important, true transformation happens when teams feel empowered, 
              engaged, and aligned with a common purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">My Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide every transformation I lead
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={value.icon} className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Continuously investing in knowledge to deliver the best results
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {certifications.map((cert, index) => (
              <div
                key={cert}
                className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg"
              >
                <SafeIcon icon={FiAward} className="h-6 w-6 text-teal-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">{cert}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Impact by the Numbers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-teal-100">Organizations Transformed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-teal-100">Years of Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-white mb-2">40%</div>
              <div className="text-teal-100">Average Delivery Improvement</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-teal-100">Client Satisfaction Rate</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;