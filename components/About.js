import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './about.module.css';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  
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
            <h3 className={styles.aboutHeading}>Kashif Hasan – Software Engineer</h3>
            
            <p className={styles.aboutParagraph}>
              I&apos;m a techie, yogi, and rock climber with 25 years of experience as a software engineer, designing robust, scalable systems. I specialize in system architecture, cloud services (AWS/Google Cloud), and AI-driven development, emphasizing SOLID principles, TDD, and Agile. I've led high-performance teams and optimized complex systems while enjoying travel and creating AI art. Recently, I've embraced an AI-driven workflow using ChatGPT, Claude, and Gemini for coding, plus Suno and Kling for music and art.
            </p>        
          </motion.div>
          
          <motion.div 
            className={styles.aboutSidebar}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.languageCard}>
              <h3 className={styles.cardHeading}>Spoken Languages</h3>
              
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
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className={styles.languageHeader}>
                    <span>{lang.language}</span>
                    <span className={styles.languageLevel}>{lang.level}</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill} 
                      style={{ 
                        width: lang.level === "Native" ? "100%" : 
                               lang.level === "Fluent" ? "85%" : 
                               lang.level === "Conversational" ? "60%" : "30%" 
                      }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}