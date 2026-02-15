
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, Suspense, lazy } from "react";
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
const NotFound = lazy(() => import("./pages/NotFound"));

// Component to handle scrolling to hash fragments
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

const App = () => {
  useEffect(() => {
    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };
    document.addEventListener('touchmove', preventZoom, { passive: false });
    return () => document.removeEventListener('touchmove', preventZoom);
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
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  );
};

export default App;
