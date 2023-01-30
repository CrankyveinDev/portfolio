import React from "react";
import { useState } from "react";
import {Link,NavLink } from "react-router-dom";
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
        <h1>Kapil Dev</h1>
      </Link>
      <ul className={click?"Nav-menu mobile":"Nav-menu"}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Me</NavLink>
        </li>
      </ul>
      <div className="Hamburger" onClick={handleClick}>
        {click?(<FaTimes/>):(<FaBars/>)}
      </div>
    </div>
  );
};

export default Navbar;
