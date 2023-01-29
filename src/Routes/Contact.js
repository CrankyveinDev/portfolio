import React from "react";
import ResNavbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroIMG2 from "../Components/HeroImg2"
import Form from "../Components/Form";
const Contact = () => {
  return (
    <div>
      <ResNavbar />
      <HeroIMG2 
        heading="Contact Me"
        para="Lets Have a Chat."
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
