import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1E1E1E] py-10">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          
          <div className="flex space-x-8 mb-6">
            <a 
              href="https://www.linkedin.com/in/kashif-hasan-473a811/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/callmealias" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://bsky.app/profile/kshsn.bsky.social" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7zm6.5 14.3c-.7.7-1.5 1.2-2.4 1.6-.9.4-1.8.6-2.8.6-.9 0-1.9-.2-2.8-.6-.9-.4-1.7-.9-2.4-1.6-.7-.7-1.2-1.5-1.6-2.4s-.6-1.8-.6-2.8.2-1.9.6-2.8c.4-.9.9-1.7 1.6-2.4-.2.3-.3.6-.4 1-.1.4-.1.8-.1 1.2 0 1.1.2 2.1.6 3 .4 1 1 1.8 1.7 2.5s1.6 1.3 2.5 1.7c1 .4 2 .6 3 .6s2.1-.2 3-.6c1-.4 1.8-1 2.5-1.7-.3.3-.5.5-.8.7z"/>
              </svg>
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400">
              &copy; {currentYear} Kashif Hasan. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}