function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero__content">
        <div className="hero__avatar-wrapper">
          <img src="images/profile.png" alt="Antoine Brigouleix" className="hero__avatar" />
          <div className="hero__avatar-ring" />
        </div>
        <div className="hero__text">
          <p className="hero__greeting">Bonjour, je suis</p>
          <h1 className="hero__name">Antoine Brigouleix</h1>
          <h2 className="hero__title">Développeur Web Fullstack</h2>
          <p className="hero__description">
            Étudiant en quatrième année d'un cursus Bac+5 en développement web et applications.
            Je maîtrise les principaux langages et frameworks front-end et back-end,
            formé aux méthodes agiles et passionné par l'innovation, l'accessibilité et l'expérience utilisateur.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Voir mes projets
            </a>
            <a href="cv/CV Antoine Brigouleix .pdf" target="_blank" download className="btn btn--outline">
              Télécharger mon CV
            </a>
          </div>
          <div className="hero__tags">
            {['React', 'Vue', 'Flutter', 'Node.js', 'PHP', 'Python', 'Java', 'C#'].map((tag) => (
              <span key={tag} className="hero__tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
