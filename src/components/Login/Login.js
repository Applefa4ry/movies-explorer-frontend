import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import SignForm from '../SignForm/SignForm';
import * as MainApi from '../../utils/MainApi'


const Login = ({handleChangeTheme, handleLogin}) => {
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
    if(!formValue.email.match(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/)){
      throw new Error()
    }
    MainApi.authorize(formValue.email,formValue.password).then((res) => {
      setIsLoading(true)
      if(res){
        handleLogin();
        setHasMistake(false)
        navigate('/movies', {replace: true});
      }
      setFormValue({email:"", password:""})
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
    <main className='login'>
      <SignForm isLoading={isLoading} onSubmit={handleSubmit} data={data} hasMistake={hasMistake} handleChangeTheme={handleChangeTheme} />
    </main>
  )
}

export default Login