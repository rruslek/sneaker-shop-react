import './style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemInCart = ({ item, changeCart }) => {
  const { id, brand, model, img_url, price } = item.item;
  const { count } = item;

  const addItem = async (id) => {
    const response = await fetch(`http://localhost:8080/cart/add/${id}`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    });

    await response.json()
      .then(shoes => {
        changeCart();
      });
  }

  const deleteItem = async (id) => {
    const response = await fetch(`http://localhost:8080/cart/${id}`, {
      credentials: 'include',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    });

    await response.json()
      .then(shoes => {
        changeCart();
      });
  }


  return (
    <Card className='item-in-cart'>
      <Row>
        <Col sm={4}>
          <Card.Img variant="top" src={img_url} />
        </Col>
        <Col sm={7}>
          <Card.Body>
            <Row className='mt-5 pt-3'>
              <Col sm={8} className='me-auto'>
                <Card.Title>{brand}</Card.Title>
                <Card.Text>{model}</Card.Text>
                <Row className='mt-3'>
                  <Col sm={1}>
                    <Button onClick={() => deleteItem(id)} className='plus-minus' variant="outline-dark">–</Button>
                  </Col>
                  <Col sm={1}>
                    <h5>{count}</h5>
                  </Col>
                  <Col sm={1}>
                    <Button onClick={() => addItem(id)} className='plus-minus' variant="outline-dark">+</Button>
                  </Col>
                </Row>
              </Col>
              <Col sm={3} className='ms-auto'>
                <Card.Subtitle className="mt-5 text-right"><h5>{price} ₽</h5></Card.Subtitle>
              </Col>
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export { ItemInCart }