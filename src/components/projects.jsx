function Projects() {
  return (
    <section className="project-section" id="projects">
      <h2>My Projects</h2>

      <div className="project-grid">
        <article className="project-card">
          <img src="/skillbridge.png" alt="SkillBridge" />
          <h3>SkillBridge</h3>

          <p>
            Peer-to-peer student skill exchange platform.
          </p>
        </article>

        <article className="project-card">
          <img src="/evchargemap.png" alt="EV Charge Map" />
          <h3>EV Charge Map</h3>

          <p>
            Web application for locating EV charging stations.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Projects;