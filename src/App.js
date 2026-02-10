import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hello, I'm Ryan DaFoe</h1>
          <p className="hero-subtitle">Full Stack Developer & Creative Thinker</p>
        </div>
      </section>

      {/* Parallax Section */}
      <section className="parallax-section">
        <div
          className="parallax-bg"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <div className="parallax-content">
            <h2>Building Digital Experiences</h2>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-section">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <div className="about-text">
            <p>
              {/* ⬇️ EDIT YOUR ABOUT ME TEXT HERE ⬇️ */}
              I'm a passionate developer who loves creating beautiful and functional web applications.
              With expertise in React and modern web technologies, I bring ideas to life through clean code and thoughtful design.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open source,
              or enjoying a good cup of coffee while brainstorming the next big project.
            </p>
            {/* ⬆️ EDIT YOUR ABOUT ME TEXT HERE ⬆️ */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;