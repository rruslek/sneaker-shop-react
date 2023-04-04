import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Item } from '../../components/Item';
import CardGroup from 'react-bootstrap/CardGroup';

const Main = () => {
    return (
        <Container>
            <Row>
                <Col sm={3} className='p-4 bg-white rounded-4 m-lg-3'>
                    <h4> Фильтр </h4>
                    <hr></hr>
                    <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
                        <Nav.Link className='nav-link' eventKey="link-1">Повседневные кроссовки</Nav.Link>
                        <Nav.Link className='nav-link' eventKey="link-2">Беговые кроссовки</Nav.Link>
                        <Nav.Link className='nav-link' eventKey="link-3">Низкие кеды</Nav.Link>
                        <Nav.Link className='nav-link' eventKey="link-4">Высокие кеды</Nav.Link>
                        <hr></hr>
                        <NavDropdown title="Сортировать" id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.1">по возрастанию</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2">по убыванию</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Col>
                <Col sm={8}>
                    <CardGroup>
                        <Item />
                        <Item />
                        <Item />
                    </CardGroup>
                    <CardGroup>
                        <Item />
                        <Item />
                        <Item />
                    </CardGroup>
                    <CardGroup>
                        <Item />
                        <Item />
                        <Item />
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    );
}

export { Main }