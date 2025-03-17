import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  const skillCategories = [
    {
      title: "Languages/Frameworks",
      skills: [
        { name: "C#", level: 90 },
        { name: "C/C++", level: 85 },
        { name: "PHP", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "Vue.js", level: 85 },
        { name: "Nuxt.js", level: 80 },
        { name: ".NET", level: 90 },
        { name: "Laravel", level: 75 },
        { name: "Node.js", level: 80 },
        { name: "Win32 API", level: 85 },
        { name: "Android SDK/NDK", level: 75 },
        { name: "ARM Assembly", level: 70 }
      ]
    },
    {
      title: "Cloud/Platforms",
      skills: [
        { name: "AWS (ECS)", level: 85 },
        { name: "Google Cloud", level: 80 },
        { name: "Facebook APIs", level: 75 },
        { name: "Windows Driver Model (WDM)", level: 90 },
        { name: "Windows Device Framework (WDF)", level: 85 }
      ]
    },
    {
      title: "Methodologies",
      skills: [
        { name: "TDD", level: 90 },
        { name: "Agile", level: 90 },
        { name: "SOLID principles", level: 95 },
        { name: "Design patterns", level: 90 },
        { name: "Project management", level: 85 }
      ]
    },
    {
      title: "AI Tools",
      skills: [
        { name: "ChatGPT", level: 85 },
        { name: "Claude", level: 80 },
        { name: "Gemini", level: 75 },
        { name: "Suno", level: 70 }
      ]
    },
    {
      title: "Other",
      skills: [
        { name: "Embedded systems", level: 85 },
        { name: "Kernel-mode drivers", level: 90 },
        { name: "SQL optimization", level: 85 },
        { name: "Distributed computing", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8" ref={ref}>
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="bg-[#2F4F4F] p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">
                  {category.title === "Languages/Frameworks" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  ) : category.title === "Cloud/Platforms" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  ) : category.title === "Methodologies" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  ) : category.title === "AI Tools" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  )}
                </span>
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="bg-[#1E1E1E] p-3 rounded transition-all duration-300 transform hover:scale-105"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: catIndex * 0.2 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div 
                        className="bg-[#4682B4] h-2 rounded-full" 
                        initial={{ width: "0%" }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: "0%" }}
                        transition={{ duration: 1, delay: catIndex * 0.2 + skillIndex * 0.05 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}