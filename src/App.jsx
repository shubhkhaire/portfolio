import React from "react";
import portfolio from "./data/portfolio.json";

const techStack = [
  "React",
  "Python",
  "FastAPI",
  "MySQL",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
];

function App() {
  const {
    hero,
    highlights,
    projects,
    experience,
    education,
    contact,
    skills,
    whyHireMe,
    certifications,
    achievements,
    resume,
    socialLinks,
    stats,
  } = portfolio;

  return (
    <div className="page-shell">
      <header className="hero-card">
        <nav className="topbar">
          <div className="brand">{hero.name}</div>
          <div className="topbar-links">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{hero.tagline}</p>
            <h1>{hero.title}</h1>
            <p className="hero-summary">{hero.summary}</p>

            <div className="hero-actions">
              <a className="primary-btn" href="#projects">
                View Work
              </a>
              <a className="secondary-btn" href={`mailto:${contact.email}`}>
                Hire Me
              </a>
              <a className="secondary-btn" href={resume.url}>
                {resume.label}
              </a>
            </div>

            <div className="hero-tags" aria-label="Tech stack">
              {techStack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <aside className="hero-panel">
            <div className="profile-badge">
              <span>Available for freelance and full-time roles</span>
            </div>
            <div className="metric-grid">
              {stats.map((stat) => (
                <article key={stat.label} className="metric-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
            <div className="hero-note">
              <p>{hero.note}</p>
            </div>
          </aside>
        </section>
      </header>

      <main className="content-grid">
        <section className="section-card intro-card">
          <div>
            <p className="section-label">About</p>
            <h2>Built to make recruiters stop scrolling</h2>
          </div>
          <div className="two-column-text">
            {highlights.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </section>

        <section className="section-card" id="why-hire-me">
          <div className="section-heading">
            <div>
              <p className="section-label">Why Hire Me</p>
              <h2>What I bring to the role</h2>
            </div>
          </div>

          <div className="project-grid">
            {whyHireMe.map((item) => (
              <article key={item} className="project-card">
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card" id="projects">
          <div className="section-heading">
            <div>
              <p className="section-label">Selected Projects</p>
              <h2>Real work, real impact</h2>
            </div>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-topline">
                  <span>{project.type}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="project-footer">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card" id="experience">
          <div className="section-heading">
            <div>
              <p className="section-label">Experience</p>
              <h2>Delivery-focused engineering</h2>
            </div>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article key={item.role} className="timeline-item">
                <div className="timeline-meta">
                  <span>{item.period}</span>
                  <span>{item.company}</span>
                </div>
                <h3>{item.role}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-grid">
          <section className="section-card" id="skills">
            <p className="section-label">Skills</p>
            <h2>Stack aligned to your brief</h2>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, items]) => (
                <article key={category} className="skills-card">
                  <h3>{category}</h3>
                  <div className="skill-cloud">
                    {items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section-card">
            <p className="section-label">Education</p>
            <h2>Formal foundation</h2>
            <div className="education-list">
              {education.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </article>
              ))}
            </div>
          </section>
        </section>

        <section className="split-grid">
          <section className="section-card">
            <p className="section-label">Certifications</p>
            <h2>Learning and upskilling</h2>
            <div className="education-list">
              {certifications.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.issuer}</p>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section-card">
            <p className="section-label">Achievements</p>
            <h2>Proof of work</h2>
            <div className="education-list">
              {achievements.map((item) => (
                <article key={item}>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </section>
        </section>

        <section className="section-card contact-card" id="contact">
          <div>
            <p className="section-label">Contact</p>
            <h2>{contact.heading}</h2>
            <p>{contact.message}</p>
          </div>
          <div className="contact-links">
            <a className="primary-btn" href={`mailto:${contact.email}`}>
              Email
            </a>
            <a
              className="secondary-btn"
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="secondary-btn"
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
