import styled from "styled-components";

const HeroThinContainer = styled.div`
  height: 380px;
  overflow: hidden;
  img, .gatsby-image-wrapper > div[aria-hidden=true] {
    padding-top: 0 !important;
    height: 380px !important;
    filter: contrast(105%);
  }
`;

export default HeroThinContainer;
