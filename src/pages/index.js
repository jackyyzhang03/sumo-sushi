import * as React from "react";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";

import "./index.css";

const IndexPage = () => {
  return (
    <main>
      <Nav />
      <Hero />
    </main>
  );
};

export default IndexPage;
