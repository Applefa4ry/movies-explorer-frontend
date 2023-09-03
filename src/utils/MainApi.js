export const BASE_URL = 'https://api.explorer-applef4iry.nomoreparties.co';

export const getResponseData = (res) => {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`); 
  }
  return res.json();
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password})
  })
  .then((response) => {
    return getResponseData(response);
  })
  .then((res) => {
    console.log(res)
    return res;
  })
  .catch((err) => console.log(err));
};
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((response => getResponseData(response)))
  .then((data) => {
    if (data){
      localStorage.setItem('jwt', data.token);
      return data;
    }
  })
  .catch(err => console.log(err))
};
export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(res => getResponseData(res))
  .then(data => data)
}

export const editProfile = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({name, email})
  })
  .then((response => getResponseData(response)))
  .then((data) => {
    if (data){
      return data;
    }
  })
  .catch(err => console.log(err))
}

export const filterFilms = (films, name) => {
  return films.filter(film => film.nameRU.toLowerCase().includes(name.toLowerCase()) || film.nameEN.toLowerCase().includes(name.toLowerCase()));
}

export const onlyShortMovie = (films) => {
  return films.filter(film => film.duration <= 40)
}

export const getStartFilms = () => {
  return fetch(`${BASE_URL}/movie`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    }
  })
    .then(res => getResponseData(res))
    .then(films => {
      return films
    })
    .catch(err => console.log(err))
}

export const searchFilms = (search) => {
  return fetch(`${BASE_URL}/movie`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    }
  })
    .then(res => getResponseData(res))
    .then(films => filterFilms(films, search))
    .catch(err => console.log(err))
}

export const addFilm = ({id, country, director, duration, year, description, image, trailerLink, nameRU, nameEN}) => {
  return fetch(`${BASE_URL}/movie`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({
      movieId: id,
      country,
      director, 
      duration, 
      year, 
      description, 
      image: `https://api.nomoreparties.co/beatfilm-movies${image.url}`, 
      trailerLink,
      nameRU, 
      nameEN, 
      thumbnail: `https://api.nomoreparties.co/beatfilm-movies${image.formats.thumbnail.url}`
    })
  })
  .then(res => getResponseData(res)) 
  .catch(err => console.log(err))   
}

export const deleteFilm = (id) => {
  return fetch(`${BASE_URL}/movie/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    }
  })
  .then(res => getResponseData(res))   
  .catch(err => console.log(err)) 
}