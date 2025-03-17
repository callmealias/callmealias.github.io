import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Handle scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['home', 'about', 'experience', 'skills', 'projects', 'resume', 'contact'];

  return (
    <div 
      className="fixed left-0 top-0 h-full z-50 bg-transparent transition-all duration-300 ease-in-out w-20"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col h-full justify-between py-6 overflow-visible">
        {/* Logo / Brand */}
        <div className="flex justify-center items-center mb-8">
          <motion.div 
            className="relative w-12 h-12"
            animate={isExpanded ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image 
              src="/ksh-dev-logo.png" 
              alt="KSH Dev" 
              layout="fill" 
              objectFit="contain" 
              className="cursor-pointer"
            />
          </motion.div>
        </div>

        {/* Navigation Links - Vertical */}
        <nav className="flex flex-col space-y-6 flex-grow">
          {navItems.map((item, index) => (
            <div key={item} className="relative h-8">
              {/* Link with a clickable area but invisible */}
              <Link
                href={`/#${item}`}
                className="absolute inset-0 z-20 cursor-pointer"
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="sr-only">{item}</span>
              </Link>
              
              {/* Visual cue for link (small dot) */}
              <div className="w-2 h-2 bg-white rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              
              {/* Text that appears on hover */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1 // Staggered delay for top-to-bottom effect
                    }}
                    className="absolute left-20 top-0 bg-gray-800 px-4 py-2 rounded-r-md whitespace-nowrap z-10 pointer-events-none"
                  >
                    <div className="flex text-white">
                      {(item.charAt(0).toUpperCase() + item.slice(1)).split('').map((char, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ y: 0 }}
                          animate={hoveredItem === item ? { y: [-5, 0] } : { y: 0 }}
                          transition={{ 
                            duration: 0.3, 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 10,
                            delay: idx * 0.05 
                          }}
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>
        
        {/* Extra space at bottom for better balance */}
        <div className="h-12"></div>
      </div>
    </div>
  );
}