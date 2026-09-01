import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonLinkBaseProps = {
  ariaLabel?: string
  children: ReactNode
  variant: 'primary' | 'secondary'
}

type ButtonLinkProps = ButtonLinkBaseProps & ({ external?: boolean; href: string } | { to: string })

export function ButtonLink({ ariaLabel, children, variant, ...destination }: ButtonLinkProps) {
  const className = `button button-${variant}`

  if ('to' in destination) {
    return <Link aria-label={ariaLabel} className={className} to={destination.to}>{children}</Link>
  }

  return (
    <a
      aria-label={ariaLabel}
      className={className}
      href={destination.href}
      target={destination.external ? '_blank' : undefined}
      rel={destination.external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  )
}
