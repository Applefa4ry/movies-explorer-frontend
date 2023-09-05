import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import SignForm from '../SignForm/SignForm';
import * as MainApi from '../../utils/MainApi'
import { emailRegex, loginCfg as data } from '../../constants/constants';


const Login = ({handleChangeTheme, handleLogin, setIsPass, setIsOpen}) => {
  const [hasMistake, setHasMistake] = React.useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = (e, formValue, setFormValue) => {
    e.preventDefault();
    console.log(formValue)
    if(!emailRegex.test(formValue.email)){
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