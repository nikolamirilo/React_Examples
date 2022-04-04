import React from "react";
import "./App.scss";
import { Test, Home, Contact, Error, Flex, Position, Grid, Practice } from "./pages";
import Layout from "./wrappers/Layout/Layout";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/grid" element={<Grid />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<Test />} />
          <Route path="/flex" element={<Flex />} />
          <Route path="/position" element={<Position />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
