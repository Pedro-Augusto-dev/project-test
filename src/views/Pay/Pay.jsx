import React from 'react'
import "./index.scss"
import Header from '../../components/Header/Header'
import { Link } from "react-router-dom";
import Summary from '../../components/Summary/Summary';
import { useParams } from 'react-router-dom';

const Pay = ({ data }) => {
    console.log(data)
    const { priceId } = useParams();
    const selectedPrice = data.find((price) => price.div == priceId)
    console.log(priceId);
return (
    <section className='Pay'>
    <div className='Pay__header'>
        <Header />
    </div>    
    <div className="Pay__Infos">    
        <div className="Pay__contLeft">
            <div className="Pay__contInputs">
                <div className="Pay__inputs">
                    <label>Nome:</label>
                    <input placeholder='Nome completo' />
                    <label>Endereço de entrega:</label>
                    <input placeholder='Endereço de dentrega' />
                </div>
            </div>
            <div className="Pay__payment">
                <ul>
                    <li>
                        <input type='checkbox' />
                        <h2 className='Pay__Checkbox'>Pix</h2>
                    </li>
                    <li>
                        <input type='checkbox' />
                        <h2 className='Pay__Checkbox'>Boleto</h2>
                    </li>
                    <li>
                        <input type='checkbox' />
                        <h2 className='Pay__Checkbox'>Cartão de Crédito</h2>
                    </li>
                </ul>
            </div>    
            <div className='Pay__payButton'>
                <button>
                    <Link to={'/home'}>Enviar Pedido</Link>
                </button>
            </div>
        </div>
            <div className="Pay__contRigh">
            <Summary data={selectedPrice}/>
            </div> 
        </div>
    </section>
    )
}
export default Pay;





































//import React, { Component } from 'react'

//export default class Pay extends Component {

    //state = {
        //count: 0,
        //text: "PEDRO É GOSTOSOOOOOO",
    //}

    //   componentDidMount
    //   componentDidUpdate
    //   componentWillUnmount


    //componentDidMount(){
        //console.log('ola mundo!');
    //}

    //componentDidUpdate(){

    //}

    //render() {
    //    return (
    //        <div>
    //            <h1>{this.props.title}</h1>
    //            <h1>{this.state.count}</h1>
     //           <h1>{this.state.text}</h1>
     //           <ul>
     //               {this.props.lista.map((fruta, index) => (
     //                   <div>
      //                  <li>{fruta}</li>
      //                  <li>{"item " + (index + 1) + " - " + fruta}</li>
      //                  </div>
       //             ))}
       //         </ul>
       //         <button 
        //            onClick= {() => 
       //                 {this.setState({text: "VC TEM DUVIDAS DISSO?"})
        //            }}
         //           >
         //           Muda o texto
         //       </button>
         //       <button onClick={() =>{this.setState({count: this.state.count +1})}}>aumeta o Numero</button>
//
         //       
         //   </div>
            
    //}
//}


