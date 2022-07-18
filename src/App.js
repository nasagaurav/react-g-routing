import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
}

function Header() {
  return (
    <header>
      <Link to="">Homepage</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Signup">Signup</Link>
      <Link to="/Cart">Cart</Link>
      <Link to="/Orders">Orders</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/Errorpage">Errorpage</Link>
    </header>
  );
}

Const Home=()=><div>Home</div>;
Const Login=()=><div>Login</div>;
Const Signup=()=><div>Signup</div>;
Const Cart=()=><div>Cart</div>;
Const Orders=()=><div>Orders</div>;
Const Profile=()=><div>Profile</div>;
Const Errorpage=()=><div>Errorpage</div>;
