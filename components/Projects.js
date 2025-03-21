import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './projects.module.css';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // State to track which cards are expanded
  const [expandedCards, setExpandedCards] = useState({});

  // Toggle function to expand/collapse a card
  const toggleCard = (title) => {
    setExpandedCards((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const projects = [
    {
      title: "TechAround",
      subtitle: "Empowering small businesses with custom web solutions",
      period: "2014-2019",
      description: "Full-stack web development for small businesses",
      technologies: ["PHP", "JavaScript", "MySQL", "Laravel", "WordPress", "WHMCS", "Node.js"],
      outcome: "Delivered custom websites with ordering, credit-card processing, and document management features",
      url: "#" // Placeholder URL
    },
    {
      title: "Foresight Sports",
      subtitle: "Enhancing sports tech with ARM TI RTOS integration",
      period: "2015-2016",
      description: "MTP implementation on ARM TI RTOS device",
      technologies: ["Embedded C", "USB", "Bluetooth", "Win32"],
      outcome: "Successfully submitted Windows 10 Device Driver Package for certification and resolved application layer issues",
      url: "https://www.foresightsports.com"
    },
    {
      title: "BitKibble",
      subtitle: "Optimizing ad networks with system monitoring",
      period: "2015",
      description: "Windows service and drivers for ad network monetization",
      technologies: ["C/C++", "Win32 API", "WDM", "WDF"],
      outcome: "Developed system state monitoring and network traffic injection for ad monetization",
      url: "#" // Placeholder URL
    },
    {
      title: "Samsung Semiconductor",
      subtitle: "Boosting image processing performance 4x",
      period: "2014",
      description: "4x performance boost in image processing firmware",
      technologies: ["Embedded Linux", "Android SDK/NDK", "C", "ARM Assembly"],
      outcome: "Achieved performance optimization ahead of schedule",
      url: "https://www.samsung.com/semiconductor"
    },
    {
      title: "Chelsio Communications",
      subtitle: "Pioneering server virtualization with NDIS drivers",
      period: "2009-2010",
      description: "NDIS Miniport Driver for 1Gb NIC",
      technologies: ["WDF", "NDIS"],
      outcome: "Designed proof-of-concept for server virtualization",
      url: "https://www.chelsio.com"
    },
    {
      title: "InterKnowlogy",
      subtitle: "Improving GPS software stability and performance",
      period: "2011",
      description: "Refactored GPS software and web apps",
      technologies: ["C#", "ASP.NET", "C++", "Win32 API"],
      outcome: "Resolved stability and performance issues",
      url: "https://www.interknowlogy.com"
    }
  ];

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Past Projects</h2>

        <div className={styles.grid} ref={ref}>
          {projects.map((project, index) => {
            const isExpanded = expandedCards[project.title] || false;

            return (
              <motion.div
                key={project.title}
                className={styles.card}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.cardContent}>
                  <div
                    className={styles.cardHeader}
                    onClick={() => toggleCard(project.title)}
                  >
                    <div className={styles.headerLeft}>
                      <h3 className={styles.cardTitle}>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.titleLink}
                        >
                          {project.title}
                        </a>
                      </h3>
                      <p className={styles.subtitle}>{project.subtitle}</p>
                    </div>
                    <div className={styles.headerRight}>
                      <span className={styles.period}>{project.period}</span>
                      <motion.span
                        className={`${styles.accordionIcon} ${isExpanded ? styles.expanded : ''}`}
                      >
                        {isExpanded ? '−' : '+'}
                      </motion.span>
                    </div>
                  </div>

                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.collapsibleContent}
                    >
                      <p className={styles.description}>{project.description}</p>

                      <div className={styles.technologies}>
                        <h4 className={styles.techTitle}>Technologies:</h4>
                        <div className={styles.techTags}>
                          {project.technologies.map(tech => (
                            <span key={tech} className={styles.techTag}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className={styles.outcome}>
                        <h4 className={styles.outcomeTitle}>Outcome:</h4>
                        <p className={styles.outcomeText}>{project.outcome}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}