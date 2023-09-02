import React from 'react'
import { DarkThemeContext } from '../../context/DarkThemeContext'
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
        <p className={`copyright__yandex ${darkTheme?'':'copyright__yandex_light'}`}>
          Яндекс.Практикум
        </p>
        <p className={`copyright__github ${darkTheme?'':'copyright__github_light'}`}>
          Github
        </p>
      </div>
    </footer>
  )
}

export default Footer