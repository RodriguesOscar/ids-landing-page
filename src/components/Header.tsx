import { useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type { LanguageCode, NavigationItem } from '../i18n/types'

type HeaderBrand = {
  homeAriaLabel: string
  subline: string
  title: string
}

type HeaderLanguage = {
  label: string
  german: string
  english: string
  germanAriaLabel: string
  englishAriaLabel: string
}

type HeaderMenu = {
  closeAriaLabel: string
  closeLabel: string
  openAriaLabel: string
  openLabel: string
}

type HeaderProps = {
  brand: HeaderBrand
  externalLinkAriaLabelSuffix: string
  navigationAriaLabel: string
  navigation: readonly NavigationItem[]
  language: HeaderLanguage
  languageCode: LanguageCode
  menu: HeaderMenu
  onLanguageChange: (language: LanguageCode) => void
}

type NavigationLinksProps = {
  className: string
  externalLinkAriaLabelSuffix: string
  navigation: readonly NavigationItem[]
  onNavigate?: () => void
}

function NavigationLinks({ className, externalLinkAriaLabelSuffix, navigation, onNavigate }: NavigationLinksProps) {
  return (
    <ul className={className}>
      {navigation.map((item) => (
        <li key={item.label}>
          {item.external ? (
            <a
              aria-label={`${item.label}${externalLinkAriaLabelSuffix}`}
              className={item.isContact ? 'nav-contact' : undefined}
              href={item.href}
              onClick={onNavigate}
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.label}
            </a>
          ) : (
            <Link className={item.isContact ? 'nav-contact' : undefined} onClick={onNavigate} to={item.to}>
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

export function Header({ brand, externalLinkAriaLabelSuffix, navigationAriaLabel, navigation, language, languageCode, menu, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  function closeMenuAndRestoreFocus() {
    setIsMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  function changeLanguage(nextLanguage: LanguageCode) {
    setIsMenuOpen(false)
    onLanguageChange(nextLanguage)
  }

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label={navigationAriaLabel}>
        <a className="brand-lockup" href="/" aria-label={brand.homeAriaLabel}>
          <span>{brand.title}</span>
          <small>{brand.subline}</small>
        </a>
        <div className="nav-actions">
          <NavigationLinks className="nav-links nav-links-desktop" externalLinkAriaLabelSuffix={externalLinkAriaLabelSuffix} navigation={navigation} />
          <div className="language-switch" aria-label={language.label}>
            <button
              type="button"
              aria-label={language.germanAriaLabel}
              aria-pressed={languageCode === 'de'}
              onClick={() => changeLanguage('de')}
            >
              {language.german}
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              aria-label={language.englishAriaLabel}
              aria-pressed={languageCode === 'en'}
              onClick={() => changeLanguage('en')}
            >
              {language.english}
            </button>
          </div>
          <button
            ref={menuButtonRef}
            type="button"
            aria-controls={menuId}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? menu.closeAriaLabel : menu.openAriaLabel}
            className="menu-toggle"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            {isMenuOpen ? menu.closeLabel : menu.openLabel}
          </button>
        </div>
        <div className="mobile-menu" id={menuId} hidden={!isMenuOpen} onKeyDown={(event) => {
          if (event.key === 'Escape') {
            closeMenuAndRestoreFocus()
          }
        }}>
          <NavigationLinks className="nav-links nav-links-mobile" externalLinkAriaLabelSuffix={externalLinkAriaLabelSuffix} navigation={navigation} onNavigate={() => setIsMenuOpen(false)} />
        </div>
      </nav>
    </header>
  )
}
