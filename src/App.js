import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";


import Project from "./components/Projects/Projects";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";


import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/contact" element={<Contact/>}/>

          <Route path="/Education" element={<Education/>}/>

          <Route path="/Project" element={<Project/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
