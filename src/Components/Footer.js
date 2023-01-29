import React from "react";
import "./FooterStyles.css";
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-cont">
        <div className="left">
          <div className="location">
            <FaHome size={28} className="icon Home" />
            <div>
              <p className="paraG">A-215/16 Prem Nagar</p>
              <p className="paraG">Delhi, India</p>
            </div>
          </div>
          <div size={28} className="phoneNo">
            <FaPhone className="icon Phone" />
            <p className="paraG">+91 70489-77151</p>
          </div>
          <div size={28} className="email">
            <FaMailBulk className="icon Mail" />
            <p className="paraG">Dev86440@gmail.com</p>
          </div>
        </div>
        <div className="right">
          <h4>Follow me on!</h4>
          <div className="rightcons">
            <a href="https://github.com//CrankyveinDev" rel="noreferrer" target="_blank">
              <FaGithub size={28} className="icons Github" />
            </a>
            <a href="https://www.linkedin.com/in/crankyvein/" rel="noreferrer" target="_blank">
              <FaLinkedin size={28} className="icons Linkedin" />
            </a>
            <a href="https://twitter.com/crankyvein_1" rel="noreferrer" target="_blank">
              <FaTwitter size={28} className=" icons Twitter" />
            </a>
            <a href="https://www.instagram.com/_k.a.p.i.l._/" rel="noreferrer" target="_blank">
              <FaInstagram size={28} className="icons Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
