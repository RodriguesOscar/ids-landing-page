import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonLinkBaseProps = {
  children: ReactNode
  variant: 'primary' | 'secondary'
}

type ButtonLinkProps = ButtonLinkBaseProps & ({ href: string } | { to: string })

export function ButtonLink({ children, variant, ...destination }: ButtonLinkProps) {
  const className = `button button-${variant}`

  if ('to' in destination) {
    return <Link className={className} to={destination.to}>{children}</Link>
  }

  return (
    <a className={className} href={destination.href}>
      {children}
    </a>
  )
}
