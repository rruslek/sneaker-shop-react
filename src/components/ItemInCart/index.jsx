import './style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemInCart = () => {
  return (
    <Card className='item-in-cart'>
      <Row>
        <Col sm={4}>
          <Card.Img variant="top" src="https://myreact.ru/wp-content/uploads/2020/08/e77d5cec8a0209c142b0b935e1f4989e-1.jpg" />
        </Col>
        <Col sm={7}>
          <Card.Body>
            <Row className='mt-5 pt-3'>
              <Col sm={8} className='me-auto'>
                <Card.Title>Nike</Card.Title>
                <Card.Text>Air Force 1</Card.Text>
                <Row className='mt-3'>
                <Col sm={1}>
                <Button className='plus-minus' variant="outline-dark">–</Button>
                </Col>
                <Col sm={1}>
                <h5>1</h5>
                </Col>
                <Col sm={1}>
                <Button className='plus-minus' variant="outline-dark">+</Button>
                </Col>
                </Row>
              </Col>
              <Col sm={3} className='ms-auto'>
                <Card.Subtitle className="mt-5 text-right"><h5>10000 ₽</h5></Card.Subtitle>
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export { ItemInCart }