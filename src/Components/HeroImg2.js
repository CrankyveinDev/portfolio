import React from 'react';
import "./HeroIMG2Styles.css"

const HeroImg2 = (props) => {
  return (
    <div className="hero2">
        <div className="heading">
            <div>{props.heading}</div>
            <p>{props.para}</p>
        </div>
    </div>
  )
}

export default HeroImg2;