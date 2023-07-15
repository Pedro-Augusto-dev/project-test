import { Link } from "react-router-dom";
import "./index.scss"
import React from 'react'

const DetailProduct = ({ data }) => {
    console.log(data);
    return (
        <div className="product-detail">
            <div className="product-detail__left-side">
                <div className="product-detail__card">
                    <img src={data.imgPathDetail} alt={data.title} />
                    <p className="product-detail__cardP">{data.title}</p>
                    <div className="product-detail__description">
                        <h1>Descrição</h1>
                        <p>{data.title}</p>
                    </div>
                </div>
            </div>
            <div className="product-detail__right-side">
                <h1 className="product-detail__h1">Informações  Sobre o Produto</h1>
                <h2 className="product-detail__h2">{data.price}</h2>
                <p className="product-detail__Color">
                    Cor:{" "}
                    {data.colors.length === 1
                    ?  data.colors.map((color, index) => (
                        <span key={index}>{color}</span>
                    ))
                    : data.colors.map((color, index) => 
                        index + 1 === data.colors.length ? (
                            <span key={index}> {color} </span>
                        ): (
                            <span key={index}>{color}, </span>
                        )
                    )}
                </p>
                <div className="product-detail__box-colors">
                    {data.colors.map((color) => (
                        <div className="product-detail__box-detail"
                        style={{
                            width:"64px",
                            height: "60px",
                            borderRadius:"10px",
                            backgroundColor:color,
                        }}
                        ></div>
                    ))}
                </div>
                <p className="product-detail__P">Tamanho:</p>
                <div className="product-detail__box-sizes">
                    {data.sizes.map((size) => (
                        <span className="product-detail__span"
                            style={{
                                width: "55px",
                                height: "58px",
                                borderRadius: "10px",
                                border: "1px solid black",
                                textTransform: "uppercase",
                        }}
                        >
                            {size}
                        </span>
                    ))}
                </div>
                <button>
                    <Link to={`/pay/${data.id}`}>Finalizar Compra</Link>
                </button>
            </div>
        </div>
    )
}

export default DetailProduct;