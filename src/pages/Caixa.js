import { Button, Table,Form } from "react-bootstrap"
import Header from "../components/Header"
import "../styles/Product.css"
import { useEffect, useState } from "react"
import axios from 'axios'
import '../styles/caixa.css'

export default function Caixa(){
    const [products, setProducts] = useState([])
    const [client, setClient] = useState([])
    const [table, setTable] = useState([])
    const [tableClients, setTableClients] = useState([])
    const [value, setValue] = useState(0)
    const [productid, setProductid] = useState([])
    const [clientid, setClientid]=  useState('')

    /*function showForm(){
        if (document.querySelector(".form").style.display == "block"){
            document.querySelector(".form").style.display = "none"
        }else{
          document.querySelector(".form").style.display = "block"  
        }
        if (document.querySelector(".table").style.display == "block"){
            document.querySelector(".table").style.display = "none"
        }

    }*/

   /* function showTable(){
        if (document.querySelector(".table").style.display == "block"){
            document.querySelector(".table").style.display = "none"
        }else{
          document.querySelector(".table").style.display = "block"  
        }
        if (document.querySelector(".form").style.display == "block"){
            document.querySelector(".form").style.display = "none"
        }
    }*/


   function search() {
const name = document.getElementById('search').value
if(name.length == 0){
    document.getElementById('search-table').style.display = 'none'
}else {
    document.getElementById('search-table').style.display = 'block'
}

        axios.get('http://localhost:3000/stock/search/'+name)
.then(function (response) {
  // handle success
  setProducts(response.data)
  console.log(response);
})
}



function searchClient() {
  const name = document.getElementById('search-client').value
  console.log(name)
  if(name.length == 0){
      document.getElementById('search-table-client').style.display = 'none'
  }else {
      document.getElementById('search-table-client').style.display = 'block'
  }
  
          axios.get('http://localhost:3000/clients/search/'+name)
  .then(function (response) {
    // handle success
    setClient(response.data)
    console.log(response);
  })

}

function itemSelected(id,product_key, name, cost_price,sale_price,categories,brand){
let a = <tr>
<td id="">{product_key}</td>
<td id="">{name}</td>
<td id="">{cost_price}</td>
<td id="">{sale_price}</td>
<td id="">{categories}</td>
<td id="">{brand}</td>
</tr>


  setTable([...table, a])
  setValue(value + sale_price)
  setProductid([...productid, id])
  
    document.getElementById('search-table').style.display = 'none'
}


function clientSelected(id,client_key, name, cpf,city,district,state,rg){

  let a = <tr>
  <td id="">{client_key}</td>
  <td id="">{name}</td>
  <td id="">{cpf}</td>
  <td id="">{rg}</td>
  <td id="">{city}</td>
  <td id="">{state}</td>
  </tr>
  
  
    setTableClients([...tableClients, a])
    setClientid(id)


  console.log(name)
  /*document.getElementById('client_key').setAttribute('value',client_key);
  document.getElementById('name-client').setAttribute('value', name);
  document.getElementById('cpf').setAttribute('value',cpf);
  document.getElementById('city').setAttribute('value',city);
  document.getElementById('district').setAttribute('value',district);

  document.getElementById('state').setAttribute('value',state);
  document.getElementById('rg').setAttribute('value',rg);**/
  document.getElementById('search-table-client').style.display = 'none'
}

function vender(){
axios.post('http://localhost:3000/seals',{
  product_id: productid,
  client_id: clientid,
  price: value
}).then(response =>{
  console.log(response)
})
}

    return (
        <div>
            <Header />
            
<h1>Produto</h1>
<div className=""> 
    <input id="search" onChange={search} placeholder="pesquisar"/>
    
        <div id="search-table" className=" seach-table none">




        <Table className=" table " striped bordered hover>
  <thead>
    <tr> 
      <th>codigo</th>
      <th>descrição</th>
      <th>preço de custo</th>
      <th>preço de venda</th>
      <th>marca</th>
      <th>categoria</th>
      <th>qantidade</th>
    </tr>
  </thead>
  <tbody>
    {products.map((item) =>
    <tr onClick={() => itemSelected(item.id,item.product_key, item.name, item.cost_price, item.sale_price, item.categories, item.brand)}>
      <td >{item.product_key}</td>
      <td>{item.name}</td>
      <td>{item.cost_price}</td>
      <td>{item.sale_price}</td>
      <td></td>
      <td>{item.categories}</td>
      <th>{item.quantities}</th>
    </tr>
    )}
    
  </tbody>
</Table>

</div>
</div>

<Table id="search-table-client none" className="search-table-client " striped bordered hover>
  <thead>
    <tr>
      <th>codigo</th>
      <th>nome</th>
      <th> preço de custo</th>
      <th>preço de venda </th>
      <th>categoria </th>
      <th>marca</th>
    </tr>
  </thead>
  <tbody>
    {table}
  </tbody>
</Table>



    <h1>Cliente</h1>

<input id="search-client" onChange={() => searchClient()} placeholder="pesquisar"/>


<Table id="search-table-client" className="search-table-client none" striped bordered hover>
  <thead>
    <tr>
      <th>codigo</th>
      <th>nome</th>
      <th> cpf</th>
      <th>cidade</th>
      <th>bairro</th>
      <th>estado</th>
    </tr>
  </thead>
  <tbody>
    {client.map((item) => 
    <tr key={item.id} onClick={() => clientSelected(item.id,item.client_key, item.name, item.cpf, item.city, item.district, item.state,item.rg)}>
      <td>{item.client_key}</td>
      <td>{item.name}</td>
      <td>{item.cpf}</td>
      <td>{item.city}</td>
      <td>{item.district}</td>
      <td>{item.state}</td>
    </tr>)}
    
  </tbody>
</Table>

           




            <Table id="search-table-client" className="search-table-client" striped bordered hover>
  <thead>
    <tr>
      <th>codigo</th>
      <th>nome</th>
      <th> cpf</th>
      <th>cidade</th>
      <th>bairro</th>
      <th>estado</th>
    </tr>
  </thead>
  <tbody>
    
    
   {tableClients}
    
  </tbody>
</Table>

<br />
<br />
<br />
<br />
<br />
<br />
<button onClick={vender} className="vender">vender</button>
<div id="value-total" className="value-total">
  Total <br/>
  R${value}
</div>

<div id="value-pago" className="value-pago">
<h3></h3>valor pago <br/>
<input type="number" />
  

</div>

<br />
<br />
<br /><br />
           

        </div>
    )
}