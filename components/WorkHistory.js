import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './workhistory.module.css'; // Import CSS module

export default function WorkHistory() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const experiences = [
    {
      company: "Agree Media",
      url: "#",
      period: "08/2020 - 08/2024",
      title: "Senior Software Developer",
      location: "San Diego, CA",
      responsibilities: [
        "Led development of serverless architecture using AWS ECS for secure API integration",
        "Implemented microservices with .NET/C# and optimized SQL queries for performance",
        "Developed responsive UIs with Vue.js/Nuxt.js for improved user experience",
        "Improved ROAS by 30% through data-driven optimization strategies"
      ]
    },
    {
      company: "Research In Motion",
      url: "https://www.blackberry.com",
      period: "01/2012 - 08/2013",
      title: "Senior Embedded Firmware Engineer",
      location: "San Diego, CA",
      responsibilities: [
        "Contributed to Blackberry 10 device bring-up and platform development",
        "Developed firmware for QNX-based systems and ARM SoC platforms",
        "Implemented and optimized USB drivers for mobile devices",
        "Collaborated with cross-functional teams to solve complex hardware-software integration issues"
      ]
    },
    {
      company: "Novatel Wireless",
      url: "#",
      period: "04/2007 - 09/2008",
      title: "Software Design Engineer",
      location: "San Diego, CA",
      responsibilities: [
        "Designed and implemented software solutions for 3G/4G broadband products",
        "Developed kernel-mode drivers for Windows-based systems",
        "Utilized WDM framework for device driver development",
        "Collaborated with hardware engineers to optimize device performance"
      ]
    },
    {
      company: "Microsoft Corporation",
      url: "https://www.microsoft.com",
      period: "01/2003 - 11/2005",
      title: "Software Design Engineer Lead",
      location: "Redmond, WA",
      responsibilities: [
        "Led a team of 7 developers and 30 testers for Windows Hardware Certification",
        "Managed development of WHQL tools for hardware compatibility testing",
        "Implemented USB and Bluetooth support for Windows OS",
        "Guided technical strategy and mentored junior developers"
      ]
    },
    {
      company: "Microsoft Corporation",
      url: "https://www.microsoft.com",
      period: "06/1999 - 01/2003",
      title: "Software Design Engineer",
      location: "Redmond, WA",
      responsibilities: [
        "Developed Firewire driver tools for Windows platform",
        "Created and maintained WHQL validation tools for hardware certification",
        "Contributed to the Windows Driver Development Kit (DDK) sample code",
        "Collaborated with hardware vendors to ensure compatibility"
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="workhistory" className={`${styles.workHistorySection} py-20`}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">Work History</h2>

        <div className="mt-12" ref={ref}>
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              className={`${styles.accordionItem}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(index)}
              >
                <div className={styles.headerText}>
                  <h3 className={styles.companyName}>
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.companyLink}
                    >
                      {exp.company}
                    </a>
                  </h3>
                  <p className={styles.period}>
                    {exp.title} ({exp.period})
                  </p>
                </div>
                <motion.span
                  className={`${styles.accordionIcon} ${expandedIndex === index ? styles.expanded : ''}`}
                >
                  {expandedIndex === index ? '−' : '+'}
                </motion.span>
              </div>

              {expandedIndex === index && (
                <motion.div
                  className={styles.accordionContent}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="mt-2">
                    <p className={styles.locationPeriod}>{exp.location}</p>
                  </div>

                  <ul className={styles.responsibilitiesList}>
                    {exp.responsibilities.map((resp, i) => (
                      <motion.li
                        key={i}
                        className={styles.responsibilityItem}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                      >
                        {resp}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}