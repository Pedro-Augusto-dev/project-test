import React from 'react'
import './index.scss';
import { Link } from 'react-router-dom';
import Products from '../../views/Products/Products';



function ProductsCard({data}) {
    console.log(data.title);
    return (
        <div className='Products'>
            <img className='Products__img' src={data.imgPath} alt='model' />
            <div className='Products__model'>
                <p>{data.title}</p>
                <button>
                    <Link to={`/Products/${data.id}`}>Comprar Look</Link>
                </button>
            </div>
        </div>
    );
};

export default ProductsCard