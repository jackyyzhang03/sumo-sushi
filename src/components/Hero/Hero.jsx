import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import HeroThinContainer from "./HeroThinContainer";
import HeroMain from "./HeroMain";

const Hero = (props) => {
  switch (props.url) {
    case "/menu":
      return (
        <HeroThinContainer>
          <StaticImage
            src="../../images/top-view-sushi-set-with-soy-sauce-chopsticks-wooden-serving-board.jpg"
            placeholder="blurred"
            alt=""
            layout="fullWidth"
          />
        </HeroThinContainer>
      );
    case "/wine":
      return (
        <HeroThinContainer>
          <StaticImage
            src="../../images/flat-lay-bottle-wine-surrounded-by-corks-red-grapes.jpg"
            placeholder="blurred"
            alt=""
            layout="fullWidth"
          />
        </HeroThinContainer>
      );
    case "/contact":
      return (
        <HeroThinContainer>
          <StaticImage
            src="../../images/sushi-set-with-various-types-sushi-wooden-desk-close-up-view.jpg"
            placeholder="blurred"
            alt=""
            layout="fullWidth"
          />
        </HeroThinContainer>
      );
    default:
      return <HeroMain />;
  }
};

export default Hero;
