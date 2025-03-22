import React from 'react';
import styles from './hero.module.css';
import Link from 'next/link';
// Using your existing imports and components, not adding new dependencies

const Hero = () => {
  return (
    <section id='home' className={styles.heroSection}>
      <div className={styles.backgroundContainer}>
        <picture>
          <source media="(max-width: 639px)" srcSet="/images/hero-small.jpg" />
          <source media="(max-width: 1023px)" srcSet="/images/hero-medium.jpg" />
          <source media="(min-width: 1024px)" srcSet="/images/hero-large.jpg" />
          <img 
            src="/images/hero-large.jpg" 
            alt="Developer workspace with sunset view" 
            className={styles.heroBackground}
            loading="lazy"
          />
        </picture>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.container}>
        <h1 className={styles.heroTitle}>Kashif Hasan</h1>
        <h2 className={styles.heroSubtitle}>Software Developer</h2>
        <div className={styles.blankArea}></div>
        <div className={styles.heroButtons}>
          <Link href="/#services" className="button">
            Software Consulting
          </Link>
          <Link href="/#workhistory" className="button">
            Work History
          </Link>
          <Link href="/#ai-music" className="button">
            AI Art & Music
          </Link>
        </div>
        <div className={styles.heroSocials}>
          <a href="https://www.linkedin.com/in/kashif-hasan-473a811/" target="_blank" rel="noopener noreferrer" className="social-link">
            <span className="sr-only">LinkedIn</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="https://github.com/callmealias" target="_blank" rel="noopener noreferrer" className="social-link">
            <span className="sr-only">GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <Link
            href="/#contact"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;