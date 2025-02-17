import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import logo from '../../../assets/logoprosox.png';
import Cartwidget from './Cartwidget';
import { Link } from 'react-router';

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" ><img className='logo-prosox' src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="color-navbar">Home</Nav.Link>
            <Nav.Link as={Link} to="/shop" className="color-navbar">Shop</Nav.Link>
            <Nav.Link as={Link} to="/category/shin-pads" className="color-navbar">Shin pads</Nav.Link>
            <Nav.Link as={Link} to="/category/accesories" className="color-navbar">Accesories</Nav.Link>
          </Nav>
          <Nav>
            <Link to="/cart"><Nav><Cartwidget /></Nav></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

