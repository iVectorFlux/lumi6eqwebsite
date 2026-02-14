import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer';

/**
 * Wraps every page with the site footer so all routes show the footer
 * (Platform, Resources, Company links, etc.) without adding it to each page.
 */
const AppLayout: React.FC = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
