import './style.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const Item = ({item, buyFunc}) => {
    const {id, brand, model, img_url, price} = item;

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
          buyFunc();
      });
  }

    return (
        <Col sm={4} className='clmn'>
          <Card className='item'>
            <Card.Img variant="top" src={img_url} />
            <Card.Body>
                <Card.Title>{brand}</Card.Title>
                <Card.Text>{model}</Card.Text>
                <Card.Subtitle className="mb-2">{price}₽</Card.Subtitle>
                <Button variant="primary" onClick={() => addItem(id)}>Добавить в корзину</Button>
            </Card.Body>
          </Card>
        </Col>
      );
}

export {Item}