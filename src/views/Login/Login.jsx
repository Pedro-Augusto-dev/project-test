import React from 'react'
import './index.scss';
//import link qeu usarmos pra fazer a transição de uma pagina para a outra atravez de um botão
import { Link } from 'react-router-dom';
//aqui esta o arquivo header que e simplesmente uma foto com a cor de fundo difetente, e logo apos os html com os inputs
import Header from '../../components/Header/Header';


const Login = () => {
    return (
    <section className='login'>
        <Header />
        <h1>Acesse com seu login ou cadastre-se!</h1>
        <p>você pode entrar com o seu CPF</p>
        <form>
            <div className='login__formCont'>
                <label htmlFor='name' className='login__label'>Digite seu CPF:</label>
                <input 
                id='name'
                placeholder='Nome completo' 
                type='text' 
                className='login__inputName'
                />
                <label htmlFor='password' className='login__label'>Senha:</label>
                <input 
                placeholder='**********' 
                type='password' 
                id='password'
                className='login__inputName'>
                </input>
            </div>
        </form>
        <div className='login__contButton'>
            <button className='login__button' type='submit'>
            <Link to={"/Home"}>entrar</Link>
            </button>
        </div>
        
    </section>
    
    );
};

export default Login;