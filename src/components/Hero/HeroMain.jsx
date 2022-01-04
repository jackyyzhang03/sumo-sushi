import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ButtonLink from "./ButtonLink";
import HeroMainContainer from "./HeroMainContainer";

const HeroMain = () => {
  return (
    <HeroMainContainer>
      <StaticImage
        src="../../images/side-view-sushi-set-with-soy-sauce-chopsticks-wooden-serving-board.jpg"
        placeholder="blurred"
        backgroundColor="black"
        alt=""
      />
      <div className="hero-text">
        <h2>Welcome to</h2>
        <h1>Sumo Sushi</h1>
        <ButtonLink to="/menu">View Menu</ButtonLink>
      </div>
    </HeroMainContainer>
  );
};

export default HeroMain;
