import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  return (
    <section id="resume" className="py-20 bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Resume</h2>
        
        <div className="mt-12 flex flex-col items-center" ref={ref}>
          <motion.div
            className="w-full max-w-4xl bg-[#2F4F4F] p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <p className="text-center">
                View my complete resume below or download it for your reference.
              </p>
            </div>
            
            <motion.div
              className="w-full h-[600px] bg-[#1E1E1E] rounded-lg overflow-hidden"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <iframe 
                src="/resume.pdf" 
                className="w-full h-full"
                title="Kashif Hasan Resume"
              />
            </motion.div>
            
            <motion.div
              className="mt-6 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button bg-[#6B8E23] hover:bg-[#4682B4] flex items-center"
                download
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}