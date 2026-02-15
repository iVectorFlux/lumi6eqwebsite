import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/ui/logo';
import { NavItemsDesktop, NavItemsMobile } from '@/components/nav';
import { signInUrl, signUpUrl } from '@/config/nav';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const [mobileOpenSections, setMobileOpenSections] = useState<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const toggleMobileSection = useCallback((index: number) => {
    setMobileOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[60] py-2 md:py-4 px-4 md:px-10 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm"
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <div className={`transition-all duration-300 ease-in-out ${isScrolled ? 'opacity-0 scale-95 absolute' : 'opacity-100 scale-100'}`}>
                <Logo size="md" />
              </div>
              <div className={`transition-all duration-300 ease-in-out ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'}`}>
                <img src="https://lumi6-dev.s3.eu-north-1.amazonaws.com/EQ/Logo+1.svg" alt="Lumi6" className="h-8 w-auto" />
              </div>
            </div>
          </Link>

          <NavItemsDesktop openDropdownIndex={openDropdownIndex} setOpenDropdownIndex={setOpenDropdownIndex} />

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              className="text-gray-700 hover:text-rebuttl-blue font-medium transition-colors"
              onClick={() => window.open(signInUrl, '_blank')}
            >
              Sign In
            </button>
            <a
              href={signUpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass-primary px-5 py-2.5 text-sm"
            >
              Sign Up
            </a>
          </div>

          <button
            className="md:hidden flex items-center text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 z-50">
            <NavItemsMobile onItemClick={closeMobile} openSections={mobileOpenSections} toggleSection={toggleMobileSection} />
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-200 mt-2">
              <button
                type="button"
                className="text-left text-gray-700 hover:text-rebuttl-blue font-medium py-2"
                onClick={() => { closeMobile(); window.open(signInUrl, '_blank'); }}
              >
                Sign In
              </button>
              <a
                href={signUpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass-primary inline-flex justify-center px-5 py-2.5 text-sm"
                onClick={closeMobile}
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
