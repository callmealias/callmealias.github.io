import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-10 ${
        scrolled ? 'bg-[#1E1E1E] shadow-lg' : 'bg-transparent'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        transition: 'background-color 0.5s ease',
      }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/#home" className="text-xl font-bold text-[#D3D3D3] no-underline">
          Kashif Hasan
        </Link>
        
        <button
          className="md:hidden bg-transparent border-none text-[#D3D3D3]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
        
        <nav
          className={`${
            menuOpen
              ? 'flex flex-col absolute top-16 left-0 right-0 bg-[#1E1E1E] shadow-lg p-4'
              : 'hidden'
          } md:flex md:flex-row md:items-center md:relative md:top-0 md:bg-transparent md:shadow-none`}
        >
          {['home', 'about', 'experience', 'skills', 'projects', 'resume', 'contact'].map(
            (item) => (
              <Link
                key={item}
                href={`/#${item}`}
                className="px-4 py-2 md:py-0 text-[#D3D3D3] capitalize transition duration-300 hover:text-[#4682B4] relative nav-link"
                onClick={() => setMenuOpen(false)}
                style={{
                  position: 'relative',
                }}
              >
                {item}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4682B4] transition-all duration-300 nav-underline"
                  style={{
                    transition: 'width 0.3s ease',
                  }}
                />
              </Link>
            )
          )}
        </nav>
      </div>
      <style jsx>{`
        .nav-link:hover .nav-underline {
          width: 100%;
        }
      `}</style>
    </motion.header>
  );
}