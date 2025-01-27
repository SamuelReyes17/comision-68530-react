import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import logo from '../assets/logoprosox.png'
import Cartwidget from './Cartwidget';

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary custom-navbar">
      <Container>
        <Navbar.Brand href="#home" ><img className='logo-prosox' src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="color-navbar">Home</Nav.Link>
            <Nav.Link href="#shop" className="color-navbar">Shop</Nav.Link>
            <Nav.Link href="#story" className="color-navbar">Our Story</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link><Cartwidget/></Nav.Link>
            <Nav.Link><img width="25" height="25" src="https://img.icons8.com/parakeet-line/48/user.png" alt="shopping-bag--v1"/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

