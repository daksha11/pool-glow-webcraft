
import React from 'react';
import { Users, Clock, Award, CheckCircle } from 'lucide-react';

const AboutUs = () => {
  return (
    <div id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About AquaRenovate</h2>
          <div className="w-24 h-1 bg-pool-500 mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            With over 15 years of experience, we specialize in transforming outdated pools into stunning backyard retreats.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center mb-20 gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1576013551627-0fd24b5ead5e?q=80&w=2070&auto=format&fit=crop" 
              alt="Our team at work" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Our Story</h3>
            <p className="text-gray-700 mb-4">
              Founded in 2008, AquaRenovate began with a simple mission: to provide homeowners with high-quality pool renovation services that enhance both the beauty and functionality of their backyard spaces.
            </p>
            <p className="text-gray-700 mb-4">
              Our founder, David Miller, noticed a gap in the market for renovation specialists who understood both the technical and aesthetic aspects of pool design. With a background in construction and a passion for creating beautiful outdoor spaces, he assembled a team of experienced professionals dedicated to transforming aging pools into modern masterpieces.
            </p>
            <p className="text-gray-700">
              Today, we're proud to be the region's leading pool renovation company, having completed over 500 projects for satisfied homeowners across Southern California, Arizona, and Florida.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: <Users size={36} className="text-pool-500" />,
              title: "Expert Team",
              description: "Our certified professionals have decades of combined experience in pool renovation."
            },
            {
              icon: <Clock size={36} className="text-pool-500" />,
              title: "Timely Completion",
              description: "We understand the importance of completing projects on schedule."
            },
            {
              icon: <Award size={36} className="text-pool-500" />,
              title: "Quality Materials",
              description: "We use only premium materials that ensure longevity and performance."
            },
            {
              icon: <CheckCircle size={36} className="text-pool-500" />,
              title: "Satisfaction Guaranteed",
              description: "We stand behind our work with comprehensive warranties and guarantees."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md border border-gray-100 text-center">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Certifications & Partnerships</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              "National Swimming Pool Foundation",
              "Association of Pool & Spa Professionals",
              "Better Business Bureau Accredited",
              "Certified Pool Operators"
            ].map((certification, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-white rounded-full mb-4 mx-auto flex items-center justify-center shadow-md">
                  <span className="text-3xl text-pool-500 font-semibold">{index + 1}</span>
                </div>
                <p className="text-gray-700 font-medium">{certification}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
