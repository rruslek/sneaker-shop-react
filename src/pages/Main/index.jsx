import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Item } from '../../components/Item';
import { useState } from 'react';

const Main = ({items, changeSortFilters, buyFunc}) => {
    const [sortMethod, setMethod] = useState('asc');
    const [shoesType, setType] = useState('ALL');

    const sortAndFilter = (method, typeShoes) => {
        setMethod(method);
        setType(typeShoes);
        changeSortFilters(method, typeShoes)
    }

    return (
        <Container>
            <Row>
                <Col sm={3} className='p-4 bg-white rounded-4 m-lg-3'>
                    <h4> Фильтр </h4>
                    <hr></hr>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Link className='nav-link' onClick={() => sortAndFilter(sortMethod, 'ALL')}>Вся обувь</Nav.Link>
                        <Nav.Link className='nav-link' onClick={() => sortAndFilter(sortMethod, 'CASUAL')}>Повседневные кроссовки</Nav.Link>
                        <Nav.Link className='nav-link' onClick={() => sortAndFilter(sortMethod, 'RUNNING')}>Беговые кроссовки</Nav.Link>
                        <Nav.Link className='nav-link' onClick={() => sortAndFilter(sortMethod, 'LOW')}>Низкие кеды</Nav.Link>
                        <Nav.Link className='nav-link' onClick={() => sortAndFilter(sortMethod, 'HIGH')}>Высокие кеды</Nav.Link>
                        <hr></hr>
                        <NavDropdown title="Сортировать" id="nav-dropdown">
                            <NavDropdown.Item onClick={() => sortAndFilter('asc', shoesType)}>по возрастанию</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => sortAndFilter('desc', shoesType)}>по убыванию</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Col>
                <Col sm={8}>
                    <Row>
                        {items.map(item => {
                            return <Item key={item.id} item={item} buyFunc={buyFunc}>{item.title}</Item>
                        })}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export { Main }