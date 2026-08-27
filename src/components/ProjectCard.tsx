import { Link } from 'react-router-dom'

export type ProjectCardData = {
  code: string
  description: string
  title: string
} & ({ href: string } | { to: string })

type ProjectCardProps = {
  externalLinkAriaLabel?: string
  linkLabel: string
  project: ProjectCardData
}

export function ProjectCard({ externalLinkAriaLabel, linkLabel, project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <span className="project-card-code">{project.code}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {'to' in project ? (
        <Link className="project-card-link" to={project.to}>{linkLabel}</Link>
      ) : (
        <a
          className="project-card-link"
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={externalLinkAriaLabel}
        >
          {linkLabel}
        </a>
      )}
    </article>
  )
}
