import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  // Fixed width for the navbar
  const fixedWidth = "w-20";

  return (
    <div 
      className={`fixed left-0 top-0 h-full z-50 bg-transparent transition-all duration-300 ease-in-out ${fixedWidth}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col h-full justify-between py-6 overflow-hidden">
        {/* Logo / Brand */}
        <div className="flex justify-center items-center mb-8">
          <div className="relative w-12 h-12">
            <Image 
              src="/ksh-dev-logo.png" 
              alt="KSH Dev" 
              layout="fill" 
              objectFit="contain" 
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Navigation Links - Vertical */}
        <nav className="flex flex-col space-y-6 flex-grow">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/#${item}`}
              className={`relative text-white hover:text-blue-400 transition-all duration-300 py-2 overflow-hidden pl-4 ${
                hoveredItem === item ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex text-white absolute top-0 left-20 bg-gray-800 px-4 py-2 rounded-r-md whitespace-nowrap"
                >
                  {(item.charAt(0).toUpperCase() + item.slice(1)).split('').map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: 0 }}
                      animate={hoveredItem === item ? { y: [-5, 0] } : { y: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 10,
                        delay: index * 0.05 
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </Link>
          ))}
        </nav>
        
        {/* Extra space at bottom for better balance */}
        <div className="h-12"></div>
      </div>
    </div>
  );
}