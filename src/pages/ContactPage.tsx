import { PageHeader } from '../components/PageHeader'
import { useLanguage } from '../i18n/LanguageContext'

export function ContactPage() {
  const { translation } = useLanguage()
  const contact = translation.contact

  return (
    <main className="page-template" id="main-content">
      <PageHeader eyebrow={contact.eyebrow} title={contact.title} description={contact.introduction} />
      <section className="template-section template-section-paper">
        <div className="shell contact-template">
          <form className="contact-form" noValidate>
            <p className="eyebrow dark">{contact.formTitle}</p>
            <h2>{contact.formTitle}</h2>
            <label className="form-field">
              <span>{contact.nameLabel}</span>
              <input name="name" type="text" autoComplete="name" />
            </label>
            <label className="form-field">
              <span>{contact.emailLabel}</span>
              <input name="email" type="email" autoComplete="email" />
            </label>
            <label className="form-field">
              <span>{contact.messageLabel}</span>
              <textarea className="form-message resize-none" name="message" rows={7} />
            </label>
            <button className="button button-primary" type="submit" disabled>{contact.submitLabel}</button>
            <p className="form-note">{contact.submissionNote}</p>
          </form>
          <aside className="contact-details">
            <p className="eyebrow">{contact.detailsTitle}</p>
            <h2>{contact.detailsTitle}</h2>
            <p>{contact.detailsDescription}</p>
          </aside>
        </div>
      </section>
    </main>
  )
}
