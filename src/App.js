import React from "react";
import "./App.css";
import { Test, Home, Contact, Error, Flex, Position } from "./pages";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
        <Route path="/flex" element={<Flex />} />
        <Route path="/position" element={<Position />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
