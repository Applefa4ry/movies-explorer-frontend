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

const App = () => {
  const hour = new Date().toUTCString().split(" ")[4].split(":")[0];
  const [darkTheme, setDarkTheme] = React.useState(true);
  function handleChangeTheme(){
    darkTheme ? setDarkTheme(false):setDarkTheme(true);
  }
  return (
    <DarkThemeContext.Provider value={darkTheme}>
      <div className={`page ${darkTheme?'':'page_light'}`}>
        <Routes>
          <Route path="/" element={
            <>
              <Header handleChangeTheme={handleChangeTheme} />
              <Main />
              <Footer />
            </>
          } />
          <Route path="/movies" element={
            <>
              <Header handleChangeTheme={handleChangeTheme} />
              <Movies />
              <Footer />
            </>
          } />
          <Route path="/saved-movies" element={
            <>
              <Header handleChangeTheme={handleChangeTheme} />
              <SavedMovies />
              <Footer />
            </>
          } />
          <Route path="/profile" element={
            <>
              <Header handleChangeTheme={handleChangeTheme} />
              <Profile />
            </>
          } />
          <Route path="/signin" element={<Login handleChangeTheme={handleChangeTheme} />} />
          <Route path="/signup" element={<Register handleChangeTheme={handleChangeTheme} />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
    </DarkThemeContext.Provider>
  )
}

export default App
