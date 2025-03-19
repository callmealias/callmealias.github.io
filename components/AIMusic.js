import styles from './aimusic.module.css';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function AIMusic() {
  const videos = [
    {
      title: "k$h only",
      youtubeUrl: "https://www.youtube.com/embed/OS2qQ16XKI0?si=lPrSWe8Wj1nd7dno",
    },
    {
      title: "Rivers of Joy",
      youtubeUrl: "https://www.youtube.com/embed/sX1zsFm47G0?si=m52NT5njNJrfXpTc",
    },
    {
      title: "The World is Your Canvas",
      youtubeUrl: "https://www.youtube.com/embed/OJIWDz87rbo?si=cpd3NSPb9oy9AH5Y",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : videos.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < videos.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: currentIndex * slideWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  return (
    <section id="ai-music" className={styles.aiMusicSection}>
      <div className="container">
        <h2 className="section-title">AI Music Creations</h2>
        <p className={styles.description}>
          Passionate about exploring the creative potential of AI in music. Using <Link href="https://suno.com/@kashykash" target="_blank" rel="noopener noreferrer" className={styles.sunoLink}>Suno</Link> and collaborating with <Link href="https://www.youtube.com/@Beholdify" target="_blank" rel="noopener noreferrer" className={styles.beholdifyLink}>Beholdify</Link>, I&apos;ve been experimenting with generating unique AI-driven musical pieces. Here are a few examples:
        </p>

        <div className={styles.carouselContainer}>
          <button className={`${styles.carouselButton} ${styles.prev}`} onClick={goToPrevious}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72H16.5a.75.75 0 000-1.5H8.56l1.72-1.72a.75.75 0 10-1.06-1.06l-3 3z" clipRule="evenodd" />
            </svg>
          </button>
          <div className={styles.carouselTrack} ref={carouselRef}>
            {videos.map((video, index) => (
              <div key={index} className={styles.videoSlide}>
                <div className={styles.videoContainer}>
                  <iframe
                    className={styles.videoFrame}
                    src={video.youtubeUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className={styles.videoTitle}>{video.title}</p>
              </div>
            ))}
          </div>
          <button className={`${styles.carouselButton} ${styles.next}`} onClick={goToNext}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75-9.75-4.365-9.75-9.75S6.615 2.25 12 2.25zm2.22 9.22a.75.75 0 010 1.06l-3 3a.75.75 0 01-1.06-1.06l1.72-1.72H7.5a.75.75 0 010-1.5H15.44l-1.72-1.72a.75.75 0 111.06-1.06l3 3z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}