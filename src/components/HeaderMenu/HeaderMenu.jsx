import React from 'react'
import './index.scss';
//aqui usamos a mesma forma de trazer uma imagem inportando ela do assets, e já aproveitamos e fizemos com mais uma imagem
import logoDnc from "../../components/assets/logo.png"
import carrinho from "../../components/assets/carrinho.png"


function HeaderMenu() {
    return (
        <section className='menu'>
        <div className='menu__cont'>
        <img src={logoDnc} alt="LogoDnc" />
            <div className='menu__ulCont'>
                <ul className='menu__ul'> 
                    <li>Home</li>
                    <li>Novidade</li>
                    <li>Masculino</li>
                    <li>Feminino</li>
                    <li>Atendimento</li>
                </ul>
            </div>
                <div className='menu__meuCarrinho'>
                    <h1>Meu carrinho</h1>
                    <img className='menu__img'src={carrinho} alt='carrinho' />
                </div>
            </div>;
            </section>
    )
}

export default HeaderMenu