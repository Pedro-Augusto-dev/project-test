import React from 'react';
import './index.scss';
//arquivos que seram usados na home headermenu e search, todos eles tem html e sass
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Search from '../../components/Search/Search';
//import Products from '../Products/Products';
import ProductsCard from '../../components/ProductsCard/ProductsCard';
//aqui e a pagina da home aonde tera o headeMenu e o search  
const Home = ({ data }) => {
    console.log(data);
    return (
    <div className='home'>
        <HeaderMenu />
        <Search />
        <div className='home__products'>
            {data.map((product) => (
                <ProductsCard key={product.id} data={product} />
            ))}
        </div>   
    </div>
    );
}

export default Home;