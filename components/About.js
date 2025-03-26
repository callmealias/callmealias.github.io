import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import styles from './about.module.css';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  // Initialize accordion state to false
  const [isExpanded, setIsExpanded] = useState(false);

  // Update isExpanded based on screen size after mounting
  useEffect(() => {
    const handleResize = () => {
      setIsExpanded(window.innerWidth >= 768);
    };

    // Set initial value
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle function for the accordion
  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  const sidebarRef = useRef(null);
  const isSidebarInView = useInView(sidebarRef, { once: true, threshold: 0.3 });

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Kashif</h2>
        
        <div className={styles.aboutContent}>
          <motion.div
            ref={ref}
            className={styles.aboutText}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={styles.aboutHeading}>Kashif Hasan – A Man of Many Skills</h3>
            
            <p className={styles.aboutParagraph}>
              I&apos;m not just a techie I&apos;m also a yogi, a rock climber, a traveller, and artist. My natural curiousity has taken me far and wide. Thoughout it all I&apos;ve learned that regular consitent effort and knowing how to recognize what&apos;s actually important and focus on the task at hand have led to me consistently exceeding expectations.
            </p>
            <p>
              With 25 years of experience as a Software Engineer I have been designing reliant, robust, scalable systems my entire career. I have a depth of knowledge in system architecture, cloud services and project planning and management. I understand SOLID principles and am comfortable working in TDD, Agile and Kanban or other sane development paradigms. I&apos;ve led high-performance teams and optimized complex systems. Recently, I&apos;ve embraced an AI Driven workflow using ChatGPT, Claude, Grok, and Gemini for coding, plus Suno and Kling for music and art. I love solving problems and creating value.
            </p>
          </motion.div>
          
          <div
          className={styles.aboutSidebar}
          >
          <motion.div
          ref={sidebarRef}
          className={`${styles.languageCard} card-standard`} // Added card-standard for base border styles
          initial={{ opacity: 0, x: 50, borderColor: 'var(--card-border)' }}
          animate={isSidebarInView ? {
          opacity: 1,
          x: 0,
          borderColor: 'var(--card-border)' // Set initial border color when in view
          } : {
          opacity: 0,
          x: 50,
          borderColor: 'var(--card-border)' // Keep initial border color when out of view
          }}
          transition={{ // Transition for the main entrance animation (opacity, x)
          duration: 0.8,
          delay: 0.2
          }}
          whileHover={{ // Animate border color only on hover
          borderColor: 'var(--primary-accent-blue)',
          transition: { duration: 0.3, ease: "easeInOut" } // Smooth transition for hover effect
          }}
          >
          <div className={styles.accordionHeader} onClick={toggleExpand}>
          <div className={styles.languageTitleWrapper}>
          <span className={styles.languageIcon}>
          {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> update */  }
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C13.18 6.061 14.286 6.5 15.45 6.5h3.75m-3.75 0V3m0 2.25h.008v.008h-.008V5.25z" />
          {/*</svg>*/}
          </span>
          <h3 className={styles.cardHeading}>Spoken Languages</h3>
          </div>
          <span className={`${styles.accordionIcon} ${isExpanded ? styles.expanded : ''}`}>
          {isExpanded ? '−' : '+'}
          </span>
              </div>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    key="languageContent"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.accordionContent}
                  >
                    {[
                      { language: "English", level: "Native" },
                      { language: "Hindi", level: "Native" },
                      { language: "Spanish", level: "Fluent" },
                      { language: "Portuguese", level: "Conversational" },
                      { language: "Thai", level: "Basic" }
                    ].map((lang, index) => (
                      <motion.div
                        key={lang.language}
                        className={styles.languageItem}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isSidebarInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        <div className={styles.languageHeader}>
                          <span>{lang.language}</span>
                          <span className={styles.languageLevel}>{lang.level}</span>
                        </div>
                        <div className="progress-bar-standard">
                        <div
                        className={`progress-fill-standard ${
                        lang.level === "Native" ? "progress-fill-native" :
                        lang.level === "Fluent" ? "progress-fill-fluent" :
                        lang.level === "Conversational" ? "progress-fill-conversational" :
                        "progress-fill-basic"
                        }`}
                        ></div>
                        </div>
                        </motion.div>
                    ))}
                  </motion.div>
                  )}
                  </AnimatePresence>
                  </motion.div>
                  </div>
                  </div>
                  </div>
    </section>
  );
}