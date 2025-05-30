import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="Navbar">
<img
  src="/image.png"
  alt="Logo"
  className="Logo"
  style={{
    height: '100px',
    width: 'auto',
    border: '4px solid #fff',
    borderRadius: '10px',
    objectFit: 'contain'
  }}
  
/>

      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>Feature</li>
        <li>About</li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img src="/search-b.png" alt="search" />
      </div>

      <img src="/night.png" alt="Mode" className="toggle-icon" />

      <div>
        <img src="/cart.png" alt="Cart" className="toggle-icon"
        style={{height: '100px', width:'auto', objectFit:'contain'}} />
      </div>
    </div>
  );
}

export default Navbar;
