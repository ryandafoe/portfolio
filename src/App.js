import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Skills data - easy to customize!
  const skills = [
    { name: 'React', color: '#61dafb', url: 'https://react.dev/learn' },
    { name: 'JavaScript', color: '#f7df1e', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
    { name: 'CSS3', color: '#264de4', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Node.js', color: '#68a063', url: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs' },
    { name: 'HTML5', color: '#e34c26', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'Git', color: '#f34f29', url: 'https://git-scm.com/doc' },
  ];

  // Project data - customize with your own projects!
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack online shopping platform with cart functionality',
      image: 'https://picsum.photos/seed/project1/400/300',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking with interactive maps',
      image: 'https://picsum.photos/seed/project2/400/300',
      tags: ['React', 'API', 'CSS3']
    },
    {
      id: 3,
      title: 'Task Manager',
      description: 'Collaborative task management with real-time updates',
      image: 'https://picsum.photos/seed/project3/400/300',
      tags: ['React', 'Firebase', 'Material-UI']
    },
  ];

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hello, I'm Ryan DaFoe</h1>
          <p className="hero-subtitle">Full Stack Developer & Creative Thinker</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="skills-content">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <a
                key={index}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-card"
                style={{ '--skill-color': skill.color }}
              >
                <span className="skill-name">{skill.name}</span>
              </a>
            ))}
          </div>
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

      {/* Projects Section */}
      <section className="projects-section">
        <div className="projects-content">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`project-card ${hoveredCard === project.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <span className="view-project">View Project</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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