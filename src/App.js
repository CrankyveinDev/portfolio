import React from "react";
import About from "./Routes/About";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Project from "./Routes/Project";
import "./index.css"
import { Routes,Route } from "react-router-dom";


function App() {
  return (<>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/projects" element={<Project />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/contact" element={<Contact />} />
      </Routes>
  </>
  );
}

export default App;
