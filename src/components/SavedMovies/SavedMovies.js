import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import * as MainApi from '../../utils/MainApi'

const SavedMovies = () => {
  const [isLoadingAll, setIsLoadingAll] = React.useState(true);
  const [serverError, setServerError] = React.useState(false)
  const [films, setFilms] = React.useState([]);
  const [shortFilms, setShortFilms] = React.useState([]);
  const [activeFilms, setActiveFilms] = React.useState([]);
  const [activeCheckbox, setActiveCheckbox] = React.useState(localStorage.getItem('onlyShortFilms') === 'true' ? true : false);

  React.useEffect(() => {
    MainApi.getStartFilms()
      .then(films => {
        setFilms(films)
        setShortFilms(MainApi.onlyShortMovie(films, localStorage.getItem('onlyShortFilms') === 'true'))
        setServerError(false)
      })
      .catch(() => setServerError(true))
      .finally(() => {
        setIsLoadingAll(false);
      })
  }, []);

  React.useEffect(() => {
    if(!activeCheckbox){
      setActiveFilms(films);
    } else{
      setActiveFilms(shortFilms);
    }
  }, [films, activeCheckbox, shortFilms]);

  const handleSubmit = (event) => {
    event.preventDefault();
    MainApi.searchFilms(event.target[0].value)
      .then(films => {
        setFilms(films)
        setShortFilms(MainApi.onlyShortMovie(films, activeCheckbox))
      })
  }

  const handleFilmDelete = (film, setFilms, setShortFilms) => {
    MainApi.deleteFilm(film._id)
      .then(() => {
        setFilms(state => state.filter(c => c.movieId !== film.movieId));
        setShortFilms(state => state.filter(c => c.movieId !== film.movieId));
      })
      .catch(err => console.log(`Ошибка ${err}`))
  }

  return (
    <main className='content'>
      <SearchForm handleSubmit={handleSubmit} setShortFilms={setShortFilms} setFilms={setFilms} activeCheckbox={activeCheckbox} setActiveCheckbox={setActiveCheckbox} />
      {isLoadingAll ? <Preloader /> :  <MoviesCardList savedMovies={films}  setFilms={setFilms} setShortFilms={setShortFilms} handleFilmDelete={handleFilmDelete} serverError={serverError} films={activeFilms} />}
    </main>
  )
}

export default SavedMovies