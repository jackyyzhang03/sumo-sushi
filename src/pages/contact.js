import * as React from "react";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";

const ContactPage = () => {
  return (
    <main>
      <Nav />
      <Hero url="/contact" />
    </main>
  );
};

export default ContactPage;
