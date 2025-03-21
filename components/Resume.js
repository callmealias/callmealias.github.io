import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import styles from './resume.module.css';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [isLoading, setIsLoading] = useState(true);
  
  // Create the default layout plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [
      // Only keep the bookmarks and thumbnails tabs
      defaultTabs[0], // Thumbnails tab
      defaultTabs[1], // Bookmarks tab
    ],
  });
  
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
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                  <Viewer
                    fileUrl="/resume.pdf"
                    plugins={[defaultLayoutPluginInstance]}
                    defaultScale={1}
                    className={styles.pdfViewer}
                    renderLoader={(percentages) => (
                      <div className={styles.loaderContainer}>
                        <div className={styles.loader}></div>
                        <p>Loading resume... {Math.round(percentages)}%</p>
                      </div>
                    )}
                    onDocumentLoad={() => setIsLoading(false)}
                  />
                </Worker>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}