import "./index.scss";


function Summary({ data }) {
    console.log(data)
    return (
        <div className="Pay__contRigh">
            <div className="Pay__Summary">
                <h1 className='Pay__h1'>Resumo do Pedido:</h1>
                <div className="Pay__summaryProduct">
                    <h1>Produtos (1):</h1>
                    <h2>{data.price}</h2>
                </div>
                <div className='Pay__border'></div>
                <div className='Pay__summaryTotal'>
                    <h1>Preço</h1>
                    <h2 className="Pay__Price">{data.price}</h2>
                </div>
            </div>  
        </div>   
    )
}

export default Summary;