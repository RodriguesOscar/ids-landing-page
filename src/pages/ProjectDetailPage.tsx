import { Link, useParams } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { useLanguage } from '../i18n/LanguageContext'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const { translation } = useLanguage()
  const project = translation.projectDetail

  return (
    <main className="page-template" id="main-content" tabIndex={-1}>
      <PageHeader eyebrow={project.eyebrow} title={project.title} description={project.introduction} />
      <section className="template-section template-section-white">
        <div className="shell detail-layout">
          <div className="detail-content">
            <p className="template-kicker">{project.routeIdentifierLabel}: {slug ?? project.pendingIdentifier}</p>
            <p className="template-lead">{project.description}</p>
            <div className="placeholder-panel">
              <h2>{project.relatedTitle}</h2>
              <p>{project.relatedDescription}</p>
            </div>
            <Link className="text-link" to="/projects">{project.backToOverviewLabel}</Link>
          </div>
          <aside className="metadata-panel" aria-labelledby="project-metadata-title">
            <p className="eyebrow dark">{project.metadataTitle}</p>
            <h2 id="project-metadata-title">{project.metadataTitle}</h2>
            <ul>
              {project.metadata.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  )
}
