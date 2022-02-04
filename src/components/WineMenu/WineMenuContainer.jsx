import styled from "styled-components";
import MenuContainer from "../Menu/MenuContainer";

const WineMenuContainer = styled(MenuContainer)`
  .content {
    padding: 60px 0 60px 0;
    max-width: 600px;
    min-width: 300px;
  }

  hr {
    margin: 30px 0 30px 0;
  }
  .group {
    width: 80%;
    grid-column-gap: 40px;
  }

  h2 {
    text-align: center;
    font-family: "Nunito Sans";
    text-transform: uppercase;
    margin-top: 50px;
  }

  @media only screen and (min-width: 426px) {
    .group {
      display: grid;
    }
  }
`;

export default WineMenuContainer;