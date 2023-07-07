import React from 'react';
//o import que tras a imagem do assets tendo em vista que precisamos trazela dessa forma, aqui e so isso pois vamos usar somente isso
import logoDnc from  "../../components/assets/logo.png";
import './index.scss';

const Header = () => {
    return <div className='header'>
        <img className='header__img' src={logoDnc} alt='logo-dnc' />
    </div>;
};

export default Header;