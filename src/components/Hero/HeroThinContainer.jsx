import styled from "styled-components";

const HeroThinContainer = styled.div`
  position: relative;
  top: -25%;
  width: 100%;
  transform: translateZ(-10px) scale(2);
  z-index: -1;
  height: 400px;

  img, .gatsby-image-wrapper > div[aria-hidden=true] {
    padding-top: 0 !important;
    height: 500px !important;
    filter: contrast(105%);
  }
`;

export default HeroThinContainer;
