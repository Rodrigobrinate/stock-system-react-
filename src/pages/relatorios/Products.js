import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import Header from "../../components/Header"

export default function RelatorioProducts(){
    const [product2, setProduct2] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/stock')
.then(function (response) {
  // handle success
  setProduct2(response.data)
  console.log(response);
})
      }, []);
    return (
        <div>
            <Header />
            <Table >
            <thead>
    <tr>
      <th>codigo</th>
      <th>descrição</th>
      <th>preço de custo</th>
      <th>preço de venda</th>
      <th>marca</th>
      <th>categoria</th>
      <th>localização</th>
      <th>Fornecedor</th>
    </tr>
  </thead>
  <tbody>
    {product2.map((item) => 
    <tr>
      <td>{item.stock_product_key}</td>
      <td>{item.stock_name}</td>
    <td>{"R$ "+item.stock_cost_price.toFixed(2).toString().replace(".", ",")}</td>
      <td>{"R$ "+item.stock_sale_price.toFixed(2).toString().replace(".", ",")}</td>
      <td>{item.brand_brand}</td>
      <td>{item.category_category}</td>
      <td>{item.stock_location}</td>
      <td>{item.fornecedores_name}</td>
    </tr>)}
   
  </tbody>
</Table>
        </div>
    )
}