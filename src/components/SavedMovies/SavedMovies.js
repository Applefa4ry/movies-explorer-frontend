import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

const SavedMovies = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <main className='content'>
      <SearchForm />
      {isLoading ? <Preloader /> : <MoviesCardList />}
    </main>
  )
}

export default SavedMovies