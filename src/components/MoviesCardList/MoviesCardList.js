import React from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'
import { DarkThemeContext } from '../../context/DarkThemeContext'
import './MoviesCardList.css'

const MoviesCardList = ({films, serverError, handleFilmLike, handleFilmDelete, setFilms, setShortFilms, savedMovies}) => {
  const darkTheme = React.useContext(DarkThemeContext)
  return (
    <section className={`cards ${!(films.length > 0) && `cards_error`}`}>
      {films.length > 0 ? films.map((film) => <MoviesCard savedMovies={savedMovies} setFilms={setFilms} setShortFilms={setShortFilms} onFilmLike={handleFilmLike} onFilmDelete={handleFilmDelete} key={film.id ? film.id : film.moveId} film={film} />) : 
        <p className={`cards__error ${darkTheme || 'cards__error_light'}`}>{serverError ?'Во время запроса произошла ошибка.\nВозможно, проблема с соединением или сервер недоступен.\nПодождите немного и попробуйте ещё раз':
          'Ничего не найдено'}
        </p>}
    </section>
  )
}

export default MoviesCardList