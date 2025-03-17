import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  const experiences = [
    {
      company: "Agree Media",
      url: "#", // Placeholder URL
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
      url: "#", // Placeholder URL
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

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience</h2>
        
        <div className="mt-12" ref={ref}>
          <div className="flex flex-col md:flex-row">
            {/* Company Tabs */}
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <div className="md:sticky md:top-24">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={`${exp.company}-${exp.period}`}
                    className={`cursor-pointer p-4 border-l-4 mb-2 transition-all duration-300 ${
                      activeTab === index 
                        ? "border-[#4682B4] bg-[#2F4F4F] text-white" 
                        : "border-gray-700 bg-[#1E1E1E] hover:bg-[#2F4F4F] hover:border-[#6B8E23]"
                    }`}
                    onClick={() => setActiveTab(index)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h3 className="font-bold">{exp.company}</h3>
                    <p className="text-sm">{exp.period}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Experience Details */}
            <div className="w-full md:w-3/4 md:pl-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.period}-details`}
                  className={`${activeTab === index ? "block" : "hidden"}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView && activeTab === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:justify-between mt-2">
                      <a 
                        href={exp.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#4682B4] transition-all duration-300 hover:underline"
                      >
                        {exp.company}
                      </a>
                      <span className="text-gray-400">{exp.location}</span>
                    </div>
                    <p className="text-gray-400 mt-1">{exp.period}</p>
                  </div>
                  
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView && activeTab === index ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                      >
                        {resp}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}