import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Register.css'
import SignForm from '../SignForm/SignForm';
import * as MainApi from '../../utils/MainApi'

const Register = ({handleChangeTheme, handleLogin}) => {
  const [hasMistake, setHasMistake] = React.useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false)
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
    button: "Зарегистрироваться",
    navTitle: 'Уже зарегистрированы?',
    navTo: '/signin',
    navLink: 'Войти'
  }

  const handleSubmit = (e, formValue, setFormValue) => {
    e.preventDefault();
    console.log(formValue)
    if (!/^[-\w.]+@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,}$/.test(formValue.email) || !/^[a-zA-Zа-яА-Я\s-]{2,30}$/.test(formValue.name)) {
      throw new Error();
    }
    MainApi.register(formValue.name, formValue.email,formValue.password).then((res) => {
      setIsLoading(true)
      if(res){
        handleLogin()
        setHasMistake(false)
        navigate('/movies', {replace: true});
      }
      setFormValue({name: "", email:"", password:""})
    })
    .catch((err) => {
      setHasMistake(true)
      console.log(err);
    })
    .finally(() => {
      setIsLoading(false)
    });
  }
  return (
    <main className='register'>
      <SignForm isLoading={isLoading} onSubmit={handleSubmit} data={data} hasMistake={hasMistake} handleChangeTheme={handleChangeTheme} />
    </main>
  )
}

export default Register