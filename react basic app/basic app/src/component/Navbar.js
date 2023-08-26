import React from 'react';
import './styles.css';

const Navbar = ({ onGetUsers }) => {
  return (
    <nav className="navbar">
      <div className="brand">Brand Name</div>
      <button onClick={onGetUsers}>Get Users</button>
    </nav>
  );
};

export default Navbar;
