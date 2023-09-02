import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { DarkThemeContext } from '../../context/DarkThemeContext'
import './Movies.css'

const Movies = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const darkTheme = React.useContext(DarkThemeContext);
  return (
    <main className='content'>
      <SearchForm />
      {isLoading ? <Preloader /> : <MoviesCardList />}
      <button className={`button-download-more ${darkTheme?'':'button-download-more_light'}`}>Ещё</button>
    </main>
  )
}

export default Movies