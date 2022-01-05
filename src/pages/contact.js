import * as React from "react";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import Contact from "../components/Contact/Contact";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sumo Sushi — Wine and Beer</title>
      </Helmet>
      <Nav />
      <Hero url="/contact" />
      <Contact />
    </main>
  );
};

export default ContactPage;
