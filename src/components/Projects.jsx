import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  const [filter, setFilter] = useState('all')

  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="projects">
      <div className="section__header">
        <h2 className="section__title">Projets Réalisés</h2>
        <p className="section__subtitle">
          Une sélection de projets personnels et professionnels
        </p>
      </div>

      <h3 className="projects__group-title">Projets phares</h3>
      <div className="projects__grid projects__grid--featured">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <h3 className="projects__group-title">Projets de formation</h3>
      <div className="projects__grid">
        {others.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
