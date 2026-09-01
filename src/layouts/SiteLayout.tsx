import { Outlet } from 'react-router-dom'
import type { MouseEvent } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { useLanguage } from '../i18n/LanguageContext'
import { HashScrollHandler } from './HashScrollHandler'

export function SiteLayout() {
  const { language, setLanguage, translation } = useLanguage()

  function skipToMainContent(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    const main = document.getElementById('main-content')
    main?.focus({ preventScroll: true })
    main?.scrollIntoView({ block: 'start' })
  }

  return (
    <>
      <a className="skip-link" href="#main-content" onClick={skipToMainContent}>{translation.accessibility.skipToMain}</a>
      <Header
        {...translation.header}
        languageCode={language}
        onLanguageChange={setLanguage}
      />
      <HashScrollHandler />
      <Outlet />
      <Footer {...translation.footer} />
    </>
  )
}
