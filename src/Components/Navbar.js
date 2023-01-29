import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import {FaBars,FaTimes} from "react-icons/fa"

const Navbar = () => {
  const [click,setClick]=useState(false);
  const handleClick=()=>setClick(!click);
  const [color,setColor]=useState(false);
  const changeColor=()=>{
    if(window.scrollY>60){
      setColor(true);
    }else{
      setColor(false);
    }
  }


  window.addEventListener("scroll",changeColor);
  return (
    <div className={color?"Header bg":"Header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click?"Nav-menu active":"Nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/AboutMe">About Me</Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact Me</Link>
        </li>
      </ul>
      <div className="Hamburger" onClick={handleClick}>
        {click?(<FaTimes/>):(<FaBars/>)}
      </div>
    </div>
  );
};

export default Navbar;
