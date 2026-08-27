import { Link } from 'react-router-dom'
import { ButtonLink } from '../components/ButtonLink'
import { ProjectCard } from '../components/ProjectCard'
import { homeProjectLinks } from '../content/projectLinks'
import { useLanguage } from '../i18n/LanguageContext'
import './HomePage.css'

const signalBars = Array.from({ length: 17 }, (_, index) => index)

export function HomePage() {
  const { translation } = useLanguage()
  const { hero, dataCard, institute, projects, impact, contact } = translation.home

  return (
    <div className="home-page">
      <main id="main-content">
        <section className="hero" id="start" aria-labelledby="hero-title">
          <div className="aurora aurora-one" aria-hidden="true" />
          <div className="aurora aurora-two" aria-hidden="true" />
          <div className="hero-grid shell">
            <div>
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1 id="hero-title">
                {hero.titleStart}
                <br />
                <span className="accent">{hero.titleAccent}</span>{hero.titleSeparator}{hero.titleEnd}
              </h1>
              <p className="hero-copy">{hero.description}</p>
              <div className="actions">
                <ButtonLink href="#projekte" variant="primary">
                  {hero.primaryAction}
                </ButtonLink>
                <ButtonLink to="/contact" variant="secondary">
                  {hero.secondaryAction}
                </ButtonLink>
              </div>
            </div>
            <aside className="data-card" aria-label={translation.accessibility.dataVisualizationLabel}>
              <div className="card-top">
                <span>{dataCard.label}</span>
                <span className="status">{dataCard.status}</span>
              </div>
              <div className="signal" aria-hidden="true">
                {signalBars.map((index) => (
                  <i key={index} />
                ))}
              </div>
              <div className="metrics">
                {dataCard.metrics.map((metric) => (
                  <div key={metric.value}>
                    <b>{metric.value}</b>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
          <span className="scroll-note">{hero.scrollLabel}</span>
        </section>

        <section id="institut">
          <div className="shell intro">
            <div className="section-label">{institute.label}</div>
            <div className="intro-text">
              <p className="eyebrow dark">{institute.eyebrow}</p>
              <h2>{institute.title}</h2>
              {institute.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="areas" id="projekte">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow dark">{projects.eyebrow}</p>
                <h2>{projects.title}</h2>
              </div>
              <p>{projects.description}</p>
            </div>
            <div className="project-grid">
              {projects.items.map((project) => (
                <ProjectCard
                  key={project.code}
                  linkLabel={project.linkLabel}
                  externalLinkAriaLabel={`${projects.externalLinkAriaLabelPrefix}${project.title}${projects.externalLinkAriaLabelSuffix}`}
                  project={{ ...project, href: homeProjectLinks[project.id] }}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="impact" id="zusammenarbeit">
          <div className="shell impact-wrap">
            <div className="impact-visual">
              <p>{impact.visualLabel}</p>
              <strong>{impact.visualStatement}</strong>
            </div>
            <div className="impact-copy">
              <p className="eyebrow dark">{impact.eyebrow}</p>
              <h2>{impact.title}</h2>
              <p>{impact.description}</p>
              <Link className="text-link" to="/contact">
                {impact.action}
              </Link>
            </div>
          </div>
        </section>

        <section className="contact" id="kontakt">
          <div className="shell contact-box">
            <div>
              <p className="eyebrow">{contact.eyebrow}</p>
              <h2>
                {contact.titleStart}
                <br />
                <em>{contact.titleAccent}</em>
              </h2>
              <div className="actions">
                <ButtonLink to="/contact" variant="primary">
                  {contact.action}
                </ButtonLink>
              </div>
            </div>
            <aside>
              {contact.address.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </aside>
          </div>
        </section>
      </main>
    </div>
  )
}
