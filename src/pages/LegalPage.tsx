import { PageHeader } from '../components/PageHeader'
import { useLanguage } from '../i18n/LanguageContext'
import type { Translation } from '../i18n/types'

type LegalPageProps = {
  pageKey: keyof Translation['legal']
}

export function LegalPage({ pageKey }: LegalPageProps) {
  const { translation } = useLanguage()
  const { eyebrow, introduction, sections, title } = translation.legal[pageKey]

  return (
    <main className="page-template" id="main-content">
      <PageHeader eyebrow={eyebrow} title={title} description={introduction} />
      <section className="template-section template-section-white">
        <div className="shell legal-content">
          {sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
