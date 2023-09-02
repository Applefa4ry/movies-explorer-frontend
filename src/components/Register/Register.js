import React from 'react'
import './Register.css'
import SignForm from '../SignForm/SignForm';

const Register = ({handleChangeTheme}) => {
  const [hasMistake, setHasMistake] = React.useState(true);
  const data = {
    title: 'Добро пожаловать!',
    inputs: [
      {
        name: 'Имя',
        for: 'name',
        type: 'text'
      },
      {
        name: 'E-mail',
        for: 'email',
        type: 'email'
      },
    ],
    button: 'Зарегистрироваться',
    navTitle: 'Уже зарегистрированы?',
    navTo: '/signin',
    navLink: 'Войти'
  }
  return (
    <main className='register'>
      <SignForm data={data} hasMistake={hasMistake} handleChangeTheme={handleChangeTheme} />
    </main>
  )
}

export default Register