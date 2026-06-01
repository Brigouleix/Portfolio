import { useState } from 'react'

function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false)
  const [activeShot, setActiveShot] = useState(0)

  const hasDetails = project.description || project.repoUrl || project.siteUrl
  const hasGallery = project.screenshots && project.screenshots.length > 0

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
          {hasGallery ? (
            <>
              <div className="card__gallery">
                <img
                  className="card__gallery-main"
                  src={project.screenshots[activeShot]}
                  alt={`${project.name} screenshot ${activeShot + 1}`}
                />
                <div className="card__gallery-thumbs">
                  {project.screenshots.map((src, i) => (
                    <button
                      key={i}
                      className={`card__gallery-thumb ${i === activeShot ? 'card__gallery-thumb--active' : ''}`}
                      style={{ backgroundImage: `url(${src})` }}
                      onClick={(e) => { e.stopPropagation(); setActiveShot(i) }}
                      aria-label={`Screenshot ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="card__back-footer">
                <div className="card__links">
                  {project.siteUrl && (
                    <a href={project.siteUrl} target="_blank" rel="noopener noreferrer"
                      className="btn btn--small btn--primary" onClick={(e) => e.stopPropagation()}>
                      Voir le site
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                      className="btn btn--small btn--outline" onClick={(e) => e.stopPropagation()}>
                      GitHub
                    </a>
                  )}
                </div>
                <p className="card__hint">Cliquer pour retourner</p>
              </div>
            </>
          ) : (
            <>
              <h3 className="card__name">{project.name}</h3>
              <p className="card__description">{project.description}</p>
              <div className="card__links">
                {project.siteUrl && (
                  <a href={project.siteUrl} target="_blank" rel="noopener noreferrer"
                    className="btn btn--small btn--primary" onClick={(e) => e.stopPropagation()}>
                    Voir le site
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                    className="btn btn--small btn--outline" onClick={(e) => e.stopPropagation()}>
                    GitHub
                  </a>
                )}
              </div>
              <p className="card__hint">Cliquer pour retourner</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
