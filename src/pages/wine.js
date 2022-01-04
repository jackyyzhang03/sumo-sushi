import * as React from "react";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";

const WinePage = () => {
  return (
    <main>
      <Nav />
      <Hero url="/wine" />
    </main>
  );
};

export default WinePage;
