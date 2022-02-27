import { Button, Table } from "react-bootstrap"
import Header from "../components/Header"
import "../styles/Product.css"

export default function Clients(){

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
    return (
        <div>
            <Header />
            <div className="menu">

            <Button onClick={showForm}>cadastrar clientes</Button>
            <Button onClick={showTable}>listar clientes</Button>


    </div>
            <div className="form none">
                <span>codigo</span>
                <input type="number"/>

                <span>nome do cliente</span>
                <input type="text"/>

                <span>CPF</span>
                <input type="number"/>

                <span>RG </span>
                <input type="number"/>

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