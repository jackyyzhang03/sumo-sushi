import * as React from "react";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import Menu from "../components/Menu/Menu";
import { Helmet } from "react-helmet";

const MenuPage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sumo Sushi — Menu</title>
      </Helmet>
      <Nav />
      <Hero url="/menu" />
      <Menu />
    </main>
  );
};

export default MenuPage;
