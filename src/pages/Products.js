import { Button, Table,Spinner } from "react-bootstrap"
import Header from "../components/Header"
import "../styles/Product.css"
import { useEffect, useState } from "react"
import axios from "axios"
//import { set } from "vue/types/umd"

export default function Products(){
  const [product, setProduct] = useState([])
  const [categories, setCategories] = useState([])
  const [brand, setBrand] = useState([])
  const [message, setMessage] = useState()
  const [alerttipe, setAlerttipe] =  useState()
  const [fornecedores, setFornecedores] = useState([])

    function showForm(){
      
           
        
        if (document.querySelector(".form-product").style.display == "block"){
            document.querySelector(".form-product").style.display = "none"
        }else{
          document.querySelector(".form-product").style.display = "block"  
          document.querySelector(".table").style.display = "none"
        document.querySelector(".from-category").style.display = "none"
        document.querySelector(".table-category").style.display = "none"
        document.querySelector(".form-brand").style.display = "none"
        document.querySelector(".table-brand").style.display = "none"
        }
     
        

    }

    function showTable(){

      axios.get('http://localhost:3000/stock')
      .then(response =>{
        setProduct(response.data)
      })
        if (document.querySelector(".table").style.display == "block"){
            document.querySelector(".table").style.display = "none"
        }else{
          document.querySelector(".table").style.display = "block"  
        }
        if (document.querySelector(".form-product").style.display == "block"){
            document.querySelector(".form-product").style.display = "none"
        }
  }

  function showFormCategory(){
    if (document.querySelector(".form-category").style.display == "block"){
      document.querySelector(".form-category").style.display = "none"
  }else{
    document.querySelector(".form-category").style.display = "block"  
  }
  }

  function showTableCategory(){
    if (document.querySelector(".table-category").style.display == "block"){
        document.querySelector(".table-category").style.display = "none"
    }else{
      document.querySelector(".table-category").style.display = "block"  
    }
    if (document.querySelector(".form-product").style.display == "block"){
        document.querySelector(".form-product").style.display = "none"
    }
  }

  function showFormBrand(){
    if (document.querySelector(".form-brand").style.display == "block"){
      document.querySelector(".form-brand").style.display = "none"
  }else{
    document.querySelector(".form-brand").style.display = "block"  
  }
  }

  function showTableBrand(){
    if (document.querySelector(".table-brand").style.display == "block"){
        document.querySelector(".table-brand").style.display = "none"
    }else{
      document.querySelector(".table-brand").style.display = "block"  
    }
    if (document.querySelector(".form-brand").style.display == "block"){
        document.querySelector(".form-brand").style.display = "none"
    }
  }
        useEffect(() => {
          axios.get('http://localhost:3000/stock')
  .then(function (response) {
    // handle success
    setProduct(response.data)
    console.log(response);
  })
        }, []);

        useEffect(() => {
          axios.get('http://localhost:3000/categories')
  .then(function (response) {
    // handle success
    setCategories(response.data)
    console.log(response);
  })
        }, []);


        useEffect(() => {
          axios.get('http://localhost:3000/brand')
  .then(function (response) {
    // handle success
    setBrand(response.data)
    console.log(response);
  })
        }, []);

        useEffect(() => {
          axios.get('http://localhost:3000/fornecedores')
  .then(function (response) {
    // handle success
    setFornecedores(response.data)
    console.log(response);
  })
        }, []);
        
      
function register(){
  document.getElementById('spinner').style.display = "block"

 
    
  let product_key =document.getElementById("product_key").value
  let name =       document.getElementById("name").value
  let cost_price = document.getElementById("cost_price").value
  let sale_price = document.getElementById("sale_price").value
  let quantities = document.getElementById("quantities").value
  let categories = document.getElementById("categories").value
  let brand =      document.getElementById("brand").value
  let location =   document.getElementById("location").value
  let fornecedores =  document.getElementById("fornecedores").value

  if(name == '' || product_key == '' || cost_price == '' || sale_price == '' || quantities == '' || categories == '' || brand == ''){
    document.getElementById("alert").style.display = "block"
    setMessage('preencha todos os campos')
    document.getElementById("alert").style.backgroundColor = "#f75b50"
    setTimeout(() => {
      document.getElementById("alert").style.display = "none"
    }, 3000);
    
    document.getElementById('spinner').style.display = "none"
  }else{

axios.post('http://localhost:3000/stock',{
  product_key: product_key,
  name: name,
  brand: {id: brand},
  cost_price: cost_price,
  sale_price: sale_price,
  location: location,
  quantities:quantities,
  category: {id: categories},
  fornecedores: { id: fornecedores },
}).then(response => {
  if (response.status == 201){
    document.getElementById("alert").style.display = "block"
    document.getElementById("spinner").style.display = "none"
    setMessage('produto cadastrado com sucesso ')
    document.getElementById("alert").style.backgroundColor = "#22f77a"
    setTimeout(() => {
      document.getElementById("alert").style.display = "none"
    }, 3000);

   
    document.getElementById("product_key").value = ''
    document.getElementById("name").value = ''
    document.getElementById("cost_price").value = ''
    document.getElementById("sale_price").value = ''
    document.getElementById("quantities").value = ''
    document.getElementById("categories").value = 'categoria'
    document.getElementById("brand").value =  'marca'
    document.getElementById("location").value = ''
    document.getElementById("fornecedores").value = 'fornecedores'


  }
})
}}

function registerCategory(){
  document.getElementById('spinner').style.display = "block"
  const category = document.getElementById('category').value
  if(category == ''){
    document.getElementById("alert").style.display = "block"
    
    

    setMessage('a categoria n??o pode ser vazio')
    document.getElementById("alert").style.backgroundColor = "#f75b50"
    setTimeout(() => {
      document.getElementById("alert").style.display = "none"
    }, 3000);
    
    document.getElementById('spinner').style.display = "none"
  }else{

  
  axios.post('http://localhost:3000/categories',{
    category:category,
  }).then(response => {
    if(response.status == 201){
      document.getElementById('spinner').style.display = "none"
      document.getElementById("alert").style.display = "block"
      setMessage("categoria cadastrada com sucesso")
      document.getElementById("alert").style.backgroundColor = "#22f77a"
      setTimeout(() => {
        document.getElementById("alert").style.display = "none"
      }, 3000);
      document.getElementById('category').value = ''
    }}
    )
}}

function registerBrand(){

document.getElementById('spinner').style.display = "block"
  const brand = document.getElementById('brand-register').value
  console.log(brand)
  if(brand == ''){
    document.getElementById("alert").style.display = "block"
    document.getElementById('spinner').style.display = "none"
    setMessage('a marca n??o pode ser vazio')
    document.getElementById("alert").style.backgroundColor = "#f75b50"
    setTimeout(() => {
      document.getElementById("alert").style.display = "none"
    }, 3000);
    document.getElementById('spinner').style.display = "none"
  }else{

  
  axios.post('http://localhost:3000/brand',{
    brand:brand,
  }).then(response => {
    if(response.status == 201){
      document.getElementById('spinner').style.display = "none"
      document.getElementById("alert").style.display = "block"
      setMessage("marca cadastrada com sucesso")
      document.getElementById("alert").style.backgroundColor = "#22f77a"
      setTimeout(() => {
        document.getElementById("alert").style.display = "none"
      }, 3000);
      document.getElementById('brand-register').value = ''
    }}
    )
}}


  
    return (
        <div>
            <Header />

            
            <div className="menu">

            <Button onClick={showForm}>cadastrar produtos</Button>
            <Button onClick={showTable}>listar produtos</Button>
            <Button onClick={showFormCategory}>cadastrar categoria</Button>
            <Button onClick={showTableCategory}>listar categoria</Button>
            <Button onClick={showFormBrand}>cadastrar marca</Button>
            <Button onClick={showTableBrand}>listar marcas</Button>


    </div>

    <Spinner
    id="spinner"
    className="spinner none"
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    <div id="alert" className="alert none">{message}</div>
            <div className="form-product none">
                <span>codigo</span>
                <input id="product_key" type="text"/>

                <span>descri????o do produto do produto</span>
                <input id="name" type="text"/>

                <span style={{display: 'inline-block'}}>pre??o de custo do produto</span>
                <input id="cost_price" type="number"/>

                <span>pre??o de venda do produto </span>
                <input id="sale_price" type="number"/>

                <span>qantidade do produto</span>
                <input id="quantities" type="number"/>
                <span>localiza????o do produto</span>
                <input type="text" id="location" />

                <select id="categories"><option value='' selected>categoria</option>
                  {categories.map((item) => 
                  <option value={item.id}>{item.category}</option>
                  )}
                    
                </select>
                <select id="brand">
                    <option selected value=''>marca</option>
                    {brand.map((item) => 
                  <option value={item.id} >{item.brand}</option>
                  )}
                </select>
                <select id="fornecedores">
                    <option selected value=''>Fornecedores</option>
                    {fornecedores.map((item) => 
                  <option value={item.id} >{item.name}</option>
                  )}
                </select>

                <Button onClick={register}>cadastrar</Button>
            </div>

            <Table className=" table none" striped bordered hover>
  <thead>
    <tr>
      <th>codigo</th>
      <th>descri????o</th>
      <th>pre??o de custo</th>
      <th>pre??o de venda</th>
      <th>marca</th>
      <th>categoria</th>
      <th>localiza????o</th>
      <th>Fornecedor</th>
    </tr>
  </thead>
  <tbody>
    {product.map((item) => 
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


            


<div className="form-category none">
  <span>categoria</span>
  <input type="text" id="category" />
  &nbsp; <Button onClick={registerCategory}>cadastrar</Button>
</div>

<Table className="table-category none" striped bordered hover>
  <thead>
    <tr>
      <th>categorias</th>
     
    </tr>
  </thead>
  <tbody>
    {categories.map((item) =>
    <tr>
      <td>{item.category}</td>
    
    </tr>
    )}
    
  </tbody>
</Table>





<div className="form-brand none">
  <span>marca</span>
  <input id="brand-register" type="text" />
  &nbsp; <Button onClick={registerBrand}>cadastrar</Button>
</div>

<Table className="table-brand none" striped bordered hover>
  <thead>
    <tr>
      <th>marcas</th>
     
    </tr>
  </thead>
  <tbody>
    {brand.map((item) =>
    <tr>
      <td>{item.brand}</td>
    
    </tr>
    )}
    
  </tbody>
</Table>


        </div>
    )
}