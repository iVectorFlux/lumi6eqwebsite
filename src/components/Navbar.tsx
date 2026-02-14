import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import Logo from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { NavItemsDesktop, NavItemsMobile } from '@/components/nav';
import { signInUrl, signUpUrl } from '@/config/nav';

const FLYER_STORAGE_KEY = 'lumi6-flyer-closed';
const FLYER_HEIGHT = 48;

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const [mobileOpenSections, setMobileOpenSections] = useState<Set<number>>(new Set());
  // Use sessionStorage so flyer shows again each new session/tab; close state doesn't persist forever
  const [flyerClosed, setFlyerClosed] = useState(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem(FLYER_STORAGE_KEY) === 'true';
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.dataset.flyerClosed = flyerClosed ? 'true' : 'false';
  }, [flyerClosed]);

  const closeFlyer = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFlyerClosed(true);
    sessionStorage.setItem(FLYER_STORAGE_KEY, 'true');
  };

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
      {/* Top flyer: Free EQ test CTA */}
      {!flyerClosed && (
        <div className="fixed top-0 left-0 right-0 z-[70] h-12 bg-stone-100 border-b border-stone-200 flex items-center justify-between gap-4 px-4 shadow-sm">
          <div className="flex-1 flex items-center justify-center min-w-0 py-2">
            <div className="flex items-center gap-2 sm:gap-3 text-stone-700 text-sm md:text-base">
              <Sparkles className="w-4 h-4 flex-shrink-0 text-rebuttl-blue" />
              <span className="font-medium">Take a free EQ test</span>
              <span className="hidden sm:inline text-stone-500 font-normal">— Discover your emotional intelligence in 5 min</span>
              <Link
                to="/eq-test"
                className="inline-flex items-center gap-1.5 rounded-lg bg-rebuttl-blue hover:bg-rebuttl-blue/90 text-white text-sm font-semibold px-4 py-2 transition-colors no-underline flex-shrink-0"
              >
                Start test
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <button
            type="button"
            onClick={closeFlyer}
            className="p-1.5 rounded text-stone-500 hover:text-stone-700 hover:bg-stone-200/80 transition-colors flex-shrink-0"
            aria-label="Close banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      <nav
        className="fixed left-0 right-0 z-[60] py-2 md:py-4 px-4 md:px-10 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm"
        style={{ top: flyerClosed ? '0px' : `${FLYER_HEIGHT}px` }}
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

          <div className="hidden md:flex gap-4">
            <Button variant="ghost" className="text-gray-700 hover:text-rebuttl-blue" onClick={() => window.open(signInUrl, '_blank')}>
              Sign In
            </Button>
            <Button className="bg-rebuttl-blue hover:bg-rebuttl-blue/90 text-white" onClick={() => window.open(signUpUrl, '_blank')}>
              Sign Up
            </Button>
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
              <Button variant="ghost" className="text-gray-700 hover:text-rebuttl-blue" onClick={() => { closeMobile(); window.open(signInUrl, '_blank'); }}>
                Sign In
              </Button>
              <Button className="bg-rebuttl-blue hover:bg-rebuttl-blue/90 text-white" onClick={() => { closeMobile(); window.open(signUpUrl, '_blank'); }}>
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
