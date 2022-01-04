import * as React from "react";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import Menu from "../components/Menu/Menu";

const MenuPage = () => {
  return (
    <main>
      <Nav />
      <Hero url="/menu" />
      <Menu />
    </main>
  );
};

export default MenuPage;
