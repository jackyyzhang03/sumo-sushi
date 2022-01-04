import styled from "styled-components";

const HeroContainer = styled.div`
  font-family: "Nunito Sans";
  height: 100vh;
  width: 100vw;

  img {
    height: 100vh !important;
    width: 100vw !important;
    object-fit: cover !important;
    filter: brightness(40%) contrast(110%);
  }

  .hero-text {
    position: absolute;
    top: 25%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    position: absolute;
    width: fit-content;
  }

  h1,
  h2 {
    color: white;
    display: block;
  }

  h2 {
    font-family: Satisfy;
    font-size: 42px;
    margin: 0 auto -90px auto;
  }

  h1 {
    font-size: 110px;
  }

  h1::after {
    display: block;
    content: "";
    width: 100%;
    height: 3px;
    background-color: white;
  }
`;

export default HeroContainer;
