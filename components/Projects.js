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
      period: "2014-2019",
      description: "Full stack web developer",
      technologies: ["PHP", "JavaScript", "MySQL", "Laravel", "WordPress", "WHMCS", "Node.js"],
      outcome: "Delivered custom websites with ordering, credit-card processing, and document management features",
      url: "#",
      image: "/images/web-development.svg"
    },
    {
      title: "Foresight Sports",
      period: "2015-2016",
      description: "Windows Embedded Device Consultant",
      technologies: ["Embedded C", "USB", "Bluetooth", "Win32"],
      outcome: "Implementated MTP (Media-Transfer-Protocol) on ARM TI RTOS device and successfully submitted Windows 10 Device Driver Package for certification and resolved application layer issues",
      url: "https://www.foresightsports.com",
      image: "/images/foresight.png"
    },
    {
      title: "BitKibble",
      period: "2015",
      description: "Windows Software Consultant",
      technologies: ["C/C++", "Win32 API", "WDM", "WDF"],
      outcome: "Developed system state monitoring and network traffic injection for ad monetization",
      url: "#",
      image: "/images/web-development.svg"
    },
    {
      title: "Samsung Semiconductor",
      period: "2014",
      description: "Arm64 Assembly Consultant",
      technologies: ["Embedded Linux", "Android SDK/NDK", "C", "ARM Assembly"],
      outcome: "Achieved 4x performance boost in image processing firmware optimization ahead of schedule",
      url: "https://www.samsung.com/semiconductor",
      image: "/images/samsung.png"
    },
    {
      title: "Chelsio Communications",
      period: "2009-2010",
      description: "Windows WDF / NDIS Consultant",
      technologies: ["WDF", "NDIS"],
      outcome: "Developed proof-of-concept NDIS Miniport Driver for 1Gb NIC for server virtualization",
      url: "https://www.chelsio.com",
      image: "images/chelsio.png"
    },
    {
      title: "InterKnowlogy",
      period: "2011",
      description: "Windows Device Driver Consultant",
      technologies: ["C#", "ASP.NET", "C++", "Win32 API"],
      outcome: "Resolved stability issues improving GPS software stability and performance",
      url: "https://www.interknowlogy.com",
      image: "/images/gps.jpg"
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
                      <div className={styles.titleWithImage}>
                        <motion.img
                          src={project.image}
                          alt={`${project.title} Thumbnail`}
                          className={styles.projectImage}
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.3 }}
                        />
                        <h3 className={styles.cardTitle}>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.titleLink}
                            onClick={(e) => e.stopPropagation()}
                          >
                            {project.title}
                          </a>
                        </h3>
                      </div>
                      <p className={styles.description}>{project.description}</p>
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
                  <motion.div
                    className={styles.collapsibleContent}
                    initial={false}
                    animate={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0,
                      marginTop: isExpanded ? '1rem' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >                    
                    <div className={styles.technologies}>
                      <h4 className={styles.techTitle}>Technologies:</h4>
                      <div className={styles.techTags}>
                        {project.technologies.map((tech) => (
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
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}