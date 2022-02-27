import { Button, Table,Form } from "react-bootstrap"
import Header from "../components/Header"
import "../styles/Product.css"
import { useState } from "react"
import axios from 'axios'

export default function Caixa(){
    const [products, setProducts] = useState([])

    function showForm(){
        if (document.querySelector(".form").style.display == "block"){
            document.querySelector(".form").style.display = "none"
        }else{
          document.querySelector(".form").style.display = "block"  
        }
        if (document.querySelector(".table").style.display == "block"){
            document.querySelector(".table").style.display = "none"
        }

    }

    function showTable(){
        if (document.querySelector(".table").style.display == "block"){
            document.querySelector(".table").style.display = "none"
        }else{
          document.querySelector(".table").style.display = "block"  
        }
        if (document.querySelector(".form").style.display == "block"){
            document.querySelector(".form").style.display = "none"
        }
    }


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

function itemSelected(product_key, name, cost_price,sale_price,categories,quantities){
    console.log(product_key)
    document.getElementById('product_key').setAttribute('value',product_key);
    document.getElementById('name').setAttribute('value',name);
    document.getElementById('cost_price').setAttribute('value',cost_price);
    document.getElementById('sale_price').setAttribute('value',sale_price);
    document.getElementById('categories').setAttribute('value',categories);

    document.getElementById('quantities').setAttribute('value',quantities);
    document.getElementById('search-table').style.display = 'none'
}

    return (
        <div>
            <Header />
            

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
    <tr onClick={() => itemSelected(item.product_key, item.name, item.cost_price, item.sale_price, item.categories, item.quantities)}>
      <td >{item.product_key}</td>
      <td>{item.name}</td>
      <td>{item.cost_price}</td>
      <td>{item.sale_price}</td>
      <td><button >teste</button></td>
      <td>{item.categories}</td>
      <th>{item.quantities}</th>
    </tr>
    )}
    
  </tbody>
</Table>

        </div>
</div>
<div>
<div className="form-product ">
                <span>codigo</span>
                <input id="product_key" type="text"/>

                <span>descrição do produto do produto</span>
                <input id="name" type="text"/>

                <span>preço de custo do produto</span>
                <input id="cost_price" type="number"/>

                <span>preço de venda do produto </span>
                <input id="sale_price" type="number"/>

                <span>qantidade do produto</span>
                <input id="quantities" type="number"/>

                <input type='text' id="categories" />
                    
                    
             

                <Button >cadastrar</Button>
            </div>
</div>

            <div className="form none">
                <span>codigo</span>
                <input type="number"/>

                <span>nome do cliente</span>
                <input type="text"/>

                <span>CPF</span>
                <input type="number"/>

                <span>RG </span>
                <input type="numb	er"/>

                <span>rua</span>
                <input type="number"/>
                <span>bairro</span>
                <input type="number"/>
                <span>cidade</span>
                <input type="number"/>
                <span>estado</span>
                <input type="number"/>
                <span>rua</span>
                <input type="number"/>

                <select>
                    <option>categoria</option>
                </select>
                <select>
                    <option>marca</option>
                </select>

                <Button>cadastrar</Button>
            </div>


            <Table className=" table none" striped bordered hover>
  <thead>
    <tr>
      <th>codigo</th>
      <th>descrição</th>
      <th>preço de custo</th>
      <th>preço de venda</th>
      <th>marca</th>
      <th>categoria</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</Table>


        </div>
    )
}