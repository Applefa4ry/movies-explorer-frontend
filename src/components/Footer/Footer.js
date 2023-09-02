import React from 'react'
import { DarkThemeContext } from '../../context/DarkThemeContext'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const darkTheme = React.useContext(DarkThemeContext);
  return (
    <footer className='footer'>
      <h2 className={`footer__title ${darkTheme?'':'footer__title_light'}`}>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className='footer__copyright copyright'>
        <p className={`copyright__year ${darkTheme?'':'copyright__year_light'}`}>
          © {new Date().getFullYear()}
        </p>
        <Link to='https://practicum.yandex.ru/' target='_blank' className={`copyright__yandex ${darkTheme?'':'copyright__yandex_light'}`}>
          Яндекс.Практикум
        </Link>
        <Link to='https://github.com/' target='_blank' className={`copyright__github ${darkTheme?'':'copyright__github_light'}`}>
          Github
        </Link>
      </div>
    </footer>
  )
}

export default Footer