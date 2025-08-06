import React from 'react';
import { Camera, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Mail, href: 'mailto:alex@alexmorgan.photography', label: 'Email' }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Camera className="h-8 w-8 text-white" />
            <span className="text-white font-bold text-xl">Amit Meena</span>
          </div>
          
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            amateur photographer capturing life's most beautiful moments through the lens.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 Amit Meena Photography. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;