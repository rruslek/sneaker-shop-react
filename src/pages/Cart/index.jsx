import { CardGroup, Col } from 'react-bootstrap';
import './style.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { ItemInCart } from '../../components/ItemInCart';

const Cart = () => {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <ItemInCart/>
          <ItemInCart/>
          <ItemInCart/>
          <ItemInCart/>
          <ItemInCart/>
        </Col>
        <Col sm={3} className='p-4 bg-white rounded-4 m-lg-3 justify-content-md-center'>
          <h4>Оформление заказа</h4>
          <hr></hr>
          <span className="mb-5">5 товар(ов) на сумму 100000 ₽</span>
          <Form.Control className="mt-5" type="promo" placeholder="Промокод" />
          <Row className="mt-3">
            <Col sm={6}>
              <h5>Итого</h5>
            </Col>
            <Col sm={5}>
              <h5>100000 ₽</h5>
            </Col>
          </Row>
          <Button className="mt-2" variant="primary">Оформить заказ</Button>
        </Col>
      </Row>
    </Container>
  );
}

export { Cart }