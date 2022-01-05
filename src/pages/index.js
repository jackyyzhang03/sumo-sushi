import * as React from "react";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sumo Sushi — Home</title>
        <meta name="description" name="Best Sushi in Montreal" /> 
      </Helmet>
      <Nav />
      <Hero />
    </main>
  );
};

export default IndexPage;
