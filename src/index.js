import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import Products from './pages/Products';
import Clients from './pages/Clients';
import Caixa from './pages/Caixa';
import Fornecedores from './pages/Forneçedores';
import RelatorioProducts from './pages/relatorios/Products';



ReactDOM.render(
  <BrowserRouter>
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/caixa" element={<Caixa />} />
        <Route path='/fornecedores' element={<Fornecedores />} />
        <Route path='/relatorios/produtos' element={<RelatorioProducts />} />
        
      </Routes>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
