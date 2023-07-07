import React from 'react'
import './index.scss';
//mais uma vez usamos a mesma forma de trazer as imagens porem agr trouxemos 3 imagens que precisamos para fazer o search
import search from "../../components/assets/search.png"
import person from "../../components/assets/person.png"
import head from "../../components/assets/head.png"

function Search() {
    return (
        <div className='search'>
        <div className='search__searchCont'>
            <div className='search__contImg'>
                <img htmlFor='search' className='search__img' src={search}/>
                <input id='search' className='search__input' placeholder='O que você está procurando?' />
            </div>
        </div>
        <div className='search__cont'>
            <img className='search__imgPadding' src={person} alt='person' />
            <img src={head} alt='head' />
        </div>
    </div>
    )
}

export default Search