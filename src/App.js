import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
} from 'react-router-dom';

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
        <Route path="Profile/:profileid" element={<Profile />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
}

function Header() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    let pageName = e.target.innerHTML;
    let fullPath = '/' + pageName;
    navigate(fullPath);
  };
  return (
    <header>
      <Link to="">Homepage</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Signup">Signup</Link>
      <Link to="/Cart">Cart</Link>
      <Link to="/Orders">Orders</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/Profile/1">Profile-1</Link>
      <Link to="/Profile/2">Profile-2</Link>
      <Link to="/Profile/3">Profile-3</Link>
      <Link to="/Profile/4">Profile-4</Link>
      <Link to="/Profile/5">Profile-5</Link>

      <button onClick={handleClick}>Homepage</button>
      <button onClick={handleClick}>Login</button>
      <button onClick={handleClick}>signup</button>
      <button onClick={handleClick}>Cart</button>
      <button onClick={handleClick}>Orders</button>
      <button onClick={handleClick}>Profile</button>
    </header>
  );
}

const Home = () => <div>Home</div>;
const Login = () => <div>Login</div>;
const Signup = () => <div>Signup</div>;
const Cart = () => <div>Cart</div>;
const Orders = () => <div>Orders</div>;
const Profile = () => <div>Profile</div>;
const Errorpage = () => <div>Errorpage</div>;
