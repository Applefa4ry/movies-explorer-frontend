import React from 'react'
import { DarkThemeContext } from '../../context/DarkThemeContext'
import './AboutProject.css'

const AboutProject = () => {
  const darkTheme = React.useContext(DarkThemeContext);
  return (
    <section id='about-project' className='about-project section'>
      <h2 className={`section__title ${darkTheme?'':'section__title_light'}`}>
        О проекте
      </h2>
      <div className='about-project__description description'>
        <div className='description__path path'>
          <p className={`path__subtitle ${darkTheme?'':'path__subtitle_light'}`}>
            Дипломный проект включал 5 этапов
          </p>
          <p className={`path__about ${darkTheme?'':'path__about_light'}`}>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className='description__path path'>
          <p className={`path__subtitle ${darkTheme?'':'path__subtitle_light'}`}>
            На выполнение диплома ушло 5 недель
          </p>
          <p className={`path__about ${darkTheme?'':'path__about_light'}`}>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__bar bar'>
        <div className={`bar__path bar__path_one-week ${darkTheme?'':'bar__path_one-week_dark'}`}>
          1 неделя
        </div>
        <div className={`bar__path bar__path_four-week ${darkTheme?'':'bar__path_four-week_dark'}`}>
          4 недели
        </div>
        <div className={`bar__path bar__path_back ${darkTheme?'':'bar__path_back_dark'}`}>
          Back-end
        </div>
        <div className={`bar__path bar__path_front ${darkTheme?'':'bar__path_front_dark'}`}>
          Front-end
        </div>
      </div>
    </section>
  )
}

export default AboutProject