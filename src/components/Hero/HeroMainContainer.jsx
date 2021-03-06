import styled from "styled-components";

const HeroMainContainer = styled.div`
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
    top: 30%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    position: absolute;
    max-width: fit-content;
    width: 80%;
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
    animation: fade 2s ease, slide-up 1.5s ease;
  }

  h1 {
    font-size: 110px;
    animation: fade 2.5s ease, slide-up 2s ease;
  }

  h1::after {
    display: block;
    content: "";
    width: 100%;
    height: 3px;
    background-color: white;
  }

  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 26px;
      margin: 0 auto -42px auto;
    }
    h1 {
      font-size: 72px;
      line-height: 1;
    }
    h1::after {
      margin-top: 24px;
    }
  }

  @media only screen and (max-height: 550px) {
    .hero-text {
      display: none;
    }
  }
`;

export default HeroMainContainer;
