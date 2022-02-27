import { Nav,Container, Navbar } from 'react-bootstrap';

export default  function Header(){
     return (
        <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Duas Rodas</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/products">Produtos </Nav.Link>
          <Nav.Link href="/clients">Clientes</Nav.Link>
          <Nav.Link href="/caixa">Caixa</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
     )
};

