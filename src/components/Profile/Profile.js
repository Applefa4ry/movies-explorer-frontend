import React from 'react'
import { DarkThemeContext } from '../../context/DarkThemeContext'
import * as MainApi from '../../utils/MainApi'
import './Profile.css'

const Profile = ({handleLogOut, currentUser, setCurrentUser}) => {
  const darkTheme = React.useContext(DarkThemeContext);
  const [activeEdit, setActiveEdit] = React.useState(false)
  const [formValue, setFormValue] = React.useState({
    name: currentUser.name,
    email: currentUser.email,
    password: ''
  })

  React.useEffect(() => {
    setFormValue({
      name: currentUser.name,
      email: currentUser.email,
      password: ''
    })
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    MainApi.editProfile(formValue.name, formValue.email)
      .then(res => {
        if(res){
          setCurrentUser({...currentUser, name: res.name, email: res.email})
          setActiveEdit(false)
        }
      })
      .catch(err => console.log(err))
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  React.useEffect(() => {
    if(currentUser.name !== formValue.name || currentUser.email !== formValue.email){
      setActiveEdit(true)
    }else{
      setActiveEdit(false)
    }
  }, [formValue])
  
  return (
    <section className='profile'>
      <h2 className={`profile__title ${darkTheme?'':'profile__title_light'}`}>Привет, {currentUser.name}!</h2>
      <form id='profile' onSubmit={handleSubmit} className='profile__about about'>
        <label htmlFor='name' className={`about__path ${darkTheme?'':'about__path_light'}`}>Имя</label>
        <input type='text' minLength={2} maxLength={30} onChange={handleChange} name='name' id='name' defaultValue={currentUser.name} className={`about__path ${darkTheme?'':'about__path_light'}`} required />
        <label htmlFor='email' className={`about__path ${darkTheme?'':'about__path_light'}`}>E-mail</label>
        <input type='email' minLength={2} onChange={handleChange} name='email' id='email' defaultValue={currentUser.email} className={`about__path ${darkTheme?'':'about__path_light'}`} required />
      </form>
      <button form='profile' disabled={!activeEdit} type='submit' className={`profile__edit-button ${darkTheme?'':'profile__edit-button_light'} ${!activeEdit && 'profile__edit-button_disabled'}`}>Редактировать</button>
      <button type='button' onClick={() => handleLogOut()} className='profile__logout-button'>Выйти из аккаунта</button>
    </section>
  )
}

export default Profile