import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return;
  <BrowserRouter>
    <Routes>
      <Route path="" element={<h1>homepage</h1>} />
      <Route path="login" element={<h1>login</h1>} />
      <Route path="signup" element={<h1>signup</h1>} />
      <Route path="cart" element={<h1>cart</h1>} />
      <Route path="orders" element={<h1>orders</h1>} />
      <Route path="profile" element={<h1>profile</h1>} />
      <Route path="errorpage" element={<h1>errorpage</h1>} />
    </Routes>
  </BrowserRouter>;
}
