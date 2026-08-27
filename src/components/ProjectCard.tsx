import { Link } from 'react-router-dom'

export type ProjectCardData = {
  code: string
  description: string
  title: string
} & ({ href: string } | { to: string })

type ProjectCardProps = {
  linkLabel: string
  project: ProjectCardData
}

export function ProjectCard({ linkLabel, project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <span className="project-card-code">{project.code}</span>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {'to' in project ? (
        <Link className="project-card-link" to={project.to}>{linkLabel}</Link>
      ) : (
        <a className="project-card-link" href={project.href} target="_blank" rel="noreferrer">
          {linkLabel}
        </a>
      )}
    </article>
  )
}
