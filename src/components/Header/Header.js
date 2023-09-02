import React from 'react'
import { DarkThemeContext } from '../../context/DarkThemeContext'
import './Header.css'
import { useNavigate, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

const Header = ({handleChangeTheme}) => {
  const darkTheme = React.useContext(DarkThemeContext);
  const navigation = useNavigate();
  const location = useLocation();
  const loggedIn = true;
  const [width, setWidth] = React.useState(window.innerWidth);
  const [isDesktop, setIsDesktop] = React.useState(true);

  React.useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth)
    };
    if (width < 1280 && isDesktop) {
      setIsDesktop(false);
    }
    if(width > 1280 && !isDesktop){
      setIsDesktop(true);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })
  
  return (
    <header className='header'>
      <Logo handleChangeTheme={handleChangeTheme} />
      {!loggedIn ? 
        <div className='header__sign sign'>
        <button className={`sign__button sign__button_registration ${darkTheme?'':'sign__button_registration_light'} `} onClick={() => navigation('/signup')}>
          Регистрация 
        </button>
        <button className={`sign__button sign__button_login ${darkTheme?'':'sign__button_login_light'}`} onClick={() => navigation('/signin')}>
          Войти
        </button>
        </div> :
        isDesktop ?
          <>
            <button onClick={() => navigation('/movies')} className={`header__link ${darkTheme?'':'header__link_light'} ${location.pathname === '/movies' ?'header__link_active':''}`}>
              Фильмы
            </button>
            <button onClick={() => navigation('/saved-movies')} className={`header__link ${darkTheme?'':'header__link_light'} ${location.pathname === '/saved-movies' ?'header__link_active':''}`}>
              Сохранённые фильмы
            </button>
            <button className={`header__account ${darkTheme?'':'header__account_light'} ${location.pathname === '/' && 'header__account_main'}`} onClick={() => navigation('/profile')}>
              Аккаунт
            </button>
          </>
          :
          <Navigation />
      }

    </header>
  )
}

export default Header