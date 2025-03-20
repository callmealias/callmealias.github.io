import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './services.module.css';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Software Consulting Services
        </motion.h2>
        
        <motion.p 
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Transform your business with the help of seasoned software developer. I enjoy working with smart people with good ideas from diverse backgrounds on fun projects.
        </motion.p>

        <motion.div 
          className={styles.servicesGrid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.serviceCard} variants={itemVariants}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
            <h3 className={styles.serviceTitle}>Secure, Scalable & Reliable</h3>
            <p className={styles.serviceDescription}>
              Take your vibe coded, AI driven projects from prototype to robust, scalable production systems.
            </p>
          </motion.div>

          <motion.div className={styles.serviceCard} variants={itemVariants}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </div>
            <h3 className={styles.serviceTitle}>Developer Training</h3>
            <p className={styles.serviceDescription}>
              Empower your existing development teams with the skills to use new AI driven workflows.
            </p>
          </motion.div>

          <motion.div className={styles.serviceCard} variants={itemVariants}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </div>
            <h3 className={styles.serviceTitle}>AI Prototyping & Innovation</h3>
            <p className={styles.serviceDescription}>
              Explore new opportunities and rapidly prototype innovative ideas.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.ctaButton}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/#contact" className="button">
            Contact Me for a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}