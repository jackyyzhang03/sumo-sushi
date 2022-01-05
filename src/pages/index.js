import * as React from "react";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <main>
      <Helmet htmlAttributes={{lang: "en",}}>
        <meta charSet="utf-8" />
        <title>Sumo Sushi — Home</title>
        <meta name="description" content="Best Sushi in Montreal" />
      </Helmet>
      <Nav />
      <Hero />
    </main>
  );
};

export default IndexPage;
