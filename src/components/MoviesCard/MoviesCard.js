import React from 'react'
import { useLocation } from 'react-router-dom'
import { DarkThemeContext } from '../../context/DarkThemeContext'
import './MoviesCard.css'

const MoviesCard = ({data}) => {
  const location = useLocation();
  const isLiked = true;
  const darkTheme = React.useContext(DarkThemeContext);
  return (
    <figure className={`card ${darkTheme?'':'card_light'}`}>
      <img className='card__image' src={data.image} alt='card' />
      <figcaption className='card__about'>
        <h2 className={`card__title  ${darkTheme?'':'card__title_light'}`}>{data.nameRU}</h2>
        {location.pathname === '/movies' ? 
          <button className={`card__like ${isLiked && 'card__like_active'}`}></button> : 
          <button className='card__delete'></button>
        }
      </figcaption>
      <p className='card__duration'>{Math.floor(data.duration / 60) ? `${Math.floor(data.duration / 60)}ч ${data.duration % 60}м`:`${data.duration % 60}м`}</p>
    </figure>
  )
}

export default MoviesCard