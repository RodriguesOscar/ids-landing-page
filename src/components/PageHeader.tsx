type PageHeaderProps = {
  eyebrow: string
  title: string
  description: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="shell page-header-content">
        <p className="eyebrow">{eyebrow}</p>
        <div className="page-header-copy">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  )
}
