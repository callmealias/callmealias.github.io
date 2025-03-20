import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './skills.module.css';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  // State to track which categories are expanded
  const [expandedCategories, setExpandedCategories] = useState({
    'Languages/Frameworks': true, // Initially expanded
    'Cloud/Platforms': false,
    'Methodologies': false,
    'AI Tools': false,
    'Other': false
  });

  // Toggle function to expand/collapse a category
  const toggleCategory = (title) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };
  
  const skillCategories = [
    {
      title: "Languages/Frameworks",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
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
        { name: "ARM Assembly", level: 70 },
        { name: "SQL / MySql", level: 85 },
      ]
    },
    {
      title: "Cloud/Platforms",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      skills: [
        { name: "AWS (ECS/EC2)", level: 85 },
        { name: "Google Ads Api", level: 80 },
        { name: "Facebook Api", level: 85 },
        { name: "Windows Driver Model (WDM)", level: 90 },
        { name: "Windows Device Framework (WDF)", level: 90 }
      ]
    },
    {
      title: "Development Methodologies",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      skills: [
        { name: "AIDD (AI Driven Design)", level: 90 },
        { name: "TDD (Test Driven Design)", level: 90 },
        { name: "Agile", level: 90 },
        { name: "Kanban", level: 90 },
        { name: "Project management", level: 85 }
      ]
    },
    {
      title: "AI Tools",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      skills: [
        { name: "ChatGPT", level: 85 },
        { name: "Claude", level: 80 },
        { name: "Gemini", level: 75 },
        { name: "Suno", level: 70 }
      ]
    },
    {
      title: "Software Architecture",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      ),
      skills: [
        { name: "SOLID Principles", level: 85 },
        { name: "Event Driven Architecture", level: 85 },
        { name: "Embedded systems", level: 85 },
        { name: "Kernel-mode drivers", level: 90 },
        { name: "Distributed services", level: 90 }
      ]
    }
  ];

  // Function to determine color based on skill level
  const getSkillColor = (level) => {
    if (level >= 90) return styles.expertLevel;
    if (level >= 80) return styles.advancedLevel;
    if (level >= 70) return styles.intermediateLevel;
    return styles.beginnerLevel;
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        
        <div className={styles.categoriesContainer} ref={ref}>
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className={styles.categoryCard}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <div 
                className={styles.categoryHeader}
                onClick={() => toggleCategory(category.title)}
              >
                <div className={styles.categoryTitleWrapper}>
                  <span className={styles.categoryIcon}>
                    {category.icon}
                  </span>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>
                <motion.span
                  className={`${styles.accordionIcon} ${expandedCategories[category.title] ? styles.expanded : ''}`}
                >
                  {expandedCategories[category.title] ? '−' : '+'}
                </motion.span>
              </div>
              
              {expandedCategories[category.title] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={styles.skillGrid}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className={styles.skillItem}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + skillIndex * 0.05 }}
                    >
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillLevel}>{skill.level}%</span>
                      </div>
                      <div className={styles.progressBarContainer}>
                        <motion.div 
                          className={`${styles.progressBar} ${getSkillColor(skill.level)}`}
                          initial={{ width: "0%" }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: 0.2 + skillIndex * 0.05 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}