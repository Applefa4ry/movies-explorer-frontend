import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DarkThemeContext } from '../../context/DarkThemeContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css'
import PageNotFound from '../PageNotFound/PageNotFound';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useNavigate, Navigate } from 'react-router-dom';
import * as MainApi from '../../utils/MainApi'
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';

const App = () => {
  //const hour = new Date().toUTCString().split(" ")[4].split(":")[0];
  const [darkTheme, setDarkTheme] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const navigate = useNavigate();

  function handleChangeTheme(){
    darkTheme ? setDarkTheme(false):setDarkTheme(true);
  }

  React.useEffect(() => {
    handleTokenCheck();
  }, []);

  const handleTokenCheck = () => {
    if (localStorage.getItem('jwt')){
      const jwt = localStorage.getItem('jwt');
      MainApi.checkToken(jwt).then((res) => {
        if (res){
          setCurrentUser(res)
          setLoggedIn(true);
          navigate("/movies", {replace: true})
        }
      });
    }
  }

  const handleLogin = () => {
    handleTokenCheck();
    setLoggedIn(true);
  }

  const handleLogOut = () => {
    localStorage.removeItem('jwt')
    localStorage.removeItem('lastSearch')
    localStorage.removeItem('onlyShortFilms')
    setLoggedIn(false)
    navigate('/');
  }

  return (
    <DarkThemeContext.Provider value={darkTheme}>
      <CurrentUserContext.Provider value={currentUser}>
        <div className={`page ${darkTheme?'':'page_light'}`}>
          <Routes>
            <Route path="/" element={
              <>
                <Header loggedIn={loggedIn} handleChangeTheme={handleChangeTheme} />
                <Main />
                <Footer />
              </>
            } />
            <Route path="/movies" element={<ProtectedRouteElement loggedIn={loggedIn} element={
              <>
                <Header loggedIn={loggedIn} handleChangeTheme={handleChangeTheme} />
                <Movies />
                <Footer />
              </>
            } />} />
            <Route path="/saved-movies" element={<ProtectedRouteElement loggedIn={loggedIn} element={
              <>
                <Header loggedIn={loggedIn} handleChangeTheme={handleChangeTheme} />
                <SavedMovies />
                <Footer />
              </>
            } />} />
            <Route path="/profile" element={<ProtectedRouteElement loggedIn={loggedIn} element={
              <>
                <Header loggedIn={loggedIn} handleChangeTheme={handleChangeTheme} />
                <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} handleLogOut={handleLogOut} />
              </>
            } />} />
            <Route path="/signin" element={<Login handleChangeTheme={handleChangeTheme} handleLogin={handleLogin} />} />
            <Route path="/signup" element={<Register handleChangeTheme={handleChangeTheme} handleLogin={handleLogin} />} />
            <Route path="/*" element={loggedIn ? <Navigate to="/" replace /> : <PageNotFound />} />
          </Routes>
        </div>
      </CurrentUserContext.Provider>
    </DarkThemeContext.Provider>
  )
}

export default App
