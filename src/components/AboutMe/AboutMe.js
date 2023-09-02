import React from 'react'
import { Link } from 'react-router-dom'
import { DarkThemeContext } from '../../context/DarkThemeContext'
import './AboutMe.css'

const AboutMe = () => {
  const darkTheme = React.useContext(DarkThemeContext);
  return (
    <section id='about-me' className='about-me section'>
      <h2 className={`section__title section__title_about-me ${darkTheme?'':'section__title_light'}`}>
        Студент
      </h2>
      <div className='about-me__business-card business-card'>
        <div className='business-card__info'>
          <h3 className={`business-card__name ${darkTheme?'':'business-card__name_light'}`}>
            Мария
          </h3>
          <p className={`business-card__job ${darkTheme?'':'business-card__job_light'}`}>
            Фронтенд-разработчица, 19 лет
          </p>
          <p className={`business-card__about ${darkTheme?'':'business-card__about_light'}`}>
            Я родилась и живу в Кирове, учусь на стоматологическом факультете КГМУ. Я люблю слушать музыку, 
            а еще увлекаюсь рисованием. Недавно начала кодить, 
            но уже достигла больших успехов в этом и планирую дальше развиваться в данном направлении.
          </p>
          <Link to='https://github.com/Applefa4ry' target='_blank' className={`business-card__github ${darkTheme?'':'business-card__github_light'}`}>Github</Link>
        </div>
        <div className='business-card__avatar'></div>
      </div>
    </section>
  )
}

export default AboutMe