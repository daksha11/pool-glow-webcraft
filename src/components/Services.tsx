
import React from 'react';
import { 
  Droplets, 
  Wrench, 
  Settings, 
  Clock, 
  CheckCircle 
} from 'lucide-react';

const serviceItems = [
  {
    icon: <Droplets size={36} className="text-pool-500" />,
    title: "Pool Resurfacing",
    description: "Revitalize your pool with premium quality surfaces that are durable, stain-resistant and beautiful."
  },
  {
    icon: <Wrench size={36} className="text-pool-500" />,
    title: "Tile & Coping Replacement",
    description: "Update your pool's aesthetic with modern tiles and secure, beautiful coping options."
  },
  {
    icon: <Settings size={36} className="text-pool-500" />,
    title: "Equipment Upgrades",
    description: "Improve efficiency with state-of-the-art pumps, filters, heaters and automation systems."
  },
  {
    icon: <Clock size={36} className="text-pool-500" />,
    title: "Complete Remodeling",
    description: "Transform your outdated pool into a stunning backyard centerpiece with comprehensive renovations."
  }
];

const Services = () => {
  return (
    <div id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Renovation Services</h2>
          <div className="w-24 h-1 bg-pool-500 mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We provide comprehensive pool renovation services to upgrade your pool's appearance, 
            functionality, and efficiency with quality craftsmanship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((item, index) => (
            <div key={index} className="service-card">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Proven Process</h3>
              <p className="text-gray-700 mb-6">
                We've refined our renovation process to ensure efficiency, quality, and client satisfaction at every step.
              </p>
              
              <div className="space-y-4">
                {[
                  "Detailed on-site consultation and assessment",
                  "Custom design and material selection",
                  "Transparent quoting with no hidden costs",
                  "Expert construction by certified technicians",
                  "Quality assurance inspections"
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-pool-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1622830028316-89f8fabb9cc7?q=80&w=1887&auto=format&fit=crop"
                alt="Pool renovation process" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
