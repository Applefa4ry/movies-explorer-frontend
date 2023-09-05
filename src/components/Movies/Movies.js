import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { DarkThemeContext } from '../../context/DarkThemeContext'
import { startDesktopFilms, startTabletFilms, startMobileFilms, moreDesktopFilms, moreTabletOrMobileFilms } from '../../constants/constants'
import * as MoviesApi from '../../utils/MoviesApi'
import * as MainApi from '../../utils/MainApi'
import './Movies.css'

const Movies = () => {
  const [isLoadingAll, setIsLoadingAll] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [serverError, setServerError] = React.useState(false)
  const [films, setFilms] = React.useState([]);
  const [shortFilms, setShortFilms] = React.useState([]);
  const [activeFilms, setActiveFilms] = React.useState([]);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [showButtonMore, setShowButtonMore] = React.useState(true);
  const [activeCheckbox, setActiveCheckbox] = React.useState(localStorage.getItem('onlyShortFilms') === 'true' ? true : false);
  const [savedMovies, setSavedMovies] = React.useState([])
  const darkTheme = React.useContext(DarkThemeContext);

  React.useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });

  React.useEffect(() => {
    MoviesApi.getStartFilms()
      .then(films => {
        setFilms(films)
        setShortFilms(MoviesApi.onlyShortMovie(films, true))
        setServerError(false)
      })
      .catch(() => setServerError(true))
      .finally(() => {
        setIsLoadingAll(false);
      })
    MainApi.getStartFilms()
      .then(res => setSavedMovies(res))
      .catch(err => console.log(err))
  }, []);

  React.useEffect(() => {
    if(!activeCheckbox){
      setActiveFilms(films.slice(0,startDesktopFilms));
      width <= 1279 && setActiveFilms(films.slice(0,startTabletFilms));
      width <= 767  && setActiveFilms(films.slice(0,startMobileFilms));
    } else{
      setActiveFilms(shortFilms.slice(0,startDesktopFilms));
      width <= 1279 && setActiveFilms(shortFilms.slice(0,startTabletFilms));
      width <= 767  && setActiveFilms(shortFilms.slice(0,startMobileFilms));
    }
  }, [films, activeCheckbox]);

  React.useEffect(() => {
    if(!activeCheckbox){
      activeFilms.length === films.length ? setShowButtonMore(false) : setShowButtonMore(true);
    } else{
      activeFilms.length === shortFilms.length ? setShowButtonMore(false) : setShowButtonMore(true);
    }
  }, [activeFilms]);

  const showMoreFilms = () => {
    if(!activeCheckbox){
      width >= 1280 ? setActiveFilms(films.slice(0, activeFilms.length + moreDesktopFilms)) : setActiveFilms(films.slice(0, activeFilms.length + moreTabletOrMobileFilms));
    } else{
      width >= 1280 ? setActiveFilms(shortFilms.slice(0, activeFilms.length + moreDesktopFilms)) : setActiveFilms(shortFilms.slice(0, activeFilms.length + moreTabletOrMobileFilms));
    }
    setIsLoading(false);
  }

  const handleSubmit = (event) => {
    event.target[0] && event.preventDefault();
    localStorage.setItem('lastSearch', event.target[0] ? event.target[0].value : event.target.form[0].value)
    MoviesApi.searchFilms(event.target[0] ? event.target[0].value : event.target.form[0].value)
      .then(films => {
        setFilms(films)
        setShortFilms(MoviesApi.onlyShortMovie(films, true))
      })
  }

  const handleFilmLike = (film) => {
    const isLiked = savedMovies.find(sFilm => sFilm.movieId === film.id)
    return !isLiked ? 
      MainApi.addFilm(film)
      .then(() => {
        MainApi.getStartFilms()
        .then(res => setSavedMovies(res))
        .catch(err => console.log(err))
        return true;
      })
      .catch(err => console.log(`Ошибка ${err}`))
      : 
      MainApi.deleteFilm(isLiked._id)
      .then(() => {
        MainApi.getStartFilms()
        .then(res => setSavedMovies(res))
        .catch(err => console.log(err))
        return false;
      })
      .catch(err => console.log(`Ошибка ${err}`))
  }

  return (
    <main className='content'>
      <SearchForm handleSubmit={handleSubmit} setShortFilms={setShortFilms} setFilms={setFilms} activeCheckbox={activeCheckbox} setActiveCheckbox={setActiveCheckbox} />
      {isLoadingAll ? <Preloader /> : (
        <>
          <MoviesCardList savedMovies={savedMovies} handleFilmLike={handleFilmLike} serverError={serverError} films={activeFilms} />
          {showButtonMore && (
            <>
              {isLoading ? <Preloader /> : 
              <button onClick={() => {
                setIsLoading(true);
                showMoreFilms();
              }} className={`button-download-more ${darkTheme?'':'button-download-more_light'}`}>Ещё</button>}
            </>
          )}
        </>
      )}
    </main>
  )
}

export default Movies