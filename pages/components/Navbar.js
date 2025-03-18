import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRocking, setIsRocking] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    setIsRocking(true);
    setIsExpanded(true); // Expand on click
    setTimeout(() => setIsRocking(false), 1000);
  };

  const handleLogoHover = () => {
    setIsExpanded(true);
    if (!isRocking) {
      setIsRocking(true);
      setTimeout(() => setIsRocking(false), 1000);
    }
  };

  const handleLogoLeave = () => {
    setIsExpanded(false);
  };

  const navItems = ['home', 'about', 'experience', 'skills', 'projects', 'resume', 'contact'];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logoContainer}>
        <div
          className={`${styles.logo} ${isRocking ? styles.rockAnimation : ''}`}
          onClick={handleLogoClick}
          onMouseEnter={handleLogoHover}
          onMouseLeave={handleLogoLeave}
        >
          <Image
            src="/ksh-dev-new.png"
            alt="KSH Dev"
            width={40}
            height={40}
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className={`${styles.menu} ${isExpanded ? styles.expanded : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item}
            href={`/#${item}`}
            className={styles.navItem}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </div>
    </nav>
  );
}