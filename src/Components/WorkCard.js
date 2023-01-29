import React from "react";
import "./WorkCardStyles.css";
import { useState } from "react";

const WorkCard = (props) => {
  const [read, setRead] = useState(false);

  const toggleRead = () => {
    setRead(!read);
  };

  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="img" />
      <h2 className="Pro-Title">{props.title}</h2>
      <div className="proDetails">
        <p>
          {read ? props.description : props.description.substr(0, 220) + "..."}
          <button className="read-more" onClick={toggleRead}>
            {read ? "read less" : "read more"}
          </button>
        </p>
      </div>
      <div className="ProButtons">
        <a className="btn" href={props.view} rel="noreferrer" target="_blank">
          VIEW
        </a>
        <a className="btn" href={props.source} rel="noreferrer" target="_blank">
          SOURCE
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
