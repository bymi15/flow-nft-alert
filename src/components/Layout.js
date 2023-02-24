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
      <div className="max-w-5xl pt-20 pb-24 px-6 sm:px-3 mx-auto">{children}</div>
      <Footer />
    </div>
  );
}
