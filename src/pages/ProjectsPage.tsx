import { PageHeader } from '../components/PageHeader'
import { ProjectCard } from '../components/ProjectCard'
import { useLanguage } from '../i18n/LanguageContext'

export function ProjectsPage() {
  const { translation } = useLanguage()
  const { cards, description, detailLinkLabel, eyebrow, title } = translation.projects

  return (
    <main className="page-template" id="main-content">
      <PageHeader eyebrow={eyebrow} title={title} description={description} />
      <section className="template-section template-section-paper" aria-label={title}>
        <div className="shell">
          <div className="project-grid">
            {cards.map((project) => (
              <ProjectCard
                key={project.slug}
                linkLabel={detailLinkLabel}
                project={{ ...project, to: `/projects/${project.slug}` }}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
