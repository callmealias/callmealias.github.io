import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  const projects = [
    {
      title: "TechAround",
      period: "2014-2019",
      description: "Full-stack web development for small businesses",
      technologies: ["PHP", "JavaScript", "MySQL", "Laravel", "WordPress", "WHMCS", "Node.js"],
      outcome: "Delivered custom websites with ordering, credit-card processing, and document management features",
      url: "#" // Placeholder URL
    },
    {
      title: "Foresight Sports",
      period: "2015-2016",
      description: "MTP implementation on ARM TI RTOS device",
      technologies: ["Embedded C", "USB", "Bluetooth", "Win32"],
      outcome: "Successfully submitted Windows 10 Device Driver Package for certification and resolved application layer issues",
      url: "https://www.foresightsports.com"
    },
    {
      title: "BitKibble",
      period: "2015",
      description: "Windows service and drivers for ad network monetization",
      technologies: ["C/C++", "Win32 API", "WDM", "WDF"],
      outcome: "Developed system state monitoring and network traffic injection for ad monetization",
      url: "#" // Placeholder URL
    },
    {
      title: "Samsung Semiconductor",
      period: "2014",
      description: "4x performance boost in image processing firmware",
      technologies: ["Embedded Linux", "Android SDK/NDK", "C", "ARM Assembly"],
      outcome: "Achieved performance optimization ahead of schedule",
      url: "https://www.samsung.com/semiconductor"
    },
    {
      title: "Chelsio Communications",
      period: "2009-2010",
      description: "NDIS Miniport Driver for 1Gb NIC",
      technologies: ["WDF", "NDIS"],
      outcome: "Designed proof-of-concept for server virtualization",
      url: "https://www.chelsio.com"
    },
    {
      title: "InterKnowlogy",
      period: "2011",
      description: "Refactored GPS software and web apps",
      technologies: ["C#", "ASP.NET", "C++", "Win32 API"],
      outcome: "Resolved stability and performance issues",
      url: "https://www.interknowlogy.com"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={ref}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-[#2F4F4F] rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-transparent hover:border-[#4682B4]"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-sm text-gray-400">{project.period}</span>
                </div>
                
                <p className="mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#4682B4] mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 bg-[#1E1E1E] rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#4682B4] mb-2">Outcome:</h4>
                  <p className="text-sm">{project.outcome}</p>
                </div>
                
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-[#4682B4] hover:text-[#6B8E23] transition-colors duration-300 hover:underline"
                >
                  Visit Website
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}