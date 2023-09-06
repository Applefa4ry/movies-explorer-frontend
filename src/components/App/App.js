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
import InfoToolTip from '../InfoToolTip/InfoToolTip';

const App = () => {
  //const hour = new Date().toUTCString().split(" ")[4].split(":")[0];
  const [darkTheme, setDarkTheme] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(localStorage.getItem('jwt') ? true : false);
  const [isPass, setIsPass] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
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
        }
      })
      .catch(err => {
        setLoggedIn(false);
        navigate('/');
        console.log(err)
      });
    }
  }

  const handleLogin = () => {
    handleTokenCheck();
    navigate("/movies", {replace: true})
    setLoggedIn(true);
  }

  const handleLogOut = () => {
    localStorage.removeItem('jwt')
    localStorage.removeItem('lastSearch')
    localStorage.removeItem('onlyShortFilms')
    setLoggedIn(false)
    navigate('/');
  }

  const closePopup = () => {
    setIsOpen(false);
  }

  return (
    <DarkThemeContext.Provider value={darkTheme}>
      <CurrentUserContext.Provider value={currentUser}>
        <div className={`page ${darkTheme?'':'page_light'}`}>
          <InfoToolTip isPass={isPass} isOpen={isOpen} onClose={closePopup} />
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
                <Profile setIsPass={setIsPass} setIsOpen={setIsOpen} currentUser={currentUser} setCurrentUser={setCurrentUser} handleLogOut={handleLogOut} />
              </>
            } />} />
            <Route path="/signin" element={loggedIn ? <Navigate to='/' replace /> : <Login setIsPass={setIsPass} setIsOpen={setIsOpen}  handleChangeTheme={handleChangeTheme} handleLogin={handleLogin} />} />
            <Route path="/signup" element={loggedIn ? <Navigate to='/' replace /> : <Register setIsPass={setIsPass} setIsOpen={setIsOpen}  handleChangeTheme={handleChangeTheme} handleLogin={handleLogin} />} />
            <Route path="/*" element={loggedIn ? <Navigate to='/movies' replace /> :<PageNotFound />} />
          </Routes>
        </div>
      </CurrentUserContext.Provider>
    </DarkThemeContext.Provider>
  )
}

export default App
