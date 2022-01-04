import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ButtonLink from "./ButtonLink";
import HeroContainer from "./HeroContainer";

const Hero = () => {
  return (
    <HeroContainer>
      <StaticImage
        src="../../images/side-view-sushi-set-with-soy-sauce-chopsticks-wooden-serving-board.jpg"
        placeholder="blurred"
        backgroundColor="black"
      />
      <div className="hero-text">
        <h2>Welcome to</h2>
        <h1>Sumo Sushi</h1>
        <ButtonLink to="/menu">View Menu</ButtonLink>
      </div>
    </HeroContainer>
  );
};

export default Hero;
