import React from 'react'
import { DarkThemeContext } from '../../context/DarkThemeContext'
import './Techs.css'

const Techs = () => {
  const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];
  const darkTheme = React.useContext(DarkThemeContext);
  return (
    <section id='techs' className={`techs ${darkTheme?'':'techs_light'} section`}>
      <h2 className={`section__title ${darkTheme?'':'section__title_light'}`}>
        Технологии
      </h2>
      <h3 className={`techs__title ${darkTheme?'':'techs__title_light'}`}>
        7 технологий
      </h3>
      <p className={`techs__subtitle ${darkTheme?'':'techs__subtitle_light'}`}>
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <div className='techs__tiles'>
        {techs.map((tech, index) => (
          <div key={index} className={`techs__tile ${darkTheme?'':'techs__tile_light'}`}>
            {tech}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Techs