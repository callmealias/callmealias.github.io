import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './resume.module.css';

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section id="resume" className={styles.resumeSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Resume</h2>

        <div className={styles.resumeContainer} ref={ref}>
          <motion.div
            className={styles.resumeCard}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.resumeIntro}>
              <p>
                View my complete resume below or download it for your reference.
              </p>
              <a
                href="/resume.pdf"
                download="Kashif_Hasan_Resume.pdf"
                className={styles.downloadButton}
              >
                <svg className={styles.downloadIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Resume
              </a>
            </div>

            <motion.div
              className={styles.resumePreview}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.pdfViewerContainer}>
                <object
                  data="/resume.pdf"
                  type="application/pdf"
                  className={styles.pdfObject}
                  title="Resume PDF"
                >
                  <p>
                    It looks like your browser does not support PDF viewing. You can{' '}
                    <a href="/resume.pdf" className={styles.fallbackLink}>
                      download the resume here
                    </a>.
                  </p>
                </object>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}