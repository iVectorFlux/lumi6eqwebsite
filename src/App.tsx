
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, Suspense, lazy, useState } from "react";
import AppLayout from "@/components/AppLayout";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Products = lazy(() => import("./pages/Products"));
const ProductsDiscover = lazy(() => import("./pages/ProductsDiscover"));
const ProductsGrow = lazy(() => import("./pages/ProductsGrow"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Education = lazy(() => import("./pages/Education"));
const Individuals = lazy(() => import("./pages/Individuals"));
const EQTest = lazy(() => import("./pages/EQTest"));
const NotFound = lazy(() => import("./pages/NotFound"));

// SVG URLs for sequential loading animation (order: circle-style, 3, 4, 5, then original 1st last)
const svgUrls = [
  "https://yadvhvt9zjohl7ms.public.blob.vercel-storage.com/emotional-intelligence-mandala-art-circle-style%20%281%29.svg",
  "https://yadvhvt9zjohl7ms.public.blob.vercel-storage.com/emotional-intelligence-mandala-art%20%283%29.svg",
  "https://yadvhvt9zjohl7ms.public.blob.vercel-storage.com/emotional-intelligence-mandala-art%20%284%29.svg",
  "https://yadvhvt9zjohl7ms.public.blob.vercel-storage.com/emotional-intelligence-mandala-art%20%285%29.svg",
  "https://yadvhvt9zjohl7ms.public.blob.vercel-storage.com/emotional-intelligence-mandala-art%20%282%29.svg",
];

// Size scale per index: 1st = 100%, 2nd = smaller, 3–5 = incrementally smaller, last = extra small
const svgScaleByIndex = [1, 0.85, 0.7, 0.55, 0.25];

// Professional loading component with clean sequential fade
const PageLoader = ({ onSequenceComplete }: { onSequenceComplete: () => void }) => {
  const [currentSvgIndex, setCurrentSvgIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isBlurringOut, setIsBlurringOut] = useState(false);
  const displayDuration = 400; // How long each SVG is visible (ms)
  const transitionDuration = 300; // Fade transition duration (ms)

  useEffect(() => {
    const advanceToNext = () => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        const nextIndex = currentSvgIndex + 1;
        
        if (nextIndex >= svgUrls.length) {
          // All SVGs shown - fade out and complete
          setIsBlurringOut(true);
          setTimeout(() => {
            onSequenceComplete();
          }, transitionDuration);
          return;
        }
        
        setCurrentSvgIndex(nextIndex);
        setIsTransitioning(false);
      }, transitionDuration);
    };

    // Start transitions after initial display
    const timer = setInterval(advanceToNext, displayDuration);

    return () => clearInterval(timer);
  }, [currentSvgIndex, onSequenceComplete]);

  if (currentSvgIndex >= svgUrls.length) {
    return null;
  }

  return (
    <div className={`min-h-screen flex items-center justify-center fixed inset-0 z-[100] ${
      isBlurringOut ? 'animate-loader-blur-out' : 'backdrop-blur-[20px] bg-white/95'
    }`}>
      {/* Fixed-size container; each SVG scales down by index (1st=100%, then 85%, 70%, 55%, 40%) */}
      <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center shrink-0">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          style={{ transform: `scale(${svgScaleByIndex[currentSvgIndex] ?? 1})` }}
        >
          <img
            src={svgUrls[currentSvgIndex]}
            alt={`Loading Mandala ${currentSvgIndex + 1}`}
            className={`w-full h-full object-contain ${
              isTransitioning ? 'animate-fade-out' : 'animate-fade-in'
            }`}
            key={currentSvgIndex}
          />
        </div>
      </div>
    </div>
  );
};

// Marketing-only app: remove data fetching/auth providers

// Component to handle scrolling to hash fragments
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Add a small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    } else {
      // If no hash, scroll to top of the page
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

const LOADER_SEEN_KEY = 'lumi6-initial-loader-seen';

const App = () => {
  // Only show full-screen loader on first visit this session (not on every navigation or reload)
  const [isInitialLoading, setIsInitialLoading] = useState(() => {
    if (typeof window === 'undefined') return true;
    return sessionStorage.getItem(LOADER_SEEN_KEY) !== 'true';
  });
  const [allSvgsPreloaded, setAllSvgsPreloaded] = useState(false);
  const [isMinLoadTimePassed, setIsMinLoadTimePassed] = useState(false);
  const [isLoaderSequenceComplete, setIsLoaderSequenceComplete] = useState(false);

  // Preload all images upfront
  useEffect(() => {
    const imagesToLoad = svgUrls.map(url => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = resolve; // Don't block if an image fails to load
      });
    });

    Promise.all(imagesToLoad).then(() => {
      setAllSvgsPreloaded(true);
    });
  }, []);

  // Ensure minimum display time for the loader
  useEffect(() => {
    const displayDuration = 400;
    const transitionDuration = 300;
    const totalSequenceDuration = svgUrls.length * displayDuration + svgUrls.length * transitionDuration;
    const minimumLoaderDisplay = Math.max(1000, totalSequenceDuration + 200);

    const timer = setTimeout(() => {
      setIsMinLoadTimePassed(true);
    }, minimumLoaderDisplay);

    return () => clearTimeout(timer);
  }, []);

  // Effect to decide when to hide the initial loading screen
  useEffect(() => {
    if (allSvgsPreloaded && isMinLoadTimePassed && isLoaderSequenceComplete) {
      sessionStorage.setItem(LOADER_SEEN_KEY, 'true');
      setIsInitialLoading(false);
    }
  }, [allSvgsPreloaded, isMinLoadTimePassed, isLoaderSequenceComplete]);

  // Prevent pinch zooming on mobile for better UX
  useEffect(() => {
    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };
    
    document.addEventListener('touchmove', preventZoom, { passive: false });
    
    return () => {
      document.removeEventListener('touchmove', preventZoom);
    };
  }, []);

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner position="bottom-center" closeButton={true} />
      <BrowserRouter>
        <ScrollToHash />
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-10 h-10 border-2 border-stone-200 border-t-stone-800 rounded-full animate-spin" />
          </div>
        }>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/discover" element={<ProductsDiscover />} />
              <Route path="/products/grow" element={<ProductsGrow />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogPost />} />
              <Route path="/education" element={<Education />} />
              <Route path="/individuals" element={<Individuals />} />
              <Route path="/eq-test" element={<EQTest />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      {/* Show loader overlay on top of page content */}
      {isInitialLoading && (
        <>
          {!allSvgsPreloaded && (
            <div className="min-h-screen flex items-center justify-center bg-white fixed inset-0 z-[100]">
              <div className="w-32 h-32 md:w-40 md:h-40 border-4 border-stone-200 border-t-stone-950 rounded-full animate-spin"></div>
            </div>
          )}
          {allSvgsPreloaded && (
            <PageLoader onSequenceComplete={() => setIsLoaderSequenceComplete(true)} />
          )}
        </>
      )}
    </TooltipProvider>
  );
};

export default App;
