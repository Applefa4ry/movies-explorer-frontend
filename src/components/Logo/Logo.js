import React from 'react'
import { DarkThemeContext } from '../../context/DarkThemeContext';
import { useNavigate } from 'react-router-dom';
import './Logo.css'

const Logo = ({handleChangeTheme}) => {
  const [startTime, setStartTime] = React.useState(Date.now());
  const darkTheme = React.useContext(DarkThemeContext);
  const navigation = useNavigate();

  function handleMouseDown(){
    setStartTime(Date.now());
  }

  function handleMouseUp(){
    const endTime = Date.now();
    console.log(endTime - startTime);
    endTime - startTime > 300 ? handleChangeTheme() : navigation('/');
    setStartTime(endTime);
  }

  return (
    <button type='button' className={`logo ${darkTheme?'':'logo_light'}`} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
  )
}

export default Logo