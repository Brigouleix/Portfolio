import { skills } from '../data/projects'

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section__header">
        <h2 className="section__title">Champs de compétences</h2>
        <p className="section__subtitle">
          Technologies et méthodologies que je maîtrise
        </p>
      </div>
      <div className="skills__grid">
        {skills.map((skill) => (
          <div key={skill.title} className="skill-card">
            <div className="skill-card__icon-wrapper">
              <img src={skill.icon} alt={skill.title} className="skill-card__icon" />
            </div>
            <h3 className="skill-card__title">{skill.title}</h3>
            <div className="skill-card__items">
              {skill.items.map((item) => (
                <div key={item.label} className="skill-card__item">
                  <span className="skill-card__label">{item.label}</span>
                  <span className="skill-card__value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
