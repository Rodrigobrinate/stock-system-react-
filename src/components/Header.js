import { Nav,Container, Navbar, Dropdown,  } from 'react-bootstrap';

export default  function Header(){
     return (
        <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Duas Rodas</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/products">Produtos </Nav.Link>
          <Nav.Link href="/clients">Clientes</Nav.Link>
          <Nav.Link href="/caixa">Caixa</Nav.Link>
          <Nav.Link href="/fornecedores">Fornecedores</Nav.Link>
          <Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic">
    Relatórios
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/relatorios/produtos">Produtos</Dropdown.Item>
    <Dropdown.Item href="#/action-2">clientes</Dropdown.Item>
    <Dropdown.Item href="#/action-3">vendas</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        </Nav>
        </Container>
      </Navbar>
     )
};

