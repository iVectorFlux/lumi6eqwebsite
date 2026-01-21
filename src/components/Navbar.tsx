
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/ui/logo';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-2 md:py-4 px-4 md:px-10 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            {/* Text Logo - shown when not scrolled */}
            <div className={`transition-all duration-300 ease-in-out ${
              isScrolled ? 'opacity-0 scale-95 absolute' : 'opacity-100 scale-100'
            }`}>
              <Logo size="md" />
            </div>
            
            {/* SVG Logo - shown when scrolled */}
            <div className={`transition-all duration-300 ease-in-out ${
              isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'
            }`}>
              <img 
                src="https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/Logo+1.svg" 
                alt="Lumi6" 
                className="h-8 w-auto"
              />
            </div>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/products" className="font-bold text-gray-700 hover:text-rebuttl-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-rebuttl-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Products</Link>
          <Link to="/education" className="font-bold text-gray-700 hover:text-rebuttl-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-rebuttl-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Education</Link>
          <Link to="/individuals" className="font-bold text-gray-700 hover:text-rebuttl-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-rebuttl-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Individuals</Link>
          <Link to="/#features" className="font-bold text-gray-700 hover:text-rebuttl-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-rebuttl-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Features</Link>
          <Link to="/blogs" className="font-bold text-gray-700 hover:text-rebuttl-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-rebuttl-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Blogs</Link>
        </div>
        
        <div className="hidden md:flex gap-4">
          <Button 
            variant="ghost" 
            className="text-gray-700 hover:text-rebuttl-blue"
            onClick={() => window.open('https://app.lumi6.com/login', '_blank')}
          >
            Sign In
          </Button>
          <Button 
            className="bg-rebuttl-blue hover:bg-rebuttl-blue/90 text-white"
            onClick={() => window.open('https://app.lumi6.com/signup', '_blank')}
          >
            Sign Up
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 z-50">
        <div className="flex flex-col gap-4">
          <Link to="/products" className="font-bold text-gray-700 hover:text-rebuttl-blue py-2 text-center" onClick={() => setMobileMenuOpen(false)}>Products</Link>
          <Link to="/education" className="font-bold text-gray-700 hover:text-rebuttl-blue py-2 text-center" onClick={() => setMobileMenuOpen(false)}>Education</Link>
          <Link to="/individuals" className="font-bold text-gray-700 hover:text-rebuttl-blue py-2 text-center" onClick={() => setMobileMenuOpen(false)}>Individuals</Link>
          <Link to="/#features" className="font-bold text-gray-700 hover:text-rebuttl-blue py-2 text-center" onClick={() => setMobileMenuOpen(false)}>Features</Link>
          <Link to="/blogs" className="font-bold text-gray-700 hover:text-rebuttl-blue py-2 text-center" onClick={() => setMobileMenuOpen(false)}>Blogs</Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-200">
              <Button 
                variant="ghost" 
                className="text-gray-700 hover:text-rebuttl-blue" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.open('https://app.lumi6.com/login', '_blank');
                }}
              >
                Sign In
              </Button>
              <Button 
                className="bg-rebuttl-blue hover:bg-rebuttl-blue/90 text-white" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.open('https://app.lumi6.com/signup', '_blank');
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
