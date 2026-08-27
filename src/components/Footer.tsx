import { Link } from 'react-router-dom'
import type { FooterItem } from '../i18n/types'

type FooterProps = {
  copyright: string
  navigationAriaLabel: string
  links: readonly FooterItem[]
}

export function Footer({ copyright, navigationAriaLabel, links }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <span>{copyright}</span>
        <nav className="footer-links" aria-label={navigationAriaLabel}>
          {links.map(({ label, to }) => (
            to ? <Link key={label} to={to}>{label}</Link> : <span key={label}>{label}</span>
          ))}
        </nav>
      </div>
    </footer>
  )
}
