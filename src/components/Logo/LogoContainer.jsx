import styled from "styled-components";
import { Link } from "gatsby";

const LogoContainer = styled(Link)`
  display: inline-block;
  flex: none;
  text-align: center;
  line-height: 0.5;
  margin: auto 25px auto 25px;

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
`;

export default LogoContainer;
