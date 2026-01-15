
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, Suspense, lazy } from "react";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Products = lazy(() => import("./pages/Products"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Education = lazy(() => import("./pages/Education"));
const Individuals = lazy(() => import("./pages/Individuals"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-rebuttl-lightBg">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rebuttl-primary"></div>
  </div>
);

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

const App = () => {
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
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogPost />} />
              <Route path="/education" element={<Education />} />
              <Route path="/individuals" element={<Individuals />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;
