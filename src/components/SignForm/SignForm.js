import React from 'react'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import { DarkThemeContext } from '../../context/DarkThemeContext'
import './SignForm.css'

const SignForm = ({handleChangeTheme, hasMistake, data}) => {
  const darkTheme = React.useContext(DarkThemeContext);
  return (
    <form className='form'>
      <Logo handleChangeTheme={handleChangeTheme} />
      <h2 className={`form__title ${darkTheme ? '':'form__title_light'}`}>{data.title}</h2>
      {data.inputs.map((input) => (
        <>
          <label htmlFor={input.for} className='form__label'>{input.name}</label>
          <input id={input.for} className={`form__input ${darkTheme ? '':'form__input_light'}`} />
        </>
      ))}
      <label htmlFor='password' className='form__label'>Пароль</label>
      <input id='password' type='password' className={`form__input ${darkTheme ? '':'form__input_light'}  ${hasMistake?'form__input_bad':''}`} />
      {hasMistake && <p className='form__bad'>Что-то пошло не так...</p>}
      <button type='submit' className='form__button'>{data.button}</button>
      <div className='form__nav nav'>
        <p className='nav__title'>{data.navTitle}</p>
        <Link className='nav__link' to={data.navTo}>{data.navLink}</Link>
      </div>
    </form>
  )
}

export default SignForm