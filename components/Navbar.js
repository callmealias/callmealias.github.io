import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRocking, setIsRocking] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Get hero section height to determine when to change navbar
      const heroSection = document.getElementById('hero');
      const heroHeight = heroSection ? heroSection.offsetHeight - 100 : 300; // Default to 300px if hero not found
      
      setScrolled(window.scrollY > heroHeight);
    };
    
    // Handle clicks outside the navbar to close the menu
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && isExpanded) {
        setIsExpanded(false);
        setActiveDropdown(null);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    // Run once on mount to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  const handleLogoClick = () => {
    setIsRocking(true);
    setIsExpanded(!isExpanded); // Toggle menu on all screen sizes
    setActiveDropdown(null);
    setTimeout(() => setIsRocking(false), 1000);
  };

  // For larger screens, we'll show the menu on hover
  const handleNavHover = () => {
    if (!isRocking) {
      setIsRocking(true);
      setTimeout(() => setIsRocking(false), 1000);
    }
    setIsExpanded(true);
  };

  const handleNavLeave = () => {
    setIsExpanded(false);
    setActiveDropdown(null);
  };

  const handleMenuClick = () => {
    setIsExpanded(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (item) => {
    if (activeDropdown === item) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(item);
    }
  };

  // Main nav items with experience as a parent for the subitems
  const navItems = ['home', 'about', 'experience', 'ai-music', 'services', 'contact'];
  
  // Subitems under experience
  const experienceSubitems = [
    { name: 'skills', label: 'Skills' },
    { name: 'work-history', label: 'Work History' },
    { name: 'projects', label: 'Projects' },
    { name: 'resume', label: 'Resume' }
  ];

  return (
    <nav
      ref={navRef}
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
    >
      <div 
        className={styles.logoContainer}
        onMouseEnter={handleNavHover}
        onMouseLeave={handleNavLeave}
      >
        <div
          className={`${styles.logo} ${isRocking ? styles.rockAnimation : ''}`}
          onClick={handleLogoClick}
          aria-label="Toggle menu"
        >
          <Image
            src="/ksh-dev-new.png"
            alt="KSH Dev"
            width={40}
            height={40}
            className={`object-contain ${scrolled ? styles.scrolledLogo : ''}`}
            priority
          />
        </div>
        
        <div className={`${styles.menu} ${isExpanded ? styles.expanded : ''}`}>
          {navItems.map((item) => (
            <div key={item} className={styles.navItemContainer}>
              {item === 'experience' ? (
                <>
                  <div 
                    className={`${styles.navItem} ${activeDropdown === 'experience' ? styles.active : ''}`}
                    onClick={() => handleDropdownToggle('experience')}
                  >
                    Experience
                    <span className={styles.dropdownArrow}>▼</span>
                  </div>
                  {activeDropdown === 'experience' && (
                    <div className={styles.submenu}>
                      {experienceSubitems.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={`/#${subitem.name}`}
                          className={styles.submenuItem}
                          onClick={handleMenuClick}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={`/#${item}`}
                  className={styles.navItem}
                  onClick={handleMenuClick}
                >
                  {item === 'ai-music' ? 'AI Music' : item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}