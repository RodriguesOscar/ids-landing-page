import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { useLanguage } from '../i18n/LanguageContext'
import { HashScrollHandler } from './HashScrollHandler'

export function SiteLayout() {
  const { language, setLanguage, translation } = useLanguage()

  return (
    <>
      <a className="skip-link" href="#main-content">{translation.accessibility.skipToMain}</a>
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
