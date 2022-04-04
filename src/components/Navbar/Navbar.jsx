import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/practice">Practice</Link>
      <Link to="/flex">Flex</Link>
      <Link to="/position">Position</Link>
      <Link to="/grid">Grid</Link>
    </div>
  );
};

export default Navbar;
