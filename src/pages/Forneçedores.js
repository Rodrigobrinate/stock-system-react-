import { useEffect, useState } from "react"
import { Button, Table,Spinner } from "react-bootstrap"
import Header from "../components/Header"
import "../styles/Clients.css"
import axios from 'axios'

export default function Fornecedores(){
  const [states, setSatates] = useState([])
  const [district, setDistrict] = useState([])
  const [message, setMessage] = useState('')
  const [fornecedores, setfornecedores] = useState([])

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


    useEffect(() => {
      axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
.then(function (response) {
// handle success
setSatates(response.data)
console.log(response);
})
    }, []);

    function setdistrict(){
      
let state = document.getElementById('state').value

var index = state.indexOf(',')
state = state.substring(0, index)
axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`)
.then(function (response) {
// handle success
setDistrict(response.data)


console.log(response)
})
    }

function registerFornecedor(){
  console.log('teste')
  document.getElementById('spinner').style.display = "block"
  
  let name = document.getElementById('name').value 
  let cnpj = document.getElementById('cnpj').value 
 
  let district = document.getElementById('district').value 
  let adress = document.getElementById('address').value
  let state = document.getElementById('state').value
  let city = document.getElementById('city').value
  let phone = document.getElementById('phone').value
  let index = state.indexOf(',')
state = state.substring(index + 1)

axios.post('http://localhost:3000/fornecedores',{
  name: name,
  phone: phone,
  cnpj: cnpj,
  district: district,
  address: adress,
  state: state,
  city: city,
}).then(response => {
  if (response.status == 201){
    document.getElementById('spinner').style.display = "none"
      document.getElementById("alert").style.display = "block"
    setMessage('cliente cadastrado com secesso')
    document.getElementById("alert").style.backgroundColor = "#22f77a"
      setTimeout(() => {
        document.getElementById("alert").style.display = "none"
      }, 3000);
      document.getElementById('brand').value = ''
  }
})

}


useEffect(() => {
  axios.get('http://localhost:3000/fornecedores')
.then(function (response) {
// handle success
setfornecedores(response.data)
console.log(response);
})
}, []);


    return (
        <div>
            <Header />
            <div className="menu">

            <Button onClick={showForm}>cadastrar fornecedores</Button>
            <Button onClick={showTable}>listar fornecedores</Button>

            

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
            <div className="form none">
                
                <span>nome do fornecedor</span>
                <input type="text" id="name"/>

                <span>cnpj</span>
                <input type="number" id="cnpj"/>

                <span>telefone</span>
                <input type="number" id="phone"/>

                
                <span>bairro</span>
                <input type="text" id="district"/>
                <span>endereço</span>
                <input type="text" id="address"/>

                <select id="state" onChange={setdistrict}>
                    <option>estado</option>
                    {states.map((item) => 
                    <option data-id={item.nome} value={item.id + ","+item.nome}>{item.nome}</option>
                    )}
                </select>
                <select id="city">
                    <option>municipio</option>
                    {district.map((item) => 
                    <option value={item.nome}>{item.nome}</option>
                    )}
                    
                </select>

                <Button className="register" onClick={registerFornecedor}>cadastrar</Button>
            </div>


            <Table className=" table none" striped bordered hover>
  <thead>
    <tr>

      <th>Nome</th>
      <th>Telefone</th>
      <th>cnpj</th>

      <th>Endereço</th>
      <th>Cidade</th>
    </tr>
  </thead>
  <tbody>
    {fornecedores.map((item)=> 
     <tr>
      <td>{item.name}</td>
      <td>{item.phone}</td>
      <td>{item.cnpj}</td>

      <td>{item.district}</td>
      <td>{item.city}</td>
    </tr>
    )}
   
    
    
  </tbody>
</Table>


        </div>
    )
}