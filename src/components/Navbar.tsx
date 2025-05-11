
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from 'lucide-react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-pool-800 font-serif text-2xl font-bold">
            AquaRenovate
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="nav-link">Services</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div className="hidden md:block">
          <Button className="bg-pool-600 hover:bg-pool-700 text-white">
            <Phone size={16} className="mr-2" />
            (555) 123-4567
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#services" className="block text-gray-700 hover:text-pool-600">Services</a>
            <a href="#gallery" className="block text-gray-700 hover:text-pool-600">Gallery</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-pool-600">Testimonials</a>
            <a href="#about" className="block text-gray-700 hover:text-pool-600">About Us</a>
            <a href="#contact" className="block text-gray-700 hover:text-pool-600">Contact</a>
            <Button className="bg-pool-600 hover:bg-pool-700 text-white w-full">
              <Phone size={16} className="mr-2" />
              (555) 123-4567
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
