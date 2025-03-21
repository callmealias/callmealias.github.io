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
            </div>

            <motion.div
              className={styles.resumePreview}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.pdfViewerContainer}>
                <iframe
                  src="/resume.pdf"
                  className={styles.pdfIframe}
                  title="Resume PDF"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}