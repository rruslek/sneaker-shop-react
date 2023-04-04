import './style.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = () => {
    return (
        <Card className='item'>
          <Card.Img variant="top" src="https://myreact.ru/wp-content/uploads/2020/08/e77d5cec8a0209c142b0b935e1f4989e-1.jpg" />
          <Card.Body>
              <Card.Title>Nike</Card.Title>
              <Card.Text>Air Force 1</Card.Text>
              <Card.Subtitle className="mb-2">10000 ₽</Card.Subtitle>
              <Button variant="primary">Добавить в корзину</Button>
          </Card.Body>
        </Card>
      );
}

export {Item}