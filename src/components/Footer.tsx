
import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6">AquaRenovate</h2>
            <p className="text-gray-400 mb-6">
              Transforming outdated pools into stunning backyard retreats with quality craftsmanship and modern designs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-pool-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-pool-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-pool-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Pool Resurfacing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Tile & Coping Replacement</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Equipment Upgrades</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Complete Remodeling</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Deck Resurfacing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Water Features</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex">
                <MapPin size={20} className="text-pool-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Pool Drive<br />
                  Palm Springs, CA 92262
                </span>
              </li>
              <li className="flex">
                <Phone size={20} className="text-pool-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail size={20} className="text-pool-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@aquarenovate.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AquaRenovate. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
