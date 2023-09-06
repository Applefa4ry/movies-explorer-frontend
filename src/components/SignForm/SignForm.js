import React from 'react'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import { DarkThemeContext } from '../../context/DarkThemeContext'
import './SignForm.css'

const SignForm = ({handleChangeTheme, hasMistake, data, onSubmit, isLoading}) => {
  const darkTheme = React.useContext(DarkThemeContext);
  const [formValue, setFormValue] = React.useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  return (
    <form onSubmit={(e) => onSubmit(e, formValue, setFormValue)} className='form'>
      <Logo handleChangeTheme={handleChangeTheme} />
      <h2 className={`form__title ${darkTheme ? '':'form__title_light'}`}>{data.title}</h2>
      {data.inputs.map((input, e) => (
        <>
          <label key={input.name} htmlFor={input.for} className='form__label'>{input.name}</label>
          <input name={input.for} key={input.for} onChange={handleChange} minLength="2" required placeholder={input.name} id={input.for} className={`form__input ${darkTheme ? '':'form__input_light'}`} />
        </>
      ))}
      <label htmlFor='password' className='form__label'>Пароль</label>
      <input name='password' onChange={handleChange} id='password' minLength="8" maxLength="200" required placeholder='Пароль' type='password' className={`form__input ${darkTheme ? '':'form__input_light'}  ${hasMistake?'form__input_bad':''}`} />
      {hasMistake && <p className='form__bad'>Что-то пошло не так...</p>}
      <button type='submit' className='form__button'>{data.button}{isLoading && '...'}</button>
      <div className='form__nav nav'>
        <p className='nav__title'>{data.navTitle}</p>
        <Link className='nav__link' to={data.navTo}>{data.navLink}</Link>
      </div>
    </form>
  )
}

export default SignForm