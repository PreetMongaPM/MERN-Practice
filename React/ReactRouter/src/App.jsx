import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/NotFound">Where is</Link>
        
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element=<Welcome />></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
