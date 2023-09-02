import React from 'react'
import { useNavigate } from "react-router-dom";
import './PageNotFound.css'

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <main className='page-not-found'>
      <h2 className='page-not-found__title'>
        404
      </h2>
      <p className='page-not-found__about'>
        Страница не найдена
      </p>
      <button onClick={() => navigate(-1)} className='page-not-found__back'>Назад</button>
    </main>
  )
}

export default PageNotFound