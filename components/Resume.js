import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import * as pdfjsLib from 'pdfjs-dist';
import styles from './resume.module.css';

// Set the workerSrc for pdf.js
pdfjsLib.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;

export default function Resume() {
  const ref = useRef(null);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const renderTaskRef = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [pdf, setPdf] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load the PDF when component mounts
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

  // Render the current page when PDF loads or page changes
  useEffect(() => {
    const renderPage = async () => {
      if (!pdf || !canvasRef.current || !containerRef.current) return;

      // Cancel any existing render task
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
        renderTaskRef.current = null;
      }

      try {
        const page = await pdf.getPage(pageNumber);
        const containerWidth = containerRef.current.offsetWidth;

        // Calculate the scale to fit the container width
        const viewport = page.getViewport({ scale: 1.0 });
        const scale = containerWidth / viewport.width;
        const scaledViewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Adjust canvas size
        const deviceScale = window.devicePixelRatio || 1;
        canvas.height = scaledViewport.height * deviceScale;
        canvas.width = scaledViewport.width * deviceScale;
        canvas.style.width = `${scaledViewport.width}px`;
        canvas.style.height = `${scaledViewport.height}px`;

        // Render the page
        const renderContext = {
          canvasContext: context,
          viewport: scaledViewport,
          transform: [deviceScale, 0, 0, deviceScale, 0, 0],
        };
        
        const renderTask = page.render(renderContext);
        renderTaskRef.current = renderTask;
        await renderTask.promise;
      } catch (error) {
        if (error.name === 'RenderingCancelledException') {
          console.log('Rendering cancelled');
        } else {
          console.error('Error rendering PDF:', error);
        }
      }
    };

    if (pdf) {
      renderPage();
    }

    // Re-render on window resize
    const handleResize = () => {
      if (pdf) {
        renderPage();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }
    };
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
            <div className={styles.actionBar}>
              {/* Changed button to a tag */}
              <a
                href="#"
                className={styles.actionButton}
                onClick={(e) => { e.preventDefault(); window.open('/resume.pdf', '_blank'); }}
                title="View Fullscreen"
              >
                {/* Removed inline styles, reverted size */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/>
                </svg>
              </a>

              <button
                className={styles.actionButton}
                onClick={() => window.print()}
                title="Print Resume"
              >
                {/* Removed inline styles, reverted size */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M6 9V2h12v7"></path>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                  <path d="M18 14H6v6h12v-6z"></path>
                </svg>
              </button>
              
              <a
                href="/resume.pdf"
                download="Resume.pdf"
                className={styles.actionButton}
                title="Download Resume"
              >
                {/* Removed inline styles, reverted size */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
              
              {/* Moved Page Navigation Buttons */}
              {numPages > 1 && (
                <>
                  <button
                    onClick={goToPreviousPage}
                    disabled={pageNumber <= 1}
                    className={styles.actionButton} /* Changed class */
                    title="Previous Page"
                  >
                    &lt; Prev
                  </button>
                  <span className={styles.pageInfo}>{pageNumber} / {numPages}</span>
                  <button
                    onClick={goToNextPage}
                    disabled={pageNumber >= numPages}
                    className={styles.actionButton} /* Changed class */
                    title="Next Page"
                  >
                    Next &gt;
                  </button>
                </>
              )}
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
                      download="Resume.pdf"
                      className={styles.downloadButton}
                    >
                      Download Resume
                    </a>
                  </div>
                ) : (
                  <>
                    <canvas ref={canvasRef} className={styles.pdfCanvas} />
                    {/* Navigation buttons moved to actionBar */}
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