import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function NavScrollExample() {
  return (
    <Navbar bg="success" expand="lg" >
      <Container fluid>
        <Navbar.Brand href="home">Hacker News</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        {/* <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll>
            <NavDropdown title="Dropdown" id={`offcanvasNavbarDropdown-expand-md`}>
                <NavDropdown.Item href="/new">Date</NavDropdown.Item>
                <NavDropdown.Item href="/">Popularity</NavDropdown.Item>
            </NavDropdown>
        </Nav> */}
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />

            <Button variant='light'>Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default NavScrollExample;
 

