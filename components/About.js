import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  
  return (
    <section id="about" className="bg-[#1E1E1E] py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Kashif</h2>
        
        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <motion.div 
            ref={ref}
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">Kashif Hasan – Software Engineer</h3>
            
            <p className="mb-4">
              I'm an techie, a yogi, a traveller, a polyglot, a rock climber, an AI artist and an all around good guy. With 25 years of experience in software engineering, I specialize in designing and building robust, scalable systems across various domains. My expertise spans system architecture, distributed computing, cloud services, and AI-driven development and creating buisness value.
            </p>
            
            <p className="mb-4">
              Throughout my career, I&apos;ve maintained a strong focus on design patterns, SOLID principles, and cloud technologies (AWS/Google Cloud). I&apos;m passionate about leveraging test-driven development (TDD) and Agile methodologies to deliver high-quality software solutions. My technical experience includes building and managing high-performance teams, optimizing large-scale systems, and implementing innovative solutions to complex problems.
            </p>
            
            <p className="mb-4">
              Recently, I&apos;ve been trying out the bleeding edge of tech, moving to an entirely AI Driven Development workflow. I have been working with cutting-edge tools like ChatGPT, Claude, Gemini to enhance software development processes. And Suno, Hailuo and Kling to create art and music.
            </p>

          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-[#2F4F4F] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Spoken Languages</h3>
              
              {[
                { language: "English", level: "Native" },
                { language: "Hindi", level: "Native" },
                { language: "Spanish", level: "Fluent" },
                { language: "Portuguese", level: "Conversational" },
                { language: "Thai", level: "Basic" }
              ].map((lang, index) => (
                <motion.div 
                  key={lang.language}
                  className="mb-4 last:mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span>{lang.language}</span>
                    <span className="text-[#4682B4]">{lang.level}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-[#4682B4] h-2 rounded-full" 
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