import React from "react";
import About from "./Routes/About";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import "./index.css"
import { Routes,Route } from "react-router-dom";
import Project from "./Routes/Project";
function App() {
  return (<>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/Projects" element={<Project />} />
        <Route path ="/AboutMe" element={<About />} />
        <Route path ="/ContactUs" element={<Contact />} />
      </Routes>
  </>
  );
}

export default App;
