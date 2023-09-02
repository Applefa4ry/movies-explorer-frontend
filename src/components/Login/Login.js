import React from 'react'
import './Login.css'
import SignForm from '../SignForm/SignForm';

const Login = ({handleChangeTheme}) => {
  const [hasMistake, setHasMistake] = React.useState(true);
  const data = {
    title:'Рады видеть!',
    inputs: [
      {
        name: 'E-mail',
        for: 'email',
        type: 'email'
      },
    ],
    button: 'Войти',
    navTitle: 'Ещё не зарегистрированы?',
    navTo: '/signup',
    navLink: 'Регистрация'
  }
  return (
    <main className='login'>
      <SignForm data={data} hasMistake={hasMistake} handleChangeTheme={handleChangeTheme} />
    </main>
  )
}

export default Login