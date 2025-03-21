import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import * as pdfjsLib from 'pdfjs-dist';
import styles from './resume.module.css';

// Set the workerSrc for pdf.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export default function Resume() {
  const ref = useRef(null);
  const canvasRef = useRef(null);
  const containerRef = useRef(null); // Add a ref for the container to measure its width
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [pdf, setPdf] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load the PDF when the component mounts
  useEffect(() => {
    const loadPdf = async () => {
      try {
        setLoading(true);
        setError(null);
        const pdfDoc = await pdfjsLib.getDocument('/resume.pdf').promise;
        setPdf(pdfDoc);
        setNumPages(pdfDoc.numPages);
        setLoading(false);
      } catch (err) {
        console.error('Error loading PDF:', err);
        setError('Failed to load the resume. Please download it instead.');
        setLoading(false);
      }
    };

    loadPdf();
  }, []);

  // Render the current page whenever pageNumber, pdf, or container size changes
  useEffect(() => {
    const renderPage = async () => {
      if (!pdf || !canvasRef.current || !containerRef.current) return;

      const page = await pdf.getPage(pageNumber);
      const containerWidth = containerRef.current.offsetWidth; // Get the container's width

      // Calculate the scale to fit the container width while preserving aspect ratio
      const viewport = page.getViewport({ scale: 1.0 });
      const scale = containerWidth / viewport.width;
      const scaledViewport = page.getViewport({ scale });

      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      // Adjust canvas size based on the scaled viewport and device pixel ratio
      const deviceScale = window.devicePixelRatio || 1;
      canvas.height = scaledViewport.height * deviceScale;
      canvas.width = scaledViewport.width * deviceScale;
      canvas.style.width = `${scaledViewport.width}px`;
      canvas.style.height = `${scaledViewport.height}px`;

      // Render the PDF page into the canvas
      const renderContext = {
        canvasContext: context,
        viewport: scaledViewport,
        transform: [deviceScale, 0, 0, deviceScale, 0, 0],
      };
      await page.render(renderContext).promise;
    };

    if (pdf) {
      renderPage();
    }

    // Re-render on window resize to adjust for container width changes
    window.addEventListener('resize', renderPage);
    return () => window.removeEventListener('resize', renderPage);
  }, [pdf, pageNumber]);

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

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
              <div className={styles.pdfViewerContainer} ref={containerRef}>
                {loading ? (
                  <div className={styles.loaderContainer}>
                    <div className={styles.loader}></div>
                    <p>Loading resume...</p>
                  </div>
                ) : error ? (
                  <div className={styles.errorContainer}>
                    <p>{error}</p>
                    <a
                      href="/resume.pdf"
                      download="Kashif_Hasan_Resume.pdf"
                      className={styles.downloadButton}
                    >
                      Download Resume
                    </a>
                  </div>
                ) : (
                  <>
                    <canvas ref={canvasRef} className={styles.pdfCanvas} />
                    {numPages > 1 && (
                      <div className={styles.pageControls}>
                        <button
                          onClick={goToPreviousPage}
                          disabled={pageNumber <= 1}
                          className={styles.pageButton}
                        >
                          Previous
                        </button>
                        <span className={styles.pageInfo}>
                          Page {pageNumber} of {numPages}
                        </span>
                        <button
                          onClick={goToNextPage}
                          disabled={pageNumber >= numPages}
                          className={styles.pageButton}
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}