import * as React from "react";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import WineMenu from "../components/WineMenu/WineMenu";

const WinePage = () => {
  return (
    <main>
      <Nav />
      <Hero url="/wine" />
      <WineMenu />
    </main>
  );
};

export default WinePage;
