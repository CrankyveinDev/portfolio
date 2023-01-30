import React from 'react';
import "./HomeIMGStyles.css"
import HomeImage from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HomeIMG = () => {
  return (
    <div className="Hero">
        <div className="mask">
            <img src={HomeImage} alt="none" className="Introimage"/>
        </div>

        <div className="Content">
            <p>HI, I'M KAPIL DEV A PROGRAMMER AND</p>
            <h1>Full Stack {'\n'} Developer</h1>
            <div>
                <Link className='btn' to="/Projects">Projects</Link>
                <Link className='btn btn-light' to="/ContactUs">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HomeIMG;