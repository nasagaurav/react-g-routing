import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<h1>homepage</h1>} />
        <Route path="login" element={<h1>login</h1>} />
        <Route path="signup" element={<h1>signup</h1>} />
        <Route path="cart" element={<h1>cart</h1>} />
        <Route path="orders" element={<h1>orders</h1>} />
        <Route path="profile" element={<h1>profile</h1>} />
        <Route path="errorpage" element={<h1>errorpage</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

function Header() {
  return (
    <header>
      <Link to="">homepage</Link>
      <Link to="/login">login</Link>
      <Link to="/signup">signup</Link>
      <Link to="/cart">cart</Link>
      <Link to="/orders">orders</Link>
      <Link to="/profile">profile</Link>
      <Link to="/errorpage">errorpage</Link>
    </header>
  );
}
