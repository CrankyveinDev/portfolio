import React from 'react'
import ResNavbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroIMG2 from "../Components/HeroImg2"
import AboutContent from "../Components/AboutContent";

const About = () => {
  return (
    <div>
      <ResNavbar/>
      <HeroIMG2 
        heading="About Me"
        para="I'm a Friendly Full Stack Developer."
      />
      <AboutContent />
      <Footer/>
    </div>
  )
}

export default About;