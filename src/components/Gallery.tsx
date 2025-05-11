
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample project data - in real project, this would be from a database or CMS
const projects = [
  {
    id: 1,
    title: "Modern Pool Renovation",
    location: "Palm Springs, CA",
    description: "Complete renovation including new tile, coping, plaster, and LED lighting system.",
    beforeImage: "https://images.unsplash.com/photo-1552302894-3b4f7275229c?q=80&w=2070&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Resort-Style Transformation",
    location: "Scottsdale, AZ",
    description: "Conversion from dated lap pool to luxury retreat with beach entry and spa.",
    beforeImage: "https://images.unsplash.com/photo-1576013551627-0fd24b5ead5e?q=80&w=2070&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Classic Pool Refinish",
    location: "Newport Beach, CA",
    description: "Refinishing with premium pebble surface and travertine deck installation.",
    beforeImage: "https://images.unsplash.com/photo-1533323909636-5db4caa34e81?q=80&w=2069&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1567104647562-5c3ec2f79509?q=80&w=1770&auto=format&fit=crop"
  }
];

const Gallery = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isBeforeActive, setIsBeforeActive] = useState(false);
  
  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setIsBeforeActive(false);
  };
  
  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setIsBeforeActive(false);
  };

  return (
    <div id="gallery" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Before & After Gallery</h2>
          <div className="w-24 h-1 bg-pool-500 mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            See the dramatic transformations we've created for our clients. Slide to compare the before and after results.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto mb-12">
          {/* Project image container */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-xl">
            {/* After image (default view) */}
            <img 
              src={projects[currentProject].afterImage}
              alt="After renovation" 
              className="w-full h-full object-cover"
            />
            
            {/* Before image (revealed on hover/click) */}
            <div 
              className="absolute inset-0 transition-transform duration-300 ease-in-out"
              style={{ 
                clipPath: isBeforeActive ? 'inset(0)' : 'inset(0 100% 0 0)',
              }}
            >
              <img 
                src={projects[currentProject].beforeImage}
                alt="Before renovation" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Slider control */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white py-2 px-4 rounded-full text-sm flex items-center">
              <button 
                className="mr-3 focus:outline-none"
                onClick={() => setIsBeforeActive(true)}
                onMouseDown={() => setIsBeforeActive(true)}
                onMouseUp={() => setIsBeforeActive(false)}
                onMouseLeave={() => setIsBeforeActive(false)}
                onTouchStart={() => setIsBeforeActive(true)}
                onTouchEnd={() => setIsBeforeActive(false)}
              >
                Hold to see Before
              </button>
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={prevProject}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md focus:outline-none"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} className="text-gray-800" />
          </button>
          
          <button 
            onClick={nextProject}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md focus:outline-none"
            aria-label="Next project"
          >
            <ChevronRight size={24} className="text-gray-800" />
          </button>
        </div>
        
        {/* Project details */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">{projects[currentProject].title}</h3>
          <p className="text-pool-600 font-medium mb-4">{projects[currentProject].location}</p>
          <p className="text-gray-700">{projects[currentProject].description}</p>
        </div>
        
        {/* Project navigation dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentProject(index);
                setIsBeforeActive(false);
              }}
              className={`w-3 h-3 rounded-full focus:outline-none ${
                index === currentProject ? 'bg-pool-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-pool-600 hover:bg-pool-700 text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
