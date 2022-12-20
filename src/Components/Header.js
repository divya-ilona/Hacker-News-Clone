import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function Header() {
  return (
    <Navbar bg="success" expand="lg" >
      <Container fluid>
        <Navbar.Brand href="home">Hacker News</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
 
export default Header;
 

