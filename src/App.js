import React from 'react';
import './App.css';
import { Main } from './pages/Main';
import { Cart } from './pages/Cart';
import { Header } from './components/Header';
import Col from 'react-bootstrap/Col';
import { Router, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
class App extends React.Component {
    render() {
      return (
        <>
            <Header />
            <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/cart" element={<Cart/>} />
            </Routes>
        </>
      );
    }
  }

export default App;