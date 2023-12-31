import React from 'react'
import { Link } from 'react-router-dom'
import { DarkThemeContext } from '../../context/DarkThemeContext'
import { projects } from '../../constants/constants'
import './Portfolio.css'

const Portfolio = () => {
  const darkTheme = React.useContext(DarkThemeContext);
  return (
    <section className='portfolio'>
      <h2 className={`portfolio__title ${darkTheme?'':'portfolio__title_light'}`}>
        Портфолио
      </h2>
      {projects.map((project, index) => (
        <div key={index} className={`portfolio__project project ${darkTheme?'':'portfolio__project_light'}`}>
          <Link to={project.link} target='_blank' className={`project__type ${darkTheme?'':'project__type_light'}`}>
            {project.type}
          </Link>
          <Link to={project.link} target='_blank' className={`project__link ${darkTheme?'':'project__link_light'}`}>↗</Link>
        </div>
      ))}
    </section>
  )
}

export default Portfolio