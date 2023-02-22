import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { useEffect } from 'react';
import { FCL_ENV } from 'utils/constants';
import { loadFCLConfig } from 'utils/fclConfig';

export default function Layout({ children }) {
  // Load FCL Config
  useEffect(() => {
    loadFCLConfig(FCL_ENV);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
