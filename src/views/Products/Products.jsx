import React from 'react';
import './index.scss';
import Search from '../../components/Search/Search';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import { useParams } from 'react-router-dom';

import DetailProduct from '../../components/DetailsProduct/DetailsProduct';

const Products = ({ data }) => {
    const { productId } = useParams();
    const selectedProducts = data.find((product) => product.id == productId)
    console.log(selectedProducts);
    return (<div className='products'>
        <HeaderMenu />
        <Search />
        <DetailProduct data={selectedProducts}/>
        



    </div>
    );
};

export default Products;