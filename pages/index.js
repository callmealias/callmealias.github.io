import Head from 'next/head';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WorkHistory from '@/components/WorkHistory';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import AIMusic from '@/components/AIMusic';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kashif Hasan - Senior Software Engineering Leader</title>
        <meta name="description" content="Kashif Hasan - Seasoned software engineering leader with 25 years of experience in system architecture, distributed computing, cloud services, and AI-driven development." />
      </Head>
      <Hero />
      <About />
      <Services />
      <Skills />
      <WorkHistory />
      <Projects />
      <Resume />
      <AIMusic />
      <Contact />
    </>
  );
}