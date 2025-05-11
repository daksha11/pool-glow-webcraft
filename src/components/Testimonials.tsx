
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Michael Thompson",
    location: "La Jolla, CA",
    text: "The team at AquaRenovate transformed our outdated pool into a stunning backyard oasis. Their attention to detail and quality craftsmanship exceeded our expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Jennifer Davis",
    location: "Scottsdale, AZ",
    text: "From start to finish, the renovation process was smooth and professional. They completed the project on time and on budget, and the results are absolutely beautiful.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    name: "Robert Wilson",
    location: "Naples, FL",
    text: "We've had our pool for 15 years and it was showing its age. AquaRenovate did an amazing job modernizing it with new tiles, lighting, and equipment. It looks brand new!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-pool-500 mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Hear from our satisfied clients about their pool renovation experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card relative">
              {/* Quote mark */}
              <div className="absolute -top-6 left-6 text-6xl text-pool-200 font-serif">"</div>
              
              <div className="flex flex-col h-full">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-gray-700 mb-6 flex-grow italic">"{testimonial.text}"</p>
                
                {/* Client info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-pool-600 text-white py-8 px-4 md:px-12 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to transform your pool?</h3>
            <p className="text-white/80 mb-6">
              Contact us today for a free consultation and estimate.
            </p>
            <div className="flex justify-center">
              <a 
                href="#contact"
                className="bg-white text-pool-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
