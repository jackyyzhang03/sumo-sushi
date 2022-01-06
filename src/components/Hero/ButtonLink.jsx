import { Link } from "gatsby";
import styled from "styled-components";

const ButtonLink = styled(Link)`
  display: block;
  height: 60px;
  width: 80%;
  max-width: 300px;
  border: 1px solid white;
  border-radius: 10px;
  color: white;
  text-decoration: none;
  margin: auto;
  background: none;
  font-size: 16px;
  vertical-align: middle;
  line-height: 60px;
  animation: fade 3s ease, slide-up 2.5s ease;

  &:hover {
    border-width: 2px;
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media only screen and (max-width: 425px) {
    height: 55px;
    line-height: 55px;
    font-size: 14px;
  }
`;

export default ButtonLink;
