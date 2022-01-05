import * as React from "react";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import WineMenu from "../components/WineMenu/WineMenu";
import { Helmet } from "react-helmet";

const WinePage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sumo Sushi — Wine and Beer</title>
      </Helmet>
      <Nav />
      <Hero url="/wine" />
      <WineMenu />
    </main>
  );
};

export default WinePage;
