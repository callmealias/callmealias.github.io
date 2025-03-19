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
          </motion.div>
        </div>
      </div>
    </section>
  );
}