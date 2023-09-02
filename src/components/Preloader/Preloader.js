import React from 'react'
import { DarkThemeContext } from '../../context/DarkThemeContext';
import './Preloader.css'

const Preloader = () => {
    const darkTheme = React.useContext(DarkThemeContext)
    return (
        <div className="preloader">
            <div className="preloader__container">
                <span className={`preloader__round ${darkTheme?'':'preloader__round_light'}`}></span>
            </div>
        </div>
    )
};

export default Preloader
