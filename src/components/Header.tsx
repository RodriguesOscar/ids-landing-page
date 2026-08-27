import { Link } from 'react-router-dom'
import type { LanguageCode, NavigationItem } from '../i18n/types'

type HeaderBrand = {
  mark: string
  name: string
  subline: string
  homeAriaLabel: string
}

type HeaderLanguage = {
  label: string
  german: string
  english: string
  germanAriaLabel: string
  englishAriaLabel: string
}

type HeaderProps = {
  brand: HeaderBrand
  navigationAriaLabel: string
  navigation: readonly NavigationItem[]
  language: HeaderLanguage
  languageCode: LanguageCode
  onLanguageChange: (language: LanguageCode) => void
}

export function Header({ brand, navigationAriaLabel, navigation, language, languageCode, onLanguageChange }: HeaderProps) {
  return (
    <header className="site-header">
      <nav className="nav shell" aria-label={navigationAriaLabel}>
        <Link className="brand" to="/" aria-label={brand.homeAriaLabel}>
          <span className="brand-mark">{brand.mark}</span>
          <span className="brand-name">
            {brand.name}
            <small>{brand.subline}</small>
          </span>
        </Link>
        <div className="nav-actions">
          <ul className="nav-links">
            {navigation.map(({ isContact, label, to }) => (
              <li key={label}>
                <Link className={isContact ? 'nav-contact' : undefined} to={to}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="language-switch" aria-label={language.label}>
            <button
              type="button"
              aria-label={language.germanAriaLabel}
              aria-pressed={languageCode === 'de'}
              onClick={() => onLanguageChange('de')}
            >
              {language.german}
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              aria-label={language.englishAriaLabel}
              aria-pressed={languageCode === 'en'}
              onClick={() => onLanguageChange('en')}
            >
              {language.english}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
