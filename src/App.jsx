// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext';
import { CartProvider } from './Context/CartContext';
import { AuthProvider } from './Context/AuthContext'; 
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Layout from './Components/Layout';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AuthProvider> 
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;