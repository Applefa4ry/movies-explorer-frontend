import React from 'react'
import { DarkThemeContext } from '../../context/DarkThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css'

const Navigation = (props) => {
  const navigation = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  function handleOpenNavMenu() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }
  const darkTheme = React.useContext(DarkThemeContext);
  return (
    <>
      <button onClick={handleOpenNavMenu} className={`header__nav-menu nav-menu ${darkTheme?'':'nav-menu_light'} ${isOpen ? 'nav-menu_open' : ''}`} />
      {isOpen && 
        <div className={`nav-menu__container ${isOpen?'nav-menu__container_open':''}`}>
          <nav className={`nav-menu__links ${darkTheme?'':'nav-menu__links_light'}`}>
            <button onClick={() => {
              navigation('/');
              handleOpenNavMenu()
            }} className={`nav-menu__link ${darkTheme?'':'nav-menu__link_light'} ${location.pathname === '/' ?'nav-menu__link_active':''}`}>
              Главная
            </button>
            <button onClick={() => {
              handleOpenNavMenu()
              navigation('/movies')
            }} className={`nav-menu__link ${darkTheme?'':'nav-menu__link_light'} ${location.pathname === '/movies' ?'nav-menu__link_active':''}`}>
              Фильмы
            </button>
            <button onClick={() => {
              handleOpenNavMenu()
              navigation('/saved-movies')
            }} className={`nav-menu__link ${darkTheme?'':'nav-menu__link_light'} ${location.pathname === '/saved-movies' ?'nav-menu__link_active':''}`}>
              Сохранённые фильмы
            </button>
            <button className={`nav-menu__account ${darkTheme?'':'nav-menu__account_light'}`} onClick={() => {
              handleOpenNavMenu()
              navigation('/profile')
            }}>
              Аккаунт
            </button>
          </nav>
        </div>
      }
    </>
  )
}

export default Navigation