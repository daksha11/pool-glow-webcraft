
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <div id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-pool-500 mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Reach out to us for a free consultation and estimate. We'll help you create the pool of your dreams.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
                    <Input 
                      id="firstName"
                      placeholder="Enter your first name"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
                    <Input 
                      id="lastName"
                      placeholder="Enter your last name"
                      className="w-full"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                  <Input 
                    id="phone"
                    placeholder="Enter your phone number"
                    className="w-full"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="service" className="block text-gray-700 mb-2">Service Interested In</label>
                  <select 
                    id="service"
                    className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pool-500"
                    required
                  >
                    <option value="" disabled selected>Select a service</option>
                    <option value="resurfacing">Pool Resurfacing</option>
                    <option value="tile">Tile & Coping Replacement</option>
                    <option value="equipment">Equipment Upgrades</option>
                    <option value="remodeling">Complete Remodeling</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us about your project"
                    className="w-full min-h-[120px]"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-pool-600 hover:bg-pool-700 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Our Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-pool-100 rounded-full flex items-center justify-center">
                      <Phone size={24} className="text-pool-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Phone</h4>
                    <p className="text-gray-700 mt-1">(555) 123-4567</p>
                    <p className="text-gray-500 text-sm mt-1">Mon-Fri, 8am-6pm</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-pool-100 rounded-full flex items-center justify-center">
                      <Mail size={24} className="text-pool-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Email</h4>
                    <p className="text-gray-700 mt-1">info@aquarenovate.com</p>
                    <p className="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-pool-100 rounded-full flex items-center justify-center">
                      <MapPin size={24} className="text-pool-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Office Location</h4>
                    <p className="text-gray-700 mt-1">123 Pool Drive</p>
                    <p className="text-gray-700">Palm Springs, CA 92262</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 h-64 rounded-lg overflow-hidden">
                {/* Replace this with an actual Google Maps embed */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Map Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
