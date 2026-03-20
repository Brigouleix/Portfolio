import { useState } from 'react'

function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false)

  const hasDetails = project.description || project.repoUrl || project.siteUrl

  return (
    <div
      className={`card ${flipped ? 'card--flipped' : ''} ${project.featured ? 'card--featured' : ''}`}
      onClick={() => hasDetails && setFlipped(!flipped)}
      onKeyDown={(e) => e.key === 'Enter' && hasDetails && setFlipped(!flipped)}
      tabIndex={0}
      role="button"
      aria-label={`${project.name} - cliquez pour plus de détails`}
    >
      <div className="card__inner">
        {/* Front */}
        <div className="card__face card__front">
          <div
            className="card__image"
            style={
              project.image
                ? { backgroundImage: `url(${project.image})` }
                : { background: project.gradient }
            }
          >
            {!project.image && (
              <span className="card__image-text">{project.name}</span>
            )}
          </div>
          <div className="card__body">
            <h3 className="card__name">{project.name}</h3>
            <p className="card__subtitle">{project.subtitle}</p>
            <div className="card__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            {hasDetails && (
              <p className="card__hint">Cliquer pour en savoir plus</p>
            )}
          </div>
        </div>

        {/* Back */}
        <div className="card__face card__back">
          <h3 className="card__name">{project.name}</h3>
          <p className="card__description">{project.description}</p>
          <div className="card__links">
            {project.siteUrl && (
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--small btn--primary"
                onClick={(e) => e.stopPropagation()}
              >
                Voir le site
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--small btn--outline"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </a>
            )}
          </div>
          <p className="card__hint">Cliquer pour retourner</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
