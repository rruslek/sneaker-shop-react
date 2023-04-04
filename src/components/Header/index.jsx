import './style.css';
import getCookie from './helpers.js'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { cities } from './config';

const Header = () => {
  
  const city = getCookie("city");
  const [text, setText] = useState(city || 'Город');


  const handleClick = (newCity) => {
    document.cookie=`city=${newCity}`
    setText(newCity);
  };

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Sneaker Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title={text} id="collasible-nav-dropdown">
                {cities.map(item => {
                  return <NavDropdown.Item key={item.id} onClick={() => handleClick(item.title)}>{item.title}</NavDropdown.Item>
                })}
                </NavDropdown>
              </Nav>
              <Button href='/cart' variant="outline-light">Корзина <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket2-fill" viewBox="0 0 16 16">
                <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z"></path>
                </svg>
                <span id="counter">1</span>
              </Button>{' '}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export {Header}