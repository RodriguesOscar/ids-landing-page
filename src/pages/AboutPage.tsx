import { PageHeader } from '../components/PageHeader'
import { useLanguage } from '../i18n/LanguageContext'

export function AboutPage() {
  const { translation } = useLanguage()
  const about = translation.about

  return (
    <main className="page-template" id="main-content" tabIndex={-1}>
      <PageHeader eyebrow={about.eyebrow} title={about.title} description={about.introduction} />
      <section className="template-section template-section-white">
        <div className="shell template-panel-grid">
          {about.sections.map((section) => (
            <article className="placeholder-panel" key={section.title}>
              <p className="eyebrow dark">{section.title}</p>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
