import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DarkThemeContext } from '../../context/DarkThemeContext'
import './Profile.css'

const Profile = () => {
  const navigation = useNavigate();
  const darkTheme = React.useContext(DarkThemeContext);
  return (
    <section className='profile'>
      <h2 className={`profile__title ${darkTheme?'':'profile__title_light'}`}>Привет, Мария!</h2>
      <div className='profile__about about'>
        <p className={`about__path ${darkTheme?'':'about__path_light'}`}>Имя</p>
        <p className={`about__path ${darkTheme?'':'about__path_light'}`}>Мария</p>
        <p className={`about__path ${darkTheme?'':'about__path_light'}`}>E-mail</p>
        <p className={`about__path ${darkTheme?'':'about__path_light'}`}>pochta@yandex.ru</p>
      </div>
      <button className={`profile__edit-button ${darkTheme?'':'profile__edit-button_light'}`}>Редактировать</button>
      <button onClick={() => navigation('/signin')} className='profile__logout-button'>Выйти из аккаунта</button>
    </section>
  )
}

export default Profile