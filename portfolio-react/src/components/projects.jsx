function Projects() {
  return (
    <section className="project-section" id="projects">
      <h2>My Projects</h2>

      <div className="project-grid">
        <article className="project-card">
          <img src="/skillbridge.png" alt="SkillBridge project" />

          <h3>SkillBridge</h3>

          <p>
            A peer-to-peer student skill exchange platform that helps
            students teach and learn skills through collaborative learning.
          </p>

          <div className="project-tags">
            <span className="tag">Web Development</span>
            <span className="tag">UI/UX</span>
            <span className="tag">AI</span>
          </div>

          <a href="#" className="button">
            Live Demo
          </a>

          <a href="#" className="button">
            GitHub
          </a>
        </article>

        <article className="project-card">
          <img src="/evchargemap.png" alt="EV Charge Map" />

          <h3>EV Charge Map</h3>

          <p>
            A web application designed to help users locate electric
            vehicle charging stations easily.
          </p>

          <div className="project-tags">
            <span className="tag">Python</span>
            <span className="tag">AI</span>
            <span className="tag">Web Development</span>
          </div>

          <a href="#" className="button">
            Live Demo
          </a>

          <a href="#" className="button">
            GitHub
          </a>
        </article>
      </div>
    </section>
  );
}

export default Projects;