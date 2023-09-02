import React from 'react'
import { DarkThemeContext } from '../../context/DarkThemeContext'
import './SearchForm.css'

const SearchForm = () => {
  const darkTheme = React.useContext(DarkThemeContext);
  return (
    <form className={`search-form ${darkTheme?'':'search-form_light'}`}>
      <input className={`search-form__input ${darkTheme?'':'search-form__input_light'}`} placeholder='Фильм' />
      <button className={`search-form__submit ${darkTheme?'':'search-form__submit_light'}`} type='submit' />
      <input className={`search-form__checkbox ${darkTheme?'':'search-form__checkbox_light'}`} id='short-films' type='checkbox' />
      <label htmlFor='short-films' className={`search-form__label ${darkTheme?'':'search-form__label_light'}`}>Короткометражки</label>
    </form>
  )
}

export default SearchForm