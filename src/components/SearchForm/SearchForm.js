import React from 'react'
import { DarkThemeContext } from '../../context/DarkThemeContext'
import { useLocation } from 'react-router-dom'
import './SearchForm.css'

const SearchForm = ({setShortFilms, setFilms, activeCheckbox, setActiveCheckbox, handleSubmit}) => {
  const darkTheme = React.useContext(DarkThemeContext);
  const location = useLocation()

  return (
    <form onSubmit={handleSubmit} className={`search-form ${darkTheme?'':'search-form_light'}`}>
      <input defaultValue={location.pathname === '/movies' ? localStorage.getItem('lastSearch') : ''} className={`search-form__input ${darkTheme?'':'search-form__input_light'}`} placeholder='Фильм' />
      <button className={`search-form__submit ${darkTheme?'':'search-form__submit_light'}`} type='submit' />
      <input onChange={() => {
        activeCheckbox ? setActiveCheckbox(false) : setActiveCheckbox(true);
        activeCheckbox ? localStorage.setItem('onlyShortFilms', false) : localStorage.setItem('onlyShortFilms', true)
      }} defaultChecked={activeCheckbox} className={`search-form__checkbox ${darkTheme?'':'search-form__checkbox_light'}`} id='short-films' type='checkbox' />
      <label htmlFor='short-films' className={`search-form__label ${darkTheme?'':'search-form__label_light'}`}>Короткометражки</label>
    </form>
  )
}

export default SearchForm