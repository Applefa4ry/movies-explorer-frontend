import React from 'react'
import card1 from '../../images/card1.png'
import card2 from '../../images/card2.png'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

const MoviesCardList = () => {
  const CardData = [
    {
      nameRU: '33 слова о дизайне',
      duration: 107,
      image: card1
    },
    {
      nameRU: 'Киноальманах «100 лет дизайна»',
      duration: 63,
      image: card2
    },
    {
      nameRU: '33 слова о дизайне',
      duration: 107,
      image: card1
    },
    {
      nameRU: 'Киноальманах «100 лет дизайна»',
      duration: 63,
      image: card2
    },
    {
      nameRU: '33 слова о дизайне',
      duration: 107,
      image: card1
    },
]
  return (
    <section className='cards'>
      {CardData.map((data, i) => <MoviesCard key={i} data={data} />)}
    </section>
  )
}

export default MoviesCardList