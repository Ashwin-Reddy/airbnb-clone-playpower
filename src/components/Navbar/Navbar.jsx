import { useState, useEffect } from 'react';
import TopNavbar from './TopNavbar';
import ScrollNavbar from './ScrollNavbar';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Call once initially to set the correct state on load/refresh
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <TopNavbar />
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out transform ${
          isScrolled 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-2 opacity-0 pointer-events-none'
        }`}
      >
        <ScrollNavbar />
      </div>
    </>
  );
}
