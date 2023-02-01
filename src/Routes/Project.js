import React from 'react'
import ResNavbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroIMG2 from "../Components/HeroImg2";
import Work from "../Components/Work";

const Project = () => {
  return (
    <div>
      <ResNavbar/>
      <HeroIMG2  heading="Projects" 
        para="Here are some of my recent work."
      />
      <Work card="WorkData"/>
      <Footer/>
    </div>
  )
}

export default Project;