import React from 'react'
import { DarkThemeContext } from '../../context/DarkThemeContext'
import './Promo.css'

const Promo = () => {
  const darkTheme = React.useContext(DarkThemeContext);
  return (
    <>
      <section className={`hero ${darkTheme?'':'hero_light'}`}>
        <h1 className={`hero__title ${darkTheme?'':'hero__title_light'}`}>
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </section>
    </>
  )
}

export default Promo