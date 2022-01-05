import * as React from "react";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import Contact from "../components/Contact/Contact";

const ContactPage = () => {
  return (
    <main>
      <Nav />
      <Hero url="/contact" />
      <Contact />
    </main>
  );
};

export default ContactPage;
