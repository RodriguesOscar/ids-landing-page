import { ButtonLink } from '../components/ButtonLink'
import { managerProfileUrl } from '../content/managerProfile'
import { ProjectCard } from '../components/ProjectCard'
import { homeProjectLinks } from '../content/projectLinks'
import collaborationWorkshopDesktopAvif from '../assets/optimized/collaboration-workshop-desktop.avif'
import collaborationWorkshopDesktopWebp from '../assets/optimized/collaboration-workshop-desktop.webp'
import collaborationWorkshopMobileAvif from '../assets/optimized/collaboration-workshop-mobile.avif'
import collaborationWorkshopMobileWebp from '../assets/optimized/collaboration-workshop-mobile.webp'
import heroCampusDesktopAvif from '../assets/optimized/hero-campus-desktop.avif'
import heroCampusDesktopWebp from '../assets/optimized/hero-campus-desktop.webp'
import heroCampusMobileAvif from '../assets/optimized/hero-campus-mobile.avif'
import heroCampusMobileWebp from '../assets/optimized/hero-campus-mobile.webp'
import { useLanguage } from '../i18n/LanguageContext'
import './HomePage.css'

export function HomePage() {
  const { translation } = useLanguage()
  const { hero, institute, projects, impact, contact } = translation.home

  return (
    <div className="home-page">
      <main id="main-content" tabIndex={-1}>
        <section className="hero" id="start" aria-labelledby="hero-title" tabIndex={-1}>
          <picture className="hero-image" aria-hidden="true">
            <source media="(max-width: 760px)" srcSet={heroCampusMobileAvif} type="image/avif" />
            <source srcSet={heroCampusDesktopAvif} type="image/avif" />
            <source media="(max-width: 760px)" srcSet={heroCampusMobileWebp} type="image/webp" />
            <img alt="" decoding="async" fetchPriority="high" height="941" src={heroCampusDesktopWebp} width="1672" />
          </picture>
          <div className="hero-grid shell">
            <div>
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1 id="hero-title">
                {hero.titleLead}
                <br />
                <span className="accent">{hero.titleAccent}</span>{hero.titleSeparator}{hero.titleEnd}
              </h1>
              <p className="hero-copy">{hero.description}</p>
              <span className="closing-rule" aria-hidden="true" />
              <div className="actions">
                <ButtonLink href="#projekte" variant="primary">
                  {hero.primaryAction}
                </ButtonLink>
                <ButtonLink ariaLabel={contact.externalLinkAriaLabel} external href={managerProfileUrl} variant="secondary">
                  {hero.secondaryAction}
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <section id="institut" tabIndex={-1}>
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

        <section className="areas" id="projekte" tabIndex={-1}>
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

        <section className="impact" id="zusammenarbeit" tabIndex={-1}>
          <div className="shell impact-wrap">
            <figure className="impact-image">
              <picture>
                <source media="(max-width: 760px)" srcSet={collaborationWorkshopMobileAvif} type="image/avif" />
                <source srcSet={collaborationWorkshopDesktopAvif} type="image/avif" />
                <source media="(max-width: 760px)" srcSet={collaborationWorkshopMobileWebp} type="image/webp" />
                <img alt={impact.imageAlt} decoding="async" height="1024" loading="lazy" sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 1280px) 40vw, 450px" src={collaborationWorkshopDesktopWebp} width="1536" />
              </picture>
            </figure>
            <div className="impact-copy">
              <p className="eyebrow dark">{impact.eyebrow}</p>
              <h2>{impact.title}</h2>
              <p>{impact.description}</p>
              <a
                aria-label={contact.externalLinkAriaLabel}
                className="text-link"
                href={managerProfileUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {impact.action}
              </a>
            </div>
          </div>
        </section>

        <section className="contact" id="kontakt" tabIndex={-1}>
          <div className="shell contact-box">
            <div>
              <p className="eyebrow">{contact.eyebrow}</p>
              <h2>
                {contact.titleLead}{' '}
                <em>{contact.titleAccent}</em>
              </h2>
              <div className="actions">
                <ButtonLink ariaLabel={contact.externalLinkAriaLabel} external href={managerProfileUrl} variant="primary">
                  {contact.action}
                </ButtonLink>
              </div>
            </div>
            <aside>
              {contact.details.map((line) => (
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
