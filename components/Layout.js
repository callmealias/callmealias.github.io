import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Kashif Hasan - Senior Software Engineering Leader</title>
        <meta name="description" content="Kashif Hasan - Seasoned software engineering leader with 25 years of experience in system architecture, distributed computing, cloud services, and AI-driven development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="senior software engineer, cloud architect, AI consultant, software consultant, system architecture, distributed computing" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}