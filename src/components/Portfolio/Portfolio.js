import React from 'react'
import { Link } from 'react-router-dom'
import { DarkThemeContext } from '../../context/DarkThemeContext'
import './Portfolio.css'

const Portfolio = () => {
  const darkTheme = React.useContext(DarkThemeContext);
  const projects = [
    {
      type: 'Статичный сайт',
      link: 'https://applefa4ry.github.io/how-to-learn/'
    },
    {
      type: 'Адаптивный сайт',
      link: 'https://applefa4ry.github.io/russian-travel/'
    },
    {
      type: 'Одностраничное приложение',
      link: 'https://applefa4ry.github.io/react-mesto-auth'
    },
  ]
  return (
    <section className='portfolio'>
      <h2 className={`portfolio__title ${darkTheme?'':'portfolio__title_light'}`}>
        Портфолио
      </h2>
      {projects.map((project, index) => (
        <div key={index} className={`portfolio__project project ${darkTheme?'':'portfolio__project_light'}`}>
          <h3 className={`project__type ${darkTheme?'':'project__type_light'}`}>
            {project.type}
          </h3>
          <Link to={project.link} target='_blank' className={`project__link ${darkTheme?'':'project__link_light'}`}>↗</Link>
        </div>
      ))}
    </section>
  )
}

export default Portfolio