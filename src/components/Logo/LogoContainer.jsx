import styled from "styled-components";
import { Link } from "gatsby";

const LogoContainer = styled(Link)`
  display: block;
  text-align: center;
  line-height: 0.5;
  margin: auto 25px auto 25px;
  height: 100%;
  font-family: "Nunito Sans";
  text-decoration: none;
  color: black;
  white-space: nowrap;
  text-transform: uppercase;
  z-index: 10;
  
  h1 {
    font-size: 36px;
  }
  p {
    font-size: 18px;
  }

  h1::after {
    content: "";
    display: block;
    width: 100%;
    background-color: var(--venetian-red);
    height: 3px;
    position: relative;
    top: 10px;
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 28px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export default LogoContainer;
