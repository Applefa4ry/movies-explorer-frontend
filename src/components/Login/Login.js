import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import SignForm from '../SignForm/SignForm';
import * as MainApi from '../../utils/MainApi'


const Login = ({handleChangeTheme, handleLogin, setIsPass, setIsOpen}) => {
  const [hasMistake, setHasMistake] = React.useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false)
  
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

  const handleSubmit = (e, formValue, setFormValue) => {
    e.preventDefault();
    console.log(formValue)
    if(!/^[-\w.]+@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,}$/.test(formValue.email)){
      throw new Error()
    }
    MainApi.authorize(formValue.email,formValue.password).then((res) => {
      setIsLoading(true)
      if(res){
        handleLogin();
        setHasMistake(false)
        setFormValue({email:"", password:""})
        navigate('/movies', {replace: true});
      }
    })
    .catch((err) => {
      setIsPass(false)
      setIsOpen(true)
      setHasMistake(true)
      console.log(err);
    })
    .finally(() => {
      setIsLoading(false)
    });
  }

  return (
    <main className='login'>
      <SignForm isLoading={isLoading} onSubmit={handleSubmit} data={data} hasMistake={hasMistake} handleChangeTheme={handleChangeTheme} />
    </main>
  )
}

export default Login