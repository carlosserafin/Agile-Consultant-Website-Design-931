import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiLinkedin, FiMail, FiPhone } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/assets/vero-medina-logo.png" 
                alt="Vero Medina Logo" 
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Transforming organizations through Agile methodologies and SCRUM practices. 
              Helping teams achieve their full potential with proven frameworks and expert guidance.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/veromedina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-teal-400 transition-colors"
              >
                <SafeIcon icon={FiLinkedin} className="h-6 w-6" />
              </a>
              <a
                href="mailto:info@veromedina.com"
                className="text-gray-300 hover:text-teal-400 transition-colors"
              >
                <SafeIcon icon={FiMail} className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-teal-400 transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-teal-400 transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-teal-400 transition-colors">Blog</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-teal-400 transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-300">
                <SafeIcon icon={FiMail} className="h-4 w-4" />
                <span>info@veromedina.com</span>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-teal-400 hover:text-teal-300 transition-colors"
                >
                  Book a Discovery Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Vero Medina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;