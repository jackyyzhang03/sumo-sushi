import styled from "styled-components";
import MenuContainer from "../Menu/MenuContainer";

const WineMenuContainer = styled(MenuContainer)`
  hr {
    margin: 30px 0 30px 0;
  }
  .group {
    width: 70%;
    grid-column-gap: 0px;
  }

  h2 {
    text-align: center;
    font-family: "Nunito Sans";
    text-transform: uppercase;
  }
`;

export default WineMenuContainer;