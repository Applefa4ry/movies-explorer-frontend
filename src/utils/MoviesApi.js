// https://api.explorer-applef4iry.nomoreparties.co
// https://api.nomoreparties.co/beatfilm-movies

export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies'

export const getResponseData = (res) => {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`); 
  }
  return res.json();
}

export const filterFilms = (films, name) => {
  return films.filter(film => film.nameRU.toLowerCase().includes(name.toLowerCase()) || film.nameEN.toLowerCase().includes(name.toLowerCase()));
}

export const onlyShortMovie = (films) => {
  return films.filter(film => film.duration <= 40)
}

export const getStartFilms = () => {
  return fetch(`${BASE_URL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(res => getResponseData(res))
    .then(films => {
      return filterFilms(films, localStorage.getItem('lastSearch') ? localStorage.getItem('lastSearch') : '')
    })
    .catch(err => console.log(err))
}

export const searchFilms = (search) => {
  return fetch(`${BASE_URL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(res => getResponseData(res))
    .then(films => filterFilms(films, search))
    .catch(err => console.log(err))
}

