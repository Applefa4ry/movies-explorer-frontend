import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { DarkThemeContext } from '../../context/DarkThemeContext'
import './MoviesCard.css'

const MoviesCard = ({film, onFilmLike, onFilmDelete, setFilms, setShortFilms, savedMovies}) => {
  const location = useLocation();
  const [isLiked, setIsLiked] = React.useState(savedMovies && savedMovies.find(sFilm => sFilm.movieId === film.id));
  const darkTheme = React.useContext(DarkThemeContext);
  function handleFilmLike(e){
    e.preventDefault()
    onFilmLike(film).then(res => setIsLiked(res))
  }
  
  function handleFilmDelete(e){
    e.preventDefault()
    onFilmDelete(film.id ? film.id : film, setFilms, setShortFilms)
  }

  return (
    <Link to={film.trailerLink} target='_blank' className={`card ${darkTheme?'':'card_light'}`}>
      <img className='card__image' src={film.image.url ? `https://api.nomoreparties.co/${film.image.url}` : `https://api.nomoreparties.co/${film.image.substr(44)}`} alt={film.image.name} />
      <figcaption className='card__about'>
        <h2 className={`card__title  ${darkTheme?'':'card__title_light'}`}>{film.nameRU}</h2>
        {location.pathname === '/movies' ? 
          <button onClick={handleFilmLike} className={`card__like ${isLiked && 'card__like_active'}`}></button> : 
          <button onClick={handleFilmDelete} className='card__delete'></button>
        }
      </figcaption>
      <p className='card__duration'>{Math.floor(film.duration / 60) ? `${Math.floor(film.duration / 60)}ч ${film.duration % 60}м`:`${film.duration % 60}м`}</p>
    </Link>
  )
}

export default MoviesCard