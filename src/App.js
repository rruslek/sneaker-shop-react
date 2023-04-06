import React, { useState, useEffect } from 'react';
import './App.css';
import { Main } from './pages/Main';
import { Cart } from './pages/Cart';
import { Header } from './components/Header';
import Col from 'react-bootstrap/Col';
import { Router, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState(null);

  useEffect(() => {
    getItems("asc", 'ALL', setItems);
    getItemsInCart(setCart);
  }, [])

  const changeSortFilters = (sort, type) => {
    getItems(sort, type, setItems);
  }

  const changeCart = () => {
    getItemsInCart(setCart);
  }

  return (
    <>
      <Header count={cart && cart.length > 0 ? cart[0].cart.count : 0} />
      <Routes>
        <Route path="/" element={<Main items={items} changeSortFilters={changeSortFilters} buyFunc={changeCart} />} />
        <Route path="/cart" element={<Cart cart={cart ? cart : null} changeCart={changeCart} />} />
      </Routes>
    </>
  )
}

export const getItems = async (sort, type, setItems) => {
  const response = await fetch(`http://localhost:8080/items?sortDir=${sort}&type=${type}`, {
      credentials: 'include',
      method: 'GET',
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      }
  });

  await response.json()
      .then(shoes => {
          setItems(shoes);
      });
}

export const getItemsInCart = async (setCart) => {
  const response = await fetch('http://localhost:8080/cart', {
    credentials: 'include',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })

  await response.json()
    .then(shoes => {
      setCart(shoes)
    })
}

export default App;