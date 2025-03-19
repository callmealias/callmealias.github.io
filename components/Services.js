import styles from './services.module.css';
import Link from 'next/link';

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <h2 className="section-title">Software Consulting Services</h2>
        <p className={styles.heroSubtitle}>
          Transforming Businesses with Intelligent Software Solutions
        </p>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>Scale & Production Readiness</h3>
            <p className={styles.serviceDescription}>
              Take your AI-driven projects from prototype to robust, scalable production systems.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>Developer Training</h3>
            <p className={styles.serviceDescription}>
              Empower your existing development teams with the skills to build and maintain AI solutions.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>AI Prototyping & Innovation</h3>
            <p className={styles.serviceDescription}>
              Explore new opportunities and rapidly prototype innovative AI-powered ideas.
            </p>
          </div>
        </div>

        <div className={styles.ctaButton}>
          <Link href="/#contact" className="button">
            Contact Me for a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}