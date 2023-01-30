import React, { useState } from "react";
import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import react1 from "../assets/react2.webp";
import react2 from "../assets/react1.jpg";

const AboutContent = () => {
  const text1 =
    "I am a Competitive Programmer, Full Stack Developer and software developer, specialising in the Web development arena. For the last few years, I have been developing web Apps using JavaScript programming languages and many Other frameworks based on that.";
  const text2 =
    " I’m currently a Pre-final year student at Delhi technological University. I’m hands on in all stages of the software development cycle, from planning and design to testing and deployment. No two days are the same for me; my tasks may involve analysing algorithms, altering code, fixing bugs, brainstorming ideas or integrating new systems.";
  console.log(text1);

  const [read, setRead] = useState(false);

  const toggleRead = () => {
    setRead(!read);
  };
  return (
    <div className="About-section">
      <div className="left">
        <h1>Who Am I?</h1>
        <p className="DetailsMe">
          {read ? text1 : text1 + ".."}
          <br className={read ? "true" : "nonee"} />
          {read ? text2 : ""}
          <button className="read-more" onClick={toggleRead}>
            {read ? "read less" : "read more"}
          </button>
        </p>
        <Link to="/ContactUs">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="image-container">
          <div className="image-stack top">
            <img src={react2} alt="none" />
          </div>
          <div className="image-stack bottom">
            <img src={react1} alt="none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
