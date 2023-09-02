import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { DarkThemeContext } from '../../context/DarkThemeContext'
import './NavTab.css'

const NavTab = () => {
  const darkTheme = React.useContext(DarkThemeContext);
  return (
    <>
      <nav className={`navigation ${darkTheme?'':'navigation_light'}`}>
        <AnchorLink href="#about-project" className={`navigation__link ${darkTheme?'':'navigation__link_light'}`}>О проекте</AnchorLink>
        <AnchorLink href="#techs" className={`navigation__link ${darkTheme?'':'navigation__link_light'}`}>Технологии</AnchorLink>
        <AnchorLink href="#about-me" className={`navigation__link ${darkTheme?'':'navigation__link_light'}`}>Студент</AnchorLink>
      </nav>
    </>
  )
}

export default NavTab