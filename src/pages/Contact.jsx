import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiLinkedin, FiCalendar, FiMapPin, FiPhone, FiSend, FiCheckCircle } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Dynamically load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setCalendlyLoaded(true);
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      try {
        document.body.removeChild(script);
      } catch (e) {
        // Script might have been removed already
      }
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        service: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      info: 'info@veromedina.com',
      link: 'mailto:info@veromedina.com'
    },
    {
      icon: FiLinkedin,
      title: 'LinkedIn',
      info: 'linkedin.com/in/veromedina',
      link: 'https://linkedin.com/in/veromedina'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      info: 'San Francisco, CA',
      link: null
    }
  ];

  const services = [
    'Agile Audit',
    'Team Training',
    'Agile Coaching',
    'Fractional Agile Leadership',
    'Other'
  ];

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
              Let's Start Your <span className="text-teal-600">Agile Journey</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to transform your organization? Let's discuss how I can help you achieve your Agile goals with a customized approach that fits your unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h2>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      placeholder="Tell me about your current challenges and goals..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
                  >
                    <SafeIcon icon={FiSend} className="h-4 w-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={FiCheckCircle} className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Info & Calendar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                        <SafeIcon icon={item.icon} className="h-6 w-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            target={item.link.startsWith('http') ? '_blank' : '_self'}
                            rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                            className="text-teal-600 hover:text-teal-700"
                          >
                            {item.info}
                          </a>
                        ) : (
                          <span className="text-gray-600">{item.info}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendar Booking */}
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <SafeIcon icon={FiCalendar} className="h-6 w-6 text-teal-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Book a Discovery Call</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Schedule a free 30-minute consultation to discuss your Agile transformation goals and how I can help.
                </p>
                {/* Calendly Integration */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  {calendlyLoaded ? (
                    <div 
                      className="calendly-inline-widget" 
                      data-url="https://calendly.com/veromedina/discovery"
                      style={{ minWidth: '320px', height: '450px' }}
                    ></div>
                  ) : (
                    <div className="flex items-center justify-center h-96">
                      <div className="text-gray-500">Loading calendar...</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">What to Expect</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-teal-600" />
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-teal-600" />
                    <span>Free initial consultation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-teal-600" />
                    <span>Customized solution proposal</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-6">
            {[
              {
                question: 'How long does a typical Agile transformation take?',
                answer:
                  'The timeline varies based on organization size and complexity, but most transformations see initial results within 3-6 months and full maturity within 12-18 months.'
              },
              {
                question: 'Do you work with remote teams?',
                answer:
                  'Absolutely! I have extensive experience helping distributed and hybrid teams implement Agile practices effectively using digital collaboration tools.'
              },
              {
                question: 'What industries do you specialize in?',
                answer:
                  'I work across various industries including technology, finance, healthcare, and manufacturing. Agile principles are universal and adaptable to any sector.'
              },
              {
                question: 'Can you help with both Scrum and SAFe implementations?',
                answer:
                  'Yes, I\'m certified in multiple frameworks including Scrum, SAFe, and Kanban. I help organizations choose and implement the right framework for their needs.'
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;