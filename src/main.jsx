import React from 'react';
import ReactDOM from 'react-dom/client';
//o arquivo em sass que tras toda a estilização necessaria
import './index.scss';
//o import que faz as rotas funcionarem
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
//todas as rotas possives chamadas 
import Login from './views/Login/Login.jsx';
import Home from './views/Home/Home';
import Products from './views/Products/Products';
import Pay from './views/Pay/Pay';
//o arquivo responsavel por trazer as informações dos produtos
import { PRODUCTS_MOCK } from './mock/products.mock';
//aonde as rotas são criadas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, 
  },
  {
    path: "/home",
    element: <Home data={PRODUCTS_MOCK} />,
  },
  {
    path: "/products/:productId",
    element: <Products data={PRODUCTS_MOCK} />,
  },
  {
    path: "/pay/:payId",
    element: <Pay data={PRODUCTS_MOCK} />
  },
]);
//elemnto do creatRouter que transfere todas as rotas para o index.html principal
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
